/* 每日学习模块 —— 每日一句 / 学习计时 / 打卡进度 */
(function () {
  const CET6 = (window.CET6 = window.CET6 || {});
  const u = CET6.util;
  let timerId = null;
  let timerStart = 0;
  let timerSecs = 0;
  let timerRunning = false;

  function render(view) {
    const sentences = window.CET6_SENTENCES || [];
    const day = Math.floor(Date.now() / 86400000);
    const today = sentences[day % sentences.length];

    const store = CET6.store;
    const todayMin = store.todayMinutes();
    const goalMin = store.getSettings().dailyGoalMin || 60;
    const streak = store.streak();
    const studyLog = store.getStudyLog();
    const last7 = getLast7Days(studyLog);
    const studyStart = store.getSettings().studyStart || "19:00";
    const studyEnd = store.getSettings().studyEnd || "22:00";
    const inSlot = isInStudySlot(studyStart, studyEnd);

    view.innerHTML =
      '<div class="page-head">' +
      '<h1>📅 每日学习</h1>' +
      '<div class="sub">坚持每天学习 · 积少成多</div></div>' +

      '<div class="sentence-card mb20">' +
      '<div class="sentence-en">' + u.escapeHtml(today.en) + "</div>" +
      '<div class="sentence-zh">' + u.escapeHtml(today.zh) + "</div>" +
      (today.notes ? '<div class="mt14" style="font-size:13px;opacity:.8">' +
        today.notes.map(n => '<span class="badge" style="background:rgba(255,255,255,.2);margin:2px">' + u.escapeHtml(n) + "</span>").join("") + "</div>" : "") +
      '<div class="row mt14" style="gap:8px">' +
      '<button class="btn sm" id="dSpeak" style="background:rgba(255,255,255,.2)">🔊 朗读</button>' +
      '<button class="btn sm" id="dSpeakSlow" style="background:rgba(255,255,255,.2)">🐢 慢速</button>' +
      '<button class="btn sm" id="dNext" style="background:rgba(255,255,255,.2)">换一句 →</button>' +
      "</div></div>" +

      '<div class="grid grid-3 mb20">' +
      '<div class="card" style="text-align:center">' +
      '<div class="stat-num" style="color:var(--primary)">' + studyStart + " - " + studyEnd + "</div>" +
      '<div class="stat-label">学习时段</div>' +
      '<div class="mt8"><span class="badge ' + (inSlot ? "green" : "gray") + '">' + (inSlot ? "● 学习中" : "○ 非学习时段") + "</span></div></div>" +
      '<div class="card" style="text-align:center">' +
      '<div class="stat-num" style="color:var(--warning)">' + goalMin + "</div>" +
      '<div class="stat-label">每日目标(分钟)</div>' +
      '<div class="mt8"><a href="#/settings" class="small muted">调整设置 →</a></div></div>' +
      '<div class="card" style="text-align:center">' +
      '<div class="stat-num" style="color:var(--success)">' + totalMinutes(studyLog) + "</div>" +
      '<div class="stat-label">累计学习(分钟)</div>' +
      '<div class="mt8"><span class="badge orange">🔥 ' + streak + " 天连击</span></div></div>" +
      "</div>" +

      '<div class="grid grid-2 mb20">' +
      '<div class="card">' +
      '<h2>⏱️ 学习计时</h2>' +
      '<div class="timer-display" id="timerDisplay">00:00:00</div>' +
      '<div class="row" style="justify-content:center;margin-top:14px;gap:10px">' +
      '<button class="btn" id="tStart">开始</button>' +
      '<button class="btn secondary" id="tPause" disabled>暂停</button>' +
      '<button class="btn secondary" id="tStop" disabled>结束并记录</button>' +
      "</div></div>" +

      '<div class="card">' +
      "<h2>📊 今日进度</h2>" +
      '<div class="row between" style="margin-bottom:8px"><span class="muted">今日目标</span><b>' + todayMin + " / " + goalMin + " 分钟</b></div>" +
      '<div class="progress green"><div style="width:' + Math.min(100, todayMin / goalMin * 100) + '%"></div></div>' +
      '<div class="row between mt14"><span class="muted">🔥 连续学习</span><b>' + streak + " 天</b></div>" +
      '<div class="row between mt8"><span class="muted">累计学习</span><b>' + totalMinutes(studyLog) + " 分钟</b></div>" +
      "</div></div>" +

      '<div class="card mb20">' +
      '<h2>📖 阅读语感训练</h2>' +
      '<div class="small muted mb14">每日精选短文片段 · 朗读并理解大意 · 培养英语阅读语感</div>' +
      '<div id="readingSense"></div></div>' +

      '<div class="card">' +
      '<h2>📈 近 7 天学习时长</h2>' +
      '<div id="chart7" style="display:flex;align-items:flex-end;gap:8px;height:140px;padding-top:10px"></div></div>' +

      '<div class="card mb20">' +
      '<h2>📅 学习打卡热力图</h2>' +
      '<div class="small muted mb14">绿色越深说明当天学得越多 · 连续打卡保持节奏</div>' +
      '<div id="heatmap" style="display:flex;gap:4px;overflow-x:auto;padding-bottom:8px"></div>' +
      '<div class="row mt14" style="gap:6px;align-items:center;flex-wrap:wrap">' +
      '<span class="small muted">少</span>' +
      ['<span style="width:12px;height:12px;border-radius:3px;background:#ebedf0;display:inline-block"></span>',
       '<span style="width:12px;height:12px;border-radius:3px;background:#c6e48b;display:inline-block"></span>',
       '<span style="width:12px;height:12px;border-radius:3px;background:#7cc96f;display:inline-block"></span>',
       '<span style="width:12px;height:12px;border-radius:3px;background:#3da13e;display:inline-block"></span>'].join("") +
      '<span class="small muted">多</span></div></div>';

    view.querySelector("#dSpeak").onclick = function () { CET6.tts.speak(today.en, { rate: 1.0 }); };
    view.querySelector("#dSpeakSlow").onclick = function () { CET6.tts.speak(today.en, { rate: 0.6 }); };
    let sIdx = day % sentences.length;
    view.querySelector("#dNext").onclick = function () {
      sIdx = (sIdx + 1) % sentences.length;
      const s = sentences[sIdx];
      view.querySelector(".sentence-en").textContent = s.en;
      view.querySelector(".sentence-zh").textContent = s.zh;
      if (s.notes) {
        let notesDiv = view.querySelector(".sentence-card .mt14");
        if (!notesDiv) {
          notesDiv = document.createElement("div");
          notesDiv.className = "mt14";
          notesDiv.style.cssText = "font-size:13px;opacity:.8";
          view.querySelector(".sentence-card").insertBefore(notesDiv, view.querySelector(".sentence-card .row.mt14"));
        }
        notesDiv.innerHTML = s.notes.map(n => '<span class="badge" style="background:rgba(255,255,255,.2);margin:2px">' + u.escapeHtml(n) + "</span>").join("");
      }
    };

    /* ---- 计时器 ---- */
    const tDisplay = view.querySelector("#timerDisplay");
    const btnStart = view.querySelector("#tStart");
    const btnPause = view.querySelector("#tPause");
    const btnStop = view.querySelector("#tStop");

    btnStart.onclick = function () {
      if (timerRunning) return;
      timerRunning = true;
      timerStart = Date.now() - timerSecs * 1000;
      btnStart.disabled = true;
      btnPause.disabled = false;
      btnStop.disabled = false;
      tDisplay.classList.add("running");
      timerId = setInterval(function () {
        timerSecs = Math.floor((Date.now() - timerStart) / 1000);
        tDisplay.textContent = fmtTime(timerSecs);
      }, 1000);
    };

    btnPause.onclick = function () {
      if (!timerRunning) return;
      timerRunning = false;
      clearInterval(timerId);
      btnStart.disabled = false;
      btnStart.textContent = "继续";
      btnPause.disabled = true;
      tDisplay.classList.remove("running");
    };

    btnStop.onclick = function () {
      if (timerSecs === 0) return;
      clearInterval(timerId);
      const mins = Math.max(1, Math.round(timerSecs / 60));
      CET6.store.addStudyMinutes(mins);
      timerRunning = false;
      timerSecs = 0;
      timerId = null;
      tDisplay.textContent = "00:00:00";
      tDisplay.classList.remove("running");
      btnStart.disabled = false;
      btnStart.textContent = "开始";
      btnPause.disabled = true;
      btnStop.disabled = true;
      u.toast("已记录 " + mins + " 分钟学习时间", "success");
      render(view);
    };

    /* ---- 阅读语感训练 ---- */
    renderReadingSense(view.querySelector("#readingSense"));

    /* ---- 7 天图表 ---- */
    const chart = view.querySelector("#chart7");
    const maxMin = Math.max(...last7.map(d => d.min), 60);
    chart.innerHTML = last7.map(d => {
      const h = Math.round(d.min / maxMin * 110) + 8;
      const cls = d.min >= goalMin ? "var(--success)" : d.min > 0 ? "var(--primary)" : "#e2e8f0";
      return '<div style="flex:1;text-align:center">' +
        '<div style="height:' + h + 'px;background:' + cls + ';border-radius:6px 6px 0 0;transition:height .3s"></div>' +
        '<div class="muted" style="font-size:11px;margin-top:4px">' + d.label + "</div>" +
        '<div style="font-size:11px;font-weight:600">' + d.min + "分</div></div>";
    }).join("");

    /* ---- 学习热力图（近 26 周） ---- */
    renderHeatmap(view.querySelector("#heatmap"), studyLog, goalMin);
  }

  function renderHeatmap(container, log, goalMin) {
    const weeks = 26;
    const daysLabel = ["日", "一", "二", "三", "四", "五", "六"];
    // 计算 26 周前的那一周的周日作为起始
    const end = new Date();
    const start = new Date(end);
    start.setDate(start.getDate() - (weeks * 7) + (7 - ((end.getDay() + 1) % 7)));

    let html = '';
    for (let w = 0; w < weeks; w++) {
      html += '<div style="display:flex;flex-direction:column;gap:3px">';
      for (let d = daysLabel.length - 1; d >= 0; d--) {
        const dt = new Date(start);
        dt.setDate(start.getDate() + w * 7 + ((d + 1) % 7));
        if (dt > end) { html += '<span style="width:12px;height:12px"></span>'; continue; }
        const k = dt.getFullYear() + "-" + String(dt.getMonth() + 1).padStart(2, "0") + "-" + String(dt.getDate()).padStart(2, "0");
        const min = log[k] || 0;
        const color = min <= 0 ? "#ebedf0" : min >= goalMin ? "#3da13e" : min >= goalMin / 2 ? "#7cc96f" : "#c6e48b";
        const isToday = k === todayStr();
        html += '<span title="' + k + ' · ' + min + ' 分钟" style="width:12px;height:12px;border-radius:3px;background:' + color + ';' + (isToday ? "outline:2px solid var(--primary)" : "") + '"></span>';
      }
      html += "</div>";
    }
    container.innerHTML = html;

    function todayStr() {
      const d = new Date();
      return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
    }
  }

  function renderReadingSense(container) {
    const R = window.CET6_READING || {};
    const passages = R.careful || [];
    const dayIdx = Math.floor(Date.now() / 86400000);
    if (!passages.length) { container.innerHTML = '<div class="empty">暂无语料</div>'; return; }
    const p = passages[dayIdx % passages.length];
    const excerpt = p.text.slice(0, 400) + (p.text.length > 400 ? "..." : "");

    let revealed = false;
    container.innerHTML =
      '<div style="padding:16px;background:var(--primary-50);border-radius:10px;margin-bottom:14px">' +
      '<div class="small muted mb8">来源: ' + u.escapeHtml(p.title) + '</div>' +
      '<div style="line-height:1.9;font-size:15px;white-space:pre-wrap">' + u.escapeHtml(excerpt) + '</div></div>' +
      '<div class="row mb14" style="gap:8px">' +
      '<button class="btn sm" id="rsPlay">🔊 朗读</button>' +
      '<button class="btn secondary sm" id="rsPlaySlow">🐢 慢速朗读</button>' +
      '<button class="btn secondary sm" id="rsStop">⏹ 停止</button>' +
      '<button class="btn secondary sm" id="rsZh">显示中文大意</button>' +
      "</div>" +
      '<div id="rsZhArea" style="display:none;padding:14px;background:var(--success-50);border-radius:10px">' +
      '<div class="small muted mb8">中文大意参考</div>' +
      '<div style="line-height:1.8">' + u.escapeHtml(p.title) + ' —— 这篇阅读文章的主题涉及' + u.escapeHtml(p.cat) + '领域，请通过朗读感受英语行文节奏，注意长句中的停顿与语调变化。</div></div>' +
      '<div class="small muted mt8">💡 提示: 先盲听一遍，再跟读，最后对照原文理解。每天坚持5分钟朗读，阅读速度和语感会显著提升。</div>';

    container.querySelector("#rsPlay").onclick = function () { CET6.tts.speak(excerpt, { rate: 1.0 }); };
    container.querySelector("#rsPlaySlow").onclick = function () { CET6.tts.speak(excerpt, { rate: 0.6 }); };
    container.querySelector("#rsStop").onclick = function () { CET6.tts.stop(); };
    container.querySelector("#rsZh").onclick = function () {
      revealed = !revealed;
      container.querySelector("#rsZhArea").style.display = revealed ? "" : "none";
      this.textContent = revealed ? "隐藏中文大意" : "显示中文大意";
    };
  }

  function isInStudySlot(start, end) {
    if (!start || !end) return false;
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const curMin = h * 60 + m;
    const [sh, sm] = start.split(":").map(Number);
    const [eh, em] = end.split(":").map(Number);
    const sMin = sh * 60 + sm;
    const eMin = eh * 60 + em;
    if (sMin <= eMin) return curMin >= sMin && curMin <= eMin;
    return curMin >= sMin || curMin <= eMin;
  }

  function getLast7Days(log) {
    const arr = [];
    const days = ["日", "一", "二", "三", "四", "五", "六"];
    const dt = new Date();
    for (let i = 6; i >= 0; i--) {
      const d = new Date(dt);
      d.setDate(d.getDate() - i);
      const k = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
      arr.push({ label: days[d.getDay()], min: log[k] || 0 });
    }
    return arr;
  }

  function totalMinutes(log) {
    return Object.values(log).reduce((a, b) => a + b, 0);
  }

  function fmtTime(sec) {
    const h = String(Math.floor(sec / 3600)).padStart(2, "0");
    const m = String(Math.floor(sec % 3600 / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return h + ":" + m + ":" + s;
  }

  CET6.daily = { render };
})();
