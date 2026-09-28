/* 本地数据存储（localStorage）与全局工具 */
(function () {
  const NS = "cet6prep_";
  const CET6 = (window.CET6 = window.CET6 || {});

  function read(key, fallback) {
    try {
      const raw = localStorage.getItem(NS + key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch (e) { return fallback; }
  }
  function write(key, val) {
    try { localStorage.setItem(NS + key, JSON.stringify(val)); } catch (e) { console.warn("storage write failed", e); }
  }

  function todayKey(d) {
    const dt = d || new Date();
    return dt.getFullYear() + "-" + String(dt.getMonth() + 1).padStart(2, "0") + "-" + String(dt.getDate()).padStart(2, "0");
  }

  const DEFAULT_SETTINGS = {
    aiProvider: "zhipu",        // zhipu | deepseek | openai | custom
    aiBaseUrl: "https://open.bigmodel.cn/api/paas/v4",
    aiKey: "",
    aiModel: "glm-4-flash",
    dailyGoalMin: 60,           // 每日学习目标（分钟）
    studyStart: "19:00",        // 学习时间段
    studyEnd: "22:00",
    remindOn: false,            // 时间段提醒
    theme: "default"            // 背景主题
  };

  const store = {
    // ---- 设置 ----
    getSettings() {
      return Object.assign({}, DEFAULT_SETTINGS, read("settings", {}));
    },
    saveSettings(patch) {
      const s = Object.assign(this.getSettings(), patch);
      write("settings", s);
      return s;
    },

    // ---- 学习计时 / 打卡 ----
    getStudyLog() { return read("studyLog", {}); },
    addStudyMinutes(min) {
      if (min <= 0) return;
      const log = this.getStudyLog();
      const k = todayKey();
      log[k] = (log[k] || 0) + min;
      write("studyLog", log);
    },
    todayMinutes() { return this.getStudyLog()[todayKey()] || 0; },
    streak() {
      const log = this.getStudyLog();
      let n = 0;
      const d = new Date();
      // 若今天没学，从昨天起算（保持已有连击显示）
      if (!log[todayKey(d)]) d.setDate(d.getDate() - 1);
      while (log[todayKey(d)]) { n++; d.setDate(d.getDate() - 1); }
      return n;
    },

    // ---- 断点续学 ----
    getResume(key) { return read("resume_" + key, null); },
    setResume(key, val) { write("resume_" + key, val); },
    clearResume(key) { localStorage.removeItem(NS + "resume_" + key); },

    // ---- 单词收藏（与干货收藏独立存储） ----
    getFavWords() { return read("favWords", {}); },
    isFavWord(w) { return !!this.getFavWords()[w]; },
    toggleFavWord(w) {
      const f = this.getFavWords();
      if (f[w]) delete f[w]; else f[w] = true;
      write("favWords", f);
      return !!f[w];
    },

    // ---- SM-2 间隔复习 ----
    getSM2() {
      return read("sm2", {});
    },
    saveSM2(sm2) { write("sm2", sm2); },
    // overall ease 全局难度权重，初始 2.5（SM-2）
    reviewDue(sm2, word, known) {
      const today = todayKey();
      let c = sm2[word] || { interval: 0, ease: 2.5, due: today, reps: 0 };
      if (known) {
        c.reps++;
        if (c.reps === 1) c.interval = 1;
        else if (c.reps === 2) c.interval = 3;
        else c.interval = Math.round(c.interval * c.ease);
        c.ease = Math.min(3.5, c.ease + 0.1);
      } else {
        c.reps = 0;
        c.interval = 1;
        c.ease = Math.max(1.3, c.ease - 0.3);
      }
      const next = new Date();
      next.setDate(next.getDate() + c.interval);
      c.due = next.getFullYear() + "-" + String(next.getMonth() + 1).padStart(2, "0") + "-" + String(next.getDate()).padStart(2, "0");
      sm2[word] = c;
      this.saveSM2(sm2);
      return c;
    },
    // 到期待复习的单词列表
    dueWords() {
      const sm2 = this.getSM2();
      const today = todayKey();
      const v = this.getVocab();
      return Object.keys(sm2)
        .filter(w => !v.known[w] && sm2[w].due <= today)
        .sort((a, b) => sm2[a].due.localeCompare(sm2[b].due));
    },
    sm2Card(word) { return this.getSM2()[word] || { interval: 0, ease: 2.5, due: todayKey(), reps: 0 }; },

    // ---- 词汇进度 ----
    getVocab() {
      return read("vocab", { known: {}, review: [], counts: {} });
    },
    markWord(word, status) { // status: known | fuzzy | unknown
      const v = this.getVocab();
      v.counts[word] = (v.counts[word] || 0) + 1;
      if (status === "known") {
        v.known[word] = (v.known[word] || 0) + 1;
        const i = v.review.indexOf(word);
        if (i >= 0) v.review.splice(i, 1);
      } else {
        const i = v.review.indexOf(word);
        if (i < 0) v.review.push(word);
        if (status === "unknown") delete v.known[word];
      }
      write("vocab", v);
    },
    toggleReview(word) {
      const v = this.getVocab();
      const i = v.review.indexOf(word);
      if (i >= 0) v.review.splice(i, 1); else v.review.push(word);
      write("vocab", v);
    },

    // ---- 自定义词库（用户导入） ----
    getCustomWords() { return read("customWords", []); },
    addCustomWords(arr) { write("customWords", this.getCustomWords().concat(arr)); },

    // ---- 翻译练习历史 ----
    getTransHistory() { return read("transHistory", []); },
    addTransHistory(rec) {
      const h = this.getTransHistory();
      h.unshift(rec);
      write("transHistory", h.slice(0, 200));
    },

    // ---- 写作历史 ----
    getWritingHistory() { return read("writingHistory", []); },
    addWritingHistory(rec) {
      const h = this.getWritingHistory();
      h.unshift(rec);
      write("writingHistory", h.slice(0, 200));
    },

    // ---- 全部数据导出 / 导入 / 清空 ----
    exportAll() {
      const obj = {};
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.indexOf(NS) === 0) obj[k] = localStorage.getItem(k);
      }
      return JSON.stringify(obj, null, 2);
    },
    importAll(json) {
      const obj = JSON.parse(json);
      let n = 0;
      for (const k in obj) {
        if (k.indexOf(NS) === 0) { localStorage.setItem(k, obj[k]); n++; }
      }
      return n;
    },
    clearAll() {
      const keys = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.indexOf(NS) === 0) keys.push(k);
      }
      keys.forEach(k => localStorage.removeItem(k));
    }
  };

  // ---- 公共 UI 工具 ----
  CET6.util = {
    escapeHtml(s) {
      return String(s == null ? "" : s).replace(/[&<>"']/g, c => (
        { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
      ));
    },
    toast(msg, type) {
      const wrap = document.getElementById("toastWrap");
      const div = document.createElement("div");
      div.className = "toast " + (type || "");
      div.textContent = msg;
      wrap.appendChild(div);
      setTimeout(() => { div.style.opacity = "0"; div.style.transition = "opacity .3s"; }, 2600);
      setTimeout(() => div.remove(), 3000);
    },
    confirm(msg) {
      return window.confirm(msg);
    },
    modal(title, bodyHtml, onMount) {
      const root = document.getElementById("modalRoot");
      root.innerHTML =
        '<div class="modal-mask"><div class="modal"><h3>' + title + '</h3>' +
        '<div>' + bodyHtml + '</div>' +
        '<div class="row mt20" style="justify-content:flex-end"><button class="btn secondary" id="mClose">关闭</button></div>' +
        "</div></div>";
      root.querySelector("#mClose").onclick = () => (root.innerHTML = "");
      root.querySelector(".modal-mask").addEventListener("click", e => { if (e.target === e.currentTarget) root.innerHTML = ""; });
      if (onMount) onMount(root.querySelector(".modal"));
    },
    closeModal() { document.getElementById("modalRoot").innerHTML = ""; },
    debounce(fn, ms) {
      let t = null;
      return function () {
        const args = arguments, self = this;
        clearTimeout(t);
        t = setTimeout(() => fn.apply(self, args), ms);
      };
    },
    fmtMin(min) {
      const m = Math.round(min);
      return m >= 60 ? Math.floor(m / 60) + " 小时 " + (m % 60) + " 分钟" : m + " 分钟";
    }
  };

  CET6.store = store;
})();
