/* 阅读理解模块 —— 仔细阅读 / 选词填空 / 信息匹配 */
(function () {
  const CET6 = (window.CET6 = window.CET6 || {});
  const u = CET6.util;

  function render(view, params) {
    const tab = (params && params[0]) || "careful";
    if (tab === "cloze") renderCloze(view);
    else if (tab === "match") renderMatch(view);
    else if (tab === "tips") renderTips(view);
    else renderCareful(view);
  }

  /* ==================== 仔细阅读 ==================== */
  function renderCareful(view) {
    const R = window.CET6_READING || {};
    const items = R.careful || [];

    view.innerHTML =
      '<div class="page-head">' +
      '<h1>📖 阅读理解</h1>' +
      '<div class="sub">仔细阅读 · 选词填空 · 信息匹配</div></div>' +

      '<div class="row mb20" style="gap:8px">' +
      '<a class="tag active" href="#/reading">仔细阅读</a>' +
      '<a class="tag" href="#/reading/cloze">选词填空</a>' +
      '<a class="tag" href="#/reading/match">信息匹配</a>' +
      '<a class="tag" href="#/reading/tips">阅读技巧</a>' +
      "</div>" +

      '<div class="row mb20"><select class="select" id="rcSel" style="max-width:400px">' +
      items.map((it, i) => '<option value="' + i + '">' + u.escapeHtml(it.title) + "</option>").join("") +
      "</select></div>" +
      '<div id="rcArea"></div>';

    let idx = 0;
    view.querySelector("#rcSel").onchange = function () {
      idx = parseInt(this.value);
      showItem();
    };

    function showItem() {
      const it = items[idx];
      const area = view.querySelector("#rcArea");
      // 将正文拆成段落，每段下预留中文翻译区
      const paras = it.text.split(/\n{2,}/);
      const bodyHtml = paras.map((p, pi) =>
        '<div style="margin-bottom:12px">' +
        '<div style="line-height:1.9;font-size:15px;white-space:pre-wrap">' + u.escapeHtml(p) + "</div>" +
        '<div class="rc-zh" data-pi="' + pi + '" style="line-height:1.9;font-size:15px;color:var(--text-2);display:none;margin-top:4px;border-left:3px solid var(--primary);padding-left:10px;background:rgba(79,70,229,0.04)"></div>' +
        "</div>"
      ).join("");

      area.innerHTML =
        '<div class="card">' +
        '<div class="row between mb12" style="gap:8px;align-items:flex-start;flex-wrap:wrap">' +
        '<h2 style="margin:0">' + u.escapeHtml(it.title) + ' <span class="badge gray">' + u.escapeHtml(it.cat) + (it.year ? " · " + u.escapeHtml(it.year) : "") + "</span></h2>" +
        '<button class="btn secondary sm" id="rcTrans">🌐 中英对照</button></div>' +
        '<div id="rcTransStatus" class="small muted" style="display:none;margin-bottom:8px"></div>' +
        bodyHtml +
        (it.words ? '<div class="mb14"><div class="small muted">重点词汇</div><div class="row" style="gap:6px;flex-wrap:wrap">' +
          it.words.map(w => '<span class="tag">' + u.escapeHtml(w) + "</span>").join("") + "</div></div>" : "") +
        "</div>" +
        '<div class="card"><h2>题目</h2>' +
        it.questions.map((q, qi) =>
          '<div style="margin-bottom:16px">' +
          '<div style="font-weight:600;margin-bottom:8px">' + (qi + 1) + ". " + u.escapeHtml(q.q) + "</div>" +
          '<div class="row" style="gap:6px;flex-direction:column;align-items:flex-start">' +
          q.opts.map((o, oi) =>
            '<label class="row" style="gap:6px;cursor:pointer">' +
            '<input type="radio" name="rc' + qi + '" value="' + oi + '" style="cursor:pointer">' +
            "<span>" + String.fromCharCode(65 + oi) + ". " + u.escapeHtml(o) + "</span></label>"
          ).join("") + "</div>" +
          '<div class="rc-ex" data-qi="' + qi + '" style="display:none;margin-top:8px;padding:10px;background:var(--primary-50);border-radius:8px"></div></div>'
        ).join("") +
        '<button class="btn sm" id="rcCheck">提交答案</button>' +
        "</div>";

      area.querySelector("#rcCheck").onclick = function () {
        let score = 0;
        it.questions.forEach((q, qi) => {
          const checked = area.querySelector('input[name="rc' + qi + '"]:checked');
          const exDiv = area.querySelector('.rc-ex[data-qi="' + qi + '"]');
          if (checked) {
            if (parseInt(checked.value) === q.a) { score++; checked.parentElement.style.color = "var(--success)"; }
            else { checked.parentElement.style.color = "var(--danger)"; }
          }
          exDiv.style.display = "block";
          exDiv.innerHTML = '<span class="badge green">正确: ' + String.fromCharCode(65 + q.a) + "</span> " + (q.ex ? u.escapeHtml(q.ex) : "");
        });
        u.toast("得分: " + score + " / " + it.questions.length, score === it.questions.length ? "success" : "warning");
      };

      // 中英对照：逐段调用 AI 翻译并展示在段落下
      const transBtn = area.querySelector("#rcTrans");
      const transStatus = area.querySelector("#rcTransStatus");
      let zhOn = false;
      transBtn.onclick = async function () {
        const zhDivs = area.querySelectorAll(".rc-zh");
        if (!CET6.ai.isConfigured()) {
          transStatus.style.display = "";
          transStatus.style.color = "var(--danger)";
          transStatus.textContent = "⚠️ 请先在「设置」页面配置 AI 密钥，即可使用中英对照翻译。";
          u.toast("请先配置 AI 密钥", "warning");
          return;
        }
        zhOn = !zhOn;
        zhDivs.forEach(d => { if ((d.textContent || "").trim()) d.style.display = zhOn ? "" : "none"; });
        transBtn.textContent = zhOn ? "🌐 关闭翻译" : "🌐 中英对照";
        if (!zhOn) return;

        const paraArr = it.text.split(/\n{2,}/);
        for (let pi = 0; pi < paraArr.length; pi++) {
          const zhDiv = area.querySelector('.rc-zh[data-pi="' + pi + '"]');
          if ((zhDiv.textContent || "").trim()) continue;
          transStatus.style.display = "";
          transStatus.style.color = "";
          transStatus.textContent = "⏳ 正在翻译第 " + (pi + 1) + " / " + paraArr.length + " 段…";
          try {
            const zh = await CET6.ai.chatSync([
              { role: "system", content: "你是专业的英语六级翻译。请把给定的英文段落翻译成通顺、自然的简体中文，只输出译文本身，不要加任何解释、注释或英文。" },
              { role: "user", content: paraArr[pi] }
            ]);
            zhDiv.textContent = zh;
            zhDiv.style.display = zhOn ? "" : "none";
          } catch (e) {
            zhDiv.textContent = "（翻译失败：" + e.message + "）";
            zhDiv.style.display = zhOn ? "" : "none";
          }
        }
        transStatus.style.display = "none";
        u.toast("中英对照翻译完成", "success");
      };
    }

    showItem();
  }

  /* ==================== 选词填空 ==================== */
  function renderCloze(view) {
    const R = window.CET6_READING || {};
    const items = R.cloze || [];

    view.innerHTML =
      '<div class="page-head"><h1>📖 选词填空</h1></div>' +
      '<div class="row mb20" style="gap:8px">' +
      '<a class="tag" href="#/reading">仔细阅读</a>' +
      '<a class="tag active" href="#/reading/cloze">选词填空</a>' +
      '<a class="tag" href="#/reading/match">信息匹配</a>' +
      '<a class="tag" href="#/reading/tips">阅读技巧</a></div>' +
      '<select class="select mb20" id="clSel">' +
      items.map((it, i) => '<option value="' + i + '">' + u.escapeHtml(it.title) + "</option>").join("") + "</select>" +
      '<div id="clArea"></div>';

    let idx = 0;
    view.querySelector("#clSel").onchange = function () { idx = parseInt(this.value); show(); };

    function show() {
      const it = items[idx];
      const area = view.querySelector("#clArea");
      const blanks = it.answers.length;

      let html = '<div class="card"><h2>' + u.escapeHtml(it.title) + ' <span class="badge gray">' + u.escapeHtml(it.cat) + "</span></h2>";

      html += '<div class="mb14"><div class="small muted">选项</div><div class="row" style="gap:6px;flex-wrap:wrap" id="clOpts">';
      html += it.options.map((o, i) => '<span class="tag" data-opt="' + i + '">' + u.escapeHtml(o) + "</span>").join("");
      html += "</div></div>";

      html += '<div style="line-height:2;font-size:15px">';
      let textPart = it.text;
      for (let i = 1; i <= blanks; i++) {
        textPart = textPart.replace("{{" + i + "}}",
          '<select class="blank-input cl-blank" data-idx="' + i + '" style="width:120px;border-bottom:2px solid var(--primary);background:#f8fafc">' +
          '<option value="">__' + i + "__</option>" +
          it.options.map(o => { const letter = o.trim().charAt(0); return '<option value="' + letter + '">' + u.escapeHtml(o) + "</option>"; }).join("") +
          "</select>");
      }
      html += textPart + "</div></div>";

      html += '<div class="card"><h2>解析</h2><div id="clExp" style="display:none">';
      for (let i = 1; i <= blanks; i++) {
        html += '<div class="row mb8"><span class="badge blue">' + i + "</span><span class='small'>" +
          u.escapeHtml(it.explanations[i] || "") + " → <b>" + u.escapeHtml(it.answers[i - 1]) + "</b></span></div>";
      }
      html += "</div>";
      html += '<button class="btn sm" id="clCheck">检查答案</button> ';
      html += '<button class="btn secondary sm" id="clReveal">显示解析</button></div>';

      area.innerHTML = html;

      area.querySelector("#clCheck").onclick = function () {
        let correct = 0;
        area.querySelectorAll(".cl-blank").forEach(sel => {
          const idx = parseInt(sel.dataset.idx);
          const ans = it.answers[idx - 1];
          if (sel.value === ans) { correct++; sel.style.borderColor = "var(--success)"; sel.style.color = "var(--success)"; }
          else { sel.style.borderColor = "var(--danger)"; sel.style.color = "var(--danger)"; }
        });
        u.toast("正确 " + correct + " / " + blanks, correct === blanks ? "success" : "warning");
      };
      area.querySelector("#clReveal").onclick = function () {
        area.querySelector("#clExp").style.display = "";
        area.querySelectorAll(".cl-blank").forEach(sel => {
          const idx = parseInt(sel.dataset.idx);
          sel.value = it.answers[idx - 1];
          sel.style.borderColor = "var(--success)";
          sel.style.color = "var(--success)";
        });
      };
    }

    show();
  }

  /* ==================== 信息匹配 ==================== */
  function renderMatch(view) {
    const R = window.CET6_READING || {};
    const items = R.match || [];

    view.innerHTML =
      '<div class="page-head"><h1>📖 信息匹配</h1></div>' +
      '<div class="row mb20" style="gap:8px">' +
      '<a class="tag" href="#/reading">仔细阅读</a>' +
      '<a class="tag" href="#/reading/cloze">选词填空</a>' +
      '<a class="tag active" href="#/reading/match">信息匹配</a>' +
      '<a class="tag" href="#/reading/tips">阅读技巧</a></div>' +
      '<select class="select mb20" id="mtSel">' +
      items.map((it, i) => '<option value="' + i + '">' + u.escapeHtml(it.title) + "</option>").join("") + "</select>" +
      '<div id="mtArea"></div>';

    let idx = 0;
    view.querySelector("#mtSel").onchange = function () { idx = parseInt(this.value); show(); };

    function show() {
      const it = items[idx];
      const area = view.querySelector("#mtArea");
      let html = '<div class="card"><h2>' + u.escapeHtml(it.title) + ' <span class="badge gray">' + u.escapeHtml(it.cat) + "</span></h2>";

      html += '<div class="mb20"><div class="small muted mb8">段落</div>';
      it.paras.forEach((p, i) => {
        const letter = String.fromCharCode(65 + i);
        html += '<div class="mb8" style="display:flex;gap:8px"><span class="badge blue" style="min-width:28px;text-align:center">' + letter + "</span>" +
          '<span class="small" style="line-height:1.8">' + u.escapeHtml(p) + "</span></div>";
      });
      html += "</div>";

      html += '<div><div class="small muted mb8">陈述句（选择对应段落字母）</div>';
      it.statements.forEach((s, si) => {
        html += '<div class="mb14" style="display:flex;gap:10px;align-items:flex-start">' +
          '<span style="font-weight:600;min-width:24px">' + (si + 1) + ".</span>" +
          '<div style="flex:1"><div class="mb8">' + u.escapeHtml(s.q) + "</div>" +
          '<select class="select mt-sel" data-si="' + si + '" style="width:80px">' +
          '<option value="">选择</option>' +
          it.paras.map((_, pi) => '<option value="' + String.fromCharCode(65 + pi) + '">' + String.fromCharCode(65 + pi) + "</option>").join("") +
          "</select>" +
          '<div class="mt-ex" data-si="' + si + '" style="display:none;margin-top:6px"></div></div></div>';
      });
      html += "</div>";

      html += '<div class="row mt14"><button class="btn sm" id="mtCheck">检查答案</button> ';
      html += '<button class="btn secondary sm" id="mtReveal">显示答案</button></div></div>';

      area.innerHTML = html;

      area.querySelector("#mtCheck").onclick = function () {
        let score = 0;
        it.statements.forEach((s, si) => {
          const sel = area.querySelector('.mt-sel[data-si="' + si + '"]');
          const exDiv = area.querySelector('.mt-ex[data-si="' + si + '"]');
          if (sel.value === s.a) { score++; sel.style.borderColor = "var(--success)"; }
          else if (sel.value) { sel.style.borderColor = "var(--danger)"; }
          exDiv.style.display = "";
          exDiv.innerHTML = '<span class="badge green">' + s.a + "</span> " + u.escapeHtml(s.ex || "");
        });
        u.toast("正确 " + score + " / " + it.statements.length, score === it.statements.length ? "success" : "warning");
      };
      area.querySelector("#mtReveal").onclick = function () {
        it.statements.forEach((s, si) => {
          const sel = area.querySelector('.mt-sel[data-si="' + si + '"]');
          sel.value = s.a;
          sel.style.borderColor = "var(--success)";
          const exDiv = area.querySelector('.mt-ex[data-si="' + si + '"]');
          exDiv.style.display = "";
          exDiv.innerHTML = '<span class="badge green">' + s.a + "</span> " + u.escapeHtml(s.ex || "");
        });
      };
    }

    show();
  }

  /* ==================== 阅读技巧专区 ==================== */
  function renderTips(view) {
    const R = window.CET6_READING || {};
    const tips = R.tips || [];

    view.innerHTML =
      '<div class="page-head"><h1>📖 阅读技巧专区</h1>' +
      '<div class="sub">六级阅读解题策略 · 时间管理 · 高频陷阱规避</div></div>' +

      '<div class="row mb20" style="gap:8px">' +
      '<a class="tag" href="#/reading">仔细阅读</a>' +
      '<a class="tag" href="#/reading/cloze">选词填空</a>' +
      '<a class="tag" href="#/reading/match">信息匹配</a>' +
      '<a class="tag active" href="#/reading/tips">阅读技巧</a></div>' +

      '<div class="grid grid-2">' +
      tips.map(function (t, i) {
        return '<div class="card" style="border-left:4px solid var(--primary)">' +
          '<div class="row" style="gap:10px;align-items:flex-start">' +
          '<span style="font-size:24px">' + ["🎯", "🔑", "📝", "⚠️", "⏱️", "📖"][i % 6] + "</span>" +
          "<div><h3 style=\"margin:0 0 6px\">" + u.escapeHtml(t.t) + "</h3>" +
          '<p class="small" style="margin:0;line-height:1.8;color:#475569">' + u.escapeHtml(t.d) + "</p></div></div></div>";
      }).join("") + "</div>" +

      '<div class="card mt20">' +
      '<h2>📊 阅读题型时间分配建议</h2>' +
      '<div class="grid grid-4 mt14">' +
      '<div style="text-align:center;padding:12px;background:var(--primary-50);border-radius:10px"><div style="font-size:20px;font-weight:800;color:var(--primary)">10min</div><div class="small muted">选词填空</div></div>' +
      '<div style="text-align:center;padding:12px;background:var(--success-50);border-radius:10px"><div style="font-size:20px;font-weight:800;color:var(--success)">15min</div><div class="small muted">信息匹配</div></div>' +
      '<div style="text-align:center;padding:12px;background:var(--warning-50);border-radius:10px"><div style="font-size:20px;font-weight:800;color:var(--warning)">18min</div><div class="small muted">仔细阅读(2篇)</div></div>' +
      '<div style="text-align:center;padding:12px;background:var(--info-50);border-radius:10px"><div style="font-size:20px;font-weight:800;color:var(--info)">6min</div><div class="small muted">涂卡检查</div></div>' +
      "</div></div>" +

      '<div class="card mt20">' +
      '<h2>💡 阅读理解答题步骤</h2>' +
      '<ol class="diff-list" style="padding-left:20px;line-height:2">' +
      "<li><b>审题</b>：快速浏览题干，划出关键词（人名、数字、时间、专有名词）</li>" +
      "<li><b>定位</b>：带着关键词回原文定位，注意段落顺序通常与题目顺序一致</li>" +
      "<li><b>比对</b>：将选项与原文逐句对比，警惕同义改写和偷换概念</li>" +
      "<li><b>排除</b>：排除明显错误的选项，缩小范围后再做判断</li>" +
      "<li><b>确认</b>：选定答案后回原文验证，确保有据可依</li>" +
      "</ol></div>";
  }

  CET6.reading = { render };
})();
