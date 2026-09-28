/* 主应用 —— 路由 / 导航 / 首页 / 设置页 */
(function () {
  const CET6 = (window.CET6 = window.CET6 || {});
  const u = CET6.util;

  const routes = [
    { path: "", label: "首页", icon: "🏠" },
    { path: "vocab", label: "词汇", icon: "📚" },
    { path: "daily", label: "每日", icon: "📅" },
    { path: "reading", label: "阅读", icon: "📖" },
    { path: "listening", label: "听力", icon: "🎧" },
    { path: "translate", label: "翻译", icon: "🌐" },
    { path: "tools", label: "工具", icon: "🤖" },
    { path: "cheatsheet", label: "干货", icon: "💡" },
    { path: "settings", label: "设置", icon: "⚙️" }
  ];

  function nav() {
    const nav = document.getElementById("mainNav");
    const hash = location.hash.slice(2) || "";
    const current = hash.split("/")[0];
    nav.innerHTML = routes.map(r =>
      '<a href="#/' + r.path + '" class="' + (current === r.path ? "active" : "") + '">' + r.icon + " " + r.label + "</a>"
    ).join("");
  }

  function updateStreak() {
    const n = CET6.store.streak();
    document.getElementById("streakNum").textContent = n;
  }

  function router() {
    nav();
    updateStreak();
    const view = document.getElementById("view");
    const hash = location.hash.slice(2) || "";
    const parts = hash.split("/");
    const route = parts[0];
    const params = parts.slice(1);

    view.innerHTML = "";
    switch (route) {
      case "": renderHome(view); break;
      case "vocab": CET6.vocab.render(view, params); break;
      case "daily": CET6.daily.render(view); break;
      case "reading": CET6.reading.render(view, params); break;
      case "listening": CET6.listenwrite.render(view, params); break;
      case "translate": CET6.translate.render(view, params); break;
      case "tools": CET6.tools.render(view, params); break;
      case "cheatsheet": CET6.cheatsheet.render(view, params); break;
      case "settings": renderSettings(view); break;
      default: renderHome(view);
    }
    window.scrollTo(0, 0);
  }

  /* ==================== 首页 ==================== */
  function renderHome(view) {
    const store = CET6.store;
    const vocab = store.getVocab();
    const knownCount = Object.keys(vocab.known).length;
    const totalWords = ((window.CET6_VOCAB || { words: [] }).words || []).length;
    const todayMin = store.todayMinutes();
    const streak = store.streak();
    const goalMin = store.getSettings().dailyGoalMin || 60;
    const aiReady = CET6.ai.isConfigured();

    const modules = [
      { icon: "📚", title: "词汇学习", desc: "卡片记忆 + 拼写测试 + 生词本", href: "#/vocab", color: "var(--primary-50)" },
      { icon: "📅", title: "每日学习", desc: "每日一句 + 阅读语感 + 学习计时", href: "#/daily", color: "var(--warning-50)" },
      { icon: "📖", title: "阅读理解", desc: "仔细阅读 + 选词填空 + 技巧专区", href: "#/reading", color: "var(--info-50)" },
      { icon: "🎧", title: "听力训练", desc: "语音合成朗读 + 听写填空", href: "#/listening", color: "var(--success-50)" },
      { icon: "✍️", title: "写作批改", desc: "真题题目 + AI 批改 + 历史复盘", href: "#/listening/writing", color: "var(--danger-50)" },
      { icon: "🌐", title: "翻译练习", desc: "段落翻译 + AI 评分 + 错题复盘", href: "#/translate", color: "var(--primary-100)" },
      { icon: "💡", title: "干货速查", desc: "重点单词 + 句式 + 短语", href: "#/cheatsheet", color: "var(--warning-100)" },
      { icon: "🤖", title: "工具区", desc: "AI 对话 + 查词典 + 中英互译", href: "#/tools", color: "var(--info-50)" },
      { icon: "⚙️", title: "设置中心", desc: "AI 配置 + 数据导入导出", href: "#/settings", color: "#f1f5f9" }
    ];

    view.innerHTML =
      '<section class="hero">' +
      "<div><h1>📚 六级备考助手</h1>" +
      "<p>词汇 · 阅读 · 听力 · 写作 · 翻译 — 一站式备考</p>" +
      '<div class="row mt14" style="gap:8px">' +
      '<a class="btn" href="#/vocab">开始学习</a>' +
      '<a class="btn" href="#/daily" style="background:rgba(255,255,255,.2);color:#fff">每日打卡</a>' +
      "</div></div>" +
      '<div style="text-align:center"><div style="font-size:48px">🔥</div><div style="font-size:32px;font-weight:800">' + streak + '</div><div style="opacity:.8">连续学习天数</div></div>' +
      "</section>" +

      '<div class="grid grid-2 mb20">' +
      statBox("已掌握词汇", knownCount + " / " + totalWords, knownCount / (totalWords || 1) * 100, "primary") +
      statBox("今日学习", todayMin + " / " + goalMin + " 分钟", todayMin / goalMin * 100, "success") +
      "</div>" +

      '<div class="grid grid-4">' +
      modules.map(m =>
        '<a class="module-card" href="' + m.href + '">' +
        '<div class="mc-icon" style="background:' + m.color + '">' + m.icon + "</div>" +
        "<h3>" + m.title + "</h3><p>" + m.desc + "</p></a>"
      ).join("") + "</div>" +

      (aiReady ? "" : '<div class="card mt20" style="background:var(--warning-50);border-color:#fde68a">' +
        '<div class="row" style="gap:8px;align-items:flex-start">' +
        '<span style="font-size:20px">💡</span><div><b>开启 AI 功能</b><br><span class="small muted">配置 AI 密钥后可使用写作批改、翻译评分、AI 对话等功能。<a href="#/settings">前往设置 →</a></span></div></div></div>');
  }

  function statBox(label, val, pct, color) {
    const cls = color === "success" ? "green" : "";
    return '<div class="card">' +
      '<div class="row between"><span class="stat-label">' + label + "</span><b>" + val + "</b></div>" +
      '<div class="progress ' + cls + ' mt8"><div style="width:' + Math.min(100, pct) + '%"></div></div></div>';
  }

  /* ==================== 设置页 ==================== */
  function renderSettings(view) {
    const s = CET6.store.getSettings();

    view.innerHTML =
      '<div class="page-head"><h1>⚙️ 设置</h1><div class="sub">AI 配置 · 学习偏好 · 数据管理</div></div>' +

      '<div class="card mb20">' +
      '<h2>🤖 AI 配置</h2>' +
      '<div class="small muted mb14">用于写作批改、翻译评分、AI 对话。推荐使用<strong>智谱 glm-4-flash（完全免费）</strong></div>' +

      '<div class="mb14" style="padding:14px;background:var(--success-50);border-radius:10px;border:1px solid #bbf7d0">' +
      '<div style="font-weight:600;margin-bottom:8px">✅ 推荐：智谱 AI（免费）</div>' +
      '<div class="small muted mb8">glm-4-flash 模型永久免费，支持中文，速度快</div>' +
      '<div class="row" style="gap:8px">' +
      '<a class="btn sm" href="https://open.bigmodel.cn" target="_blank">🔗 去注册获取 Key</a>' +
      '<button class="btn secondary sm" id="oneClickZhipu">一键填入智谱配置</button></div>' +
      '</div>' +

      '<div class="field"><label>AI 服务商</label>' +
      '<select class="select" id="aiProvider">' +
      '<option value="zhipu"' + (s.aiProvider === "zhipu" ? " selected" : "") + '>智谱 AI（GLM-4-Flash 免费）</option>' +
      '<option value="deepseek"' + (s.aiProvider === "deepseek" ? " selected" : "") + ">DeepSeek</option>" +
      '<option value="openai"' + (s.aiProvider === "openai" ? " selected" : "") + ">OpenAI</option>" +
      '<option value="custom"' + (s.aiProvider === "custom" ? " selected" : "") + ">自定义接口</option>" +
      "</select>" +
      '<div class="hint" id="providerHint"></div></div>' +

      '<div class="field"><label>API Base URL</label>' +
      '<input class="input" id="aiBaseUrl" value="' + u.escapeHtml(s.aiBaseUrl) + '" placeholder="https://open.bigmodel.cn/api/paas/v4"></div>' +

      '<div class="field"><label>API Key</label>' +
      '<div class="row" style="gap:0">' +
      '<input class="input" id="aiKey" type="password" value="' + u.escapeHtml(s.aiKey) + '" placeholder="sk-... 粘贴你的 API 密钥" style="border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;flex:1">' +
      '<button class="btn secondary" id="toggleKey" style="border-left:none;border-top-left-radius:0;border-bottom-left-radius:0;padding:0 12px" title="显示/隐藏">👁️</button>' +
      "</div>" +
      '<div class="hint">密钥只保存在你的浏览器本地，不会上传到任何服务器</div></div>' +

      '<div class="field"><label>模型名称</label>' +
      '<input class="input" id="aiModel" value="' + u.escapeHtml(s.aiModel) + '" placeholder="glm-4-flash"></div>' +

      '<div class="row" style="gap:8px">' +
      '<button class="btn" id="saveAI">💾 保存配置</button> ' +
      '<button class="btn secondary" id="testAI">🔌 测试连接</button>' +
      '<button class="btn secondary" id="clearAIKey">🗑️ 清除密钥</button></div>' +
      '<div id="testResult" class="mt8"></div>' +

      '<div class="mt14 pt14" style="border-top:1px solid var(--border)">' +
      '<div class="small muted mb8">💡 如何获取 API Key？</div>' +
      '<div class="row" style="gap:6px;flex-wrap:wrap">' +
      '<a class="tag" href="https://open.bigmodel.cn" target="_blank">智谱注册（免费）</a>' +
      '<a class="tag" href="https://platform.deepseek.com" target="_blank">DeepSeek 注册</a>' +
      '<a class="tag" href="https://platform.openai.com" target="_blank">OpenAI 注册</a>' +
      "</div></div></div>" +

      '<div class="card mb20">' +
      '<h2>🎨 背景主题</h2>' +
      '<div class="small muted mb14">选择你喜欢的背景配色，立即生效</div>' +
      '<div class="theme-picker" id="themePicker">' +
      '<div class="theme-card' + (s.theme === "default" ? " active" : "") + '" data-theme="default"><div class="swatch" style="background:linear-gradient(135deg,#f6f7fb,#eef2ff)"></div><div class="label">默认浅色</div></div>' +
      '<div class="theme-card' + (s.theme === "warm" ? " active" : "") + '" data-theme="warm"><div class="swatch" style="background:linear-gradient(135deg,#fffbeb,#fef3c7)"></div><div class="label">暖阳</div></div>' +
      '<div class="theme-card' + (s.theme === "mint" ? " active" : "") + '" data-theme="mint"><div class="swatch" style="background:linear-gradient(135deg,#f0fdf4,#dcfce7)"></div><div class="label">薄荷绿</div></div>' +
      '<div class="theme-card' + (s.theme === "ocean" ? " active" : "") + '" data-theme="ocean"><div class="swatch" style="background:linear-gradient(135deg,#f0f9ff,#e0f2fe)"></div><div class="label">海洋蓝</div></div>' +
      '<div class="theme-card' + (s.theme === "sakura" ? " active" : "") + '" data-theme="sakura"><div class="swatch" style="background:linear-gradient(135deg,#fdf2f8,#fce7f3)"></div><div class="label">樱花粉</div></div>' +
      '<div class="theme-card' + (s.theme === "ink" ? " active" : "") + '" data-theme="ink"><div class="swatch" style="background:linear-gradient(135deg,#f5f5f4,#e7e5e4)"></div><div class="label">墨韵</div></div>' +
      '<div class="theme-card' + (s.theme === "dark" ? " active" : "") + '" data-theme="dark"><div class="swatch" style="background:linear-gradient(135deg,#0f172a,#1e293b)"></div><div class="label">暗夜模式</div></div>' +
      "</div></div>" +

      '<div class="card mb20">' +
      '<h2>📊 学习偏好</h2>' +
      '<div class="field"><label>每日学习目标（分钟）</label>' +
      '<input class="input" id="dailyGoal" type="number" value="' + s.dailyGoalMin + '" min="10" max="600" style="max-width:160px"></div>' +
      '<div class="row" style="gap:10px">' +
      '<div class="field" style="flex:1"><label>学习开始时间</label><input class="input" id="studyStart" type="time" value="' + s.studyStart + '"></div>' +
      '<div class="field" style="flex:1"><label>学习结束时间</label><input class="input" id="studyEnd" type="time" value="' + s.studyEnd + '"></div></div>' +
      '<button class="btn" id="savePref">保存偏好</button></div>' +

      '<div class="card">' +
      '<h2>💾 数据管理</h2>' +
      '<div class="row" style="gap:10px;flex-wrap:wrap">' +
      '<button class="btn secondary" id="exportData">导出全部数据</button>' +
      '<button class="btn secondary" id="importData">导入数据</button>' +
      '<button class="btn danger" id="clearData">清空全部数据</button></div>' +
      '<div class="hint mt8">数据保存在浏览器 localStorage 中，清除浏览器缓存会丢失。建议定期导出备份。</div></div>';

    const providerHints = {
      zhipu: "智谱 AI 开放平台，glm-4-flash 模型免费。官网：https://open.bigmodel.cn",
      deepseek: "DeepSeek API，模型推荐 deepseek-chat。官网：https://platform.deepseek.com",
      openai: "OpenAI 兼容接口，可使用中转站。模型推荐 gpt-4o-mini。",
      custom: "任何 OpenAI 兼容的 /chat/completions 接口均可。"
    };

    function updateHint() {
      view.querySelector("#providerHint").textContent = providerHints[view.querySelector("#aiProvider").value] || "";
      const presets = {
        zhipu: { url: "https://open.bigmodel.cn/api/paas/v4", model: "glm-4-flash" },
        deepseek: { url: "https://api.deepseek.com/v1", model: "deepseek-chat" },
        openai: { url: "https://api.openai.com/v1", model: "gpt-4o-mini" },
        custom: { url: "", model: "" }
      };
      const p = presets[view.querySelector("#aiProvider").value];
      if (p) {
        view.querySelector("#aiBaseUrl").value = p.url;
        view.querySelector("#aiModel").value = p.model;
      }
    }

    view.querySelector("#aiProvider").onchange = updateHint;
    updateHint();

    /* 一键填入智谱配置 */
    view.querySelector("#oneClickZhipu").onclick = function () {
      view.querySelector("#aiProvider").value = "zhipu";
      view.querySelector("#aiBaseUrl").value = "https://open.bigmodel.cn/api/paas/v4";
      view.querySelector("#aiModel").value = "glm-4-flash";
      updateHint();
      u.toast("已填入智谱免费配置，请粘贴 API Key 后保存", "success");
    };

    view.querySelector("#saveAI").onclick = function () {
      CET6.store.saveSettings({
        aiProvider: view.querySelector("#aiProvider").value,
        aiBaseUrl: view.querySelector("#aiBaseUrl").value.trim(),
        aiKey: view.querySelector("#aiKey").value.trim(),
        aiModel: view.querySelector("#aiModel").value.trim()
      });
      u.toast("AI 配置已保存", "success");
    };

    /* 显示/隐藏密钥 */
    view.querySelector("#toggleKey").onclick = function () {
      const input = view.querySelector("#aiKey");
      if (input.type === "password") {
        input.type = "text";
        this.textContent = "🙈";
      } else {
        input.type = "password";
        this.textContent = "👁️";
      }
    };

    /* 清除密钥 */
    view.querySelector("#clearAIKey").onclick = function () {
      if (u.confirm("确定清除 API 密钥吗？")) {
        view.querySelector("#aiKey").value = "";
        CET6.store.saveSettings({ aiKey: "" });
        u.toast("密钥已清除", "success");
      }
    };

    /* 主题选择 */
    view.querySelectorAll("#themePicker .theme-card").forEach(function (el) {
      el.onclick = function () {
        var theme = this.dataset.theme;
        CET6.store.saveSettings({ theme: theme });
        applyTheme(theme);
        view.querySelectorAll("#themePicker .theme-card").forEach(function (c) { c.classList.remove("active"); });
        this.classList.add("active");
        u.toast("主题已切换", "success");
      };
    });

    view.querySelector("#testAI").onclick = async function () {
      CET6.store.saveSettings({
        aiProvider: view.querySelector("#aiProvider").value,
        aiBaseUrl: view.querySelector("#aiBaseUrl").value.trim(),
        aiKey: view.querySelector("#aiKey").value.trim(),
        aiModel: view.querySelector("#aiModel").value.trim()
      });
      const result = view.querySelector("#testResult");
      result.innerHTML = '<span class="muted">⏳ 测试中…</span>';
      try {
        const reply = await CET6.ai.chatSync([{ role: "user", content: "Say hello in English and Chinese." }]);
        result.innerHTML = '<span class="badge green">✅ 连接成功</span><div class="small mt8">' + u.escapeHtml(reply.slice(0, 200)) + "</div>";
        u.toast("AI 连接成功", "success");
      } catch (e) {
        result.innerHTML = '<span class="badge red">❌ 失败</span><div class="small" style="color:var(--danger)">' + u.escapeHtml(e.message) + "</div>";
      }
    };

    view.querySelector("#savePref").onclick = function () {
      CET6.store.saveSettings({
        dailyGoalMin: parseInt(view.querySelector("#dailyGoal").value) || 60,
        studyStart: view.querySelector("#studyStart").value,
        studyEnd: view.querySelector("#studyEnd").value
      });
      u.toast("偏好已保存", "success");
    };

    view.querySelector("#exportData").onclick = function () {
      const data = CET6.store.exportAll();
      const blob = new Blob([data], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "cet6-prep-backup-" + new Date().toISOString().slice(0, 10) + ".json";
      a.click();
      u.toast("数据已导出", "success");
    };

    view.querySelector("#importData").onclick = function () {
      u.modal("导入数据", '<div class="field"><label>选择备份文件</label>' +
        '<input type="file" id="importFile" accept=".json" style="width:100%"></div>' +
        '<div class="row" style="justify-content:flex-end"><button class="btn" id="doImport2">导入</button></div>',
        function (modal) {
          modal.querySelector("#doImport2").onclick = function () {
            const file = modal.querySelector("#importFile").files[0];
            if (!file) { u.toast("请选择文件", "error"); return; }
            const reader = new FileReader();
            reader.onload = function () {
              try {
                const n = CET6.store.importAll(reader.result);
                u.closeModal();
                u.toast("成功导入 " + n + " 条数据", "success");
                router();
              } catch (e) {
                u.toast("导入失败：" + e.message, "error");
              }
            };
            reader.readAsText(file);
          };
        });
    };

    view.querySelector("#clearData").onclick = function () {
      if (u.confirm("确定清空全部学习数据吗？此操作不可撤销！建议先导出备份。")) {
        CET6.store.clearAll();
        u.toast("数据已清空", "success");
        router();
      }
    };
  }

  window.addEventListener("hashchange", router);

  function applyTheme(theme) {
    if (!theme) theme = "default";
    document.body.setAttribute("data-theme", theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) { meta = document.createElement("meta"); meta.setAttribute("name", "theme-color"); document.head.appendChild(meta); }
    meta.setAttribute("content", theme === "dark" ? "#0f172a" : theme === "warm" ? "#fffbeb" : theme === "mint" ? "#f0fdf4" : theme === "ocean" ? "#f0f9ff" : theme === "sakura" ? "#fdf2f8" : theme === "ink" ? "#f5f5f4" : "#f6f7fb");
  }

  function init() {
    var s = CET6.store.getSettings();
    if (s.theme) applyTheme(s.theme);

    /* 顶栏主题快捷下拉 */
    var themeBtn = document.getElementById("themeBtn");
    if (themeBtn) {
      var themes = [
        { id: "default", name: "默认浅色", colors: "#f6f7fb,#eef2ff" },
        { id: "warm", name: "暖阳", colors: "#fffbeb,#fef3c7" },
        { id: "mint", name: "薄荷绿", colors: "#f0fdf4,#dcfce7" },
        { id: "ocean", name: "海洋蓝", colors: "#f0f9ff,#e0f2fe" },
        { id: "sakura", name: "樱花粉", colors: "#fdf2f8,#fce7f3" },
        { id: "ink", name: "墨韵", colors: "#f5f5f4,#e7e5e4" },
        { id: "dark", name: "暗夜模式", colors: "#0f172a,#1e293b" }
      ];
      var currentTheme = s.theme || "default";
      var dd = document.createElement("div");
      dd.className = "theme-dropdown";
      dd.innerHTML = '<h4>选择背景主题</h4><div class="theme-picker">' +
        themes.map(function (t) {
          return '<div class="theme-card' + (t.id === currentTheme ? " active" : "") + '" data-th="' + t.id + '">' +
            '<div class="swatch" style="background:linear-gradient(135deg,' + t.colors + ')"></div>' +
            '<div class="label">' + t.name + "</div></div>";
        }).join("") + "</div>";
      themeBtn.parentElement.appendChild(dd);

      themeBtn.onclick = function (e) {
        e.stopPropagation();
        dd.classList.toggle("show");
      };
      dd.querySelectorAll(".theme-card").forEach(function (el) {
        el.onclick = function () {
          var th = this.dataset.th;
          CET6.store.saveSettings({ theme: th });
          applyTheme(th);
          dd.querySelectorAll(".theme-card").forEach(function (c) { c.classList.remove("active"); });
          this.classList.add("active");
          dd.classList.remove("show");
          u.toast("主题已切换", "success");
        };
      });
      document.addEventListener("click", function () { dd.classList.remove("show"); });
      dd.addEventListener("click", function (e) { e.stopPropagation(); });
    }

    if (!location.hash) location.hash = "#/";
    else router();
  }
  if (document.readyState !== "loading") init();
  else window.addEventListener("DOMContentLoaded", init);
})();
