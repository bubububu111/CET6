/* 翻译练习模块 —— 段落翻译 / AI 评分 / 历史记录 */
(function () {
  const CET6 = (window.CET6 = window.CET6 || {});
  const u = CET6.util;

  function render(view, params) {
    const passages = window.CET6_PASSAGES || [];
    const history = CET6.store.getTransHistory();

    let pIdx = 0;
    if (params && params[0] && /^\d+$/.test(params[0])) pIdx = parseInt(params[0]);

    var tab = "practice";
    if (params && params[0] === "review") tab = "review";

    view.innerHTML =
      '<div class="page-head">' +
      '<h1>🌐 翻译练习</h1>' +
      '<div class="sub">六级段落翻译 · 真题风格素材 · AI 自动评分</div></div>' +

      '<div class="row mb20" style="gap:8px">' +
      '<a class="tag' + (tab === "practice" ? " active" : "") + '" href="#/translate">📝 翻译练习</a>' +
      '<a class="tag' + (tab === "review" ? " active" : "") + '" href="#/translate/review">📊 错题复盘</a>' +
      "</div>";

    if (tab === "review") {
      renderReview(view, history);
      return;
    }

    view.innerHTML +=
      '<div class="grid grid-2 mb20">' +
      '<div class="card">' +
      '<h2>📋 选择题目</h2>' +
      '<select class="select" id="transSel">' +
      passages.map((p, i) => '<option value="' + i + '"' + (i === pIdx ? " selected" : "") + ">" +
        u.escapeHtml(p.title) + " (" + u.escapeHtml(p.cat) + " " + (p.year || "") + ")</option>").join("") +
      "</select></div>" +

      '<div class="card">' +
      '<h2>📜 最近练习</h2>' +
      (history.length ? '<div id="thList">' + history.slice(0, 8).map(function (h, i) {
        var dt = new Date(h.date);
        var dateStr = (dt.getMonth() + 1) + "/" + dt.getDate();
        return '<div class="row between mb8" style="cursor:pointer;padding:8px;border-radius:6px;border:1px solid #e2e8f0" data-th="' + i + '">' +
          '<div style="flex:1;overflow:hidden"><div class="small" style="font-weight:600">' + u.escapeHtml(h.title) + "</div>" +
          '<div class="muted" style="font-size:11px">' + dateStr + " · " + (h.userTrans || "").length + " 字</div></div>" +
          '<span class="badge ' + (h.score >= 11 ? "green" : h.score >= 7 ? "orange" : "red") + '">' + (h.score || "—") + "分</span></div>";
      }).join("") + "</div>" :
      '<div class="empty">暂无练习记录</div>') + "</div></div>" +

      '<div id="transArea"></div>';

    view.querySelector("#transSel").onchange = function () {
      pIdx = parseInt(this.value);
      showPassage(view, passages[pIdx]);
    };

    view.querySelectorAll("[data-th]").forEach(function (el) {
      el.onclick = function () {
        var hi = parseInt(this.dataset.th);
        showTransDetail(view, history[hi], passages);
      };
    });

    showPassage(view, passages[pIdx]);
  }

  function renderReview(view, history) {
    if (!history.length) {
      view.innerHTML += '<div class="card"><div class="empty">还没有翻译练习记录，去<a href="#/translate">做一篇翻译</a>吧！</div></div>';
      return;
    }

    var stats = {
      total: history.length,
      avg: Math.round(history.reduce(function (s, h) { return s + (h.score || 0); }, 0) / history.length),
      best: Math.max.apply(null, history.map(function (h) { return h.score || 0; })),
      worst: Math.min.apply(null, history.map(function (h) { return h.score || 0; }))
    };

    view.innerHTML +=
      '<div class="grid grid-4 mb20">' +
      '<div class="card" style="text-align:center"><div class="stat-num" style="color:var(--primary)">' + stats.total + "</div><div class=\"stat-label\">练习次数</div></div>" +
      '<div class="card" style="text-align:center"><div class="stat-num" style="color:var(--success)">' + stats.avg + "</div><div class=\"stat-label\">平均分</div></div>" +
      '<div class="card" style="text-align:center"><div class="stat-num" style="color:var(--warning)">' + stats.best + "</div><div class=\"stat-label\">最高分</div></div>" +
      '<div class="card" style="text-align:center"><div class="stat-num" style="color:var(--danger)">' + stats.worst + "</div><div class=\"stat-label\">最低分</div></div>" +
      "</div>" +

      '<div class="card">' +
      '<h2>📊 错题与复盘</h2>' +
      '<div class="small muted mb14">点击任意记录查看原文、你的翻译、参考译文和 AI 反馈</div>' +
      '<div id="reviewList">' + history.map(function (h, i) {
        var dt = new Date(h.date);
        var dateStr = dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();
        return '<div class="card mb14" style="border:1px solid #e2e8f0" data-ri="' + i + '" style="cursor:pointer">' +
          '<div class="row between">' +
          '<div style="flex:1"><div style="font-weight:600">' + u.escapeHtml(h.title) + "</div>" +
          '<div class="muted small mt4">' + dateStr + "</div></div>" +
          '<span class="badge ' + (h.score >= 11 ? "green" : h.score >= 7 ? "orange" : "red") + '">' + (h.score || "—") + "分</span>" +
          "</div>" +
          '<div class="small mt8" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#64748b">' + u.escapeHtml((h.userTrans || "").slice(0, 80)) + "...</div>" +
          "</div>";
      }).join("") + "</div>" +
      '<button class="btn danger sm mt8" id="clearTransHist">清空全部记录</button>' +
      "</div>";

    view.querySelectorAll("[data-ri]").forEach(function (el) {
      el.onclick = function () {
        var ri = parseInt(this.dataset.ri);
        showTransDetail(view, history[ri], window.CET6_PASSAGES || []);
      };
    });

    view.querySelector("#clearTransHist").onclick = function () {
      if (u.confirm("确定清空全部翻译练习记录吗？此操作不可撤销。")) {
        localStorage.removeItem("cet6prep_transHistory");
        u.toast("记录已清空", "success");
        render(view, ["review"]);
      }
    };
  }

  function showTransDetail(view, rec, passages) {
    view.innerHTML =
      '<div class="page-head"><h1>📊 翻译复盘</h1></div>' +
      '<div class="row mb20" style="gap:8px">' +
      '<a class="tag" href="#/translate">← 返回练习</a>' +
      '<a class="tag active" href="#/translate/review">错题复盘</a>' +
      "</div>" +
      '<div class="card">' +
      '<div class="row between mb14"><h2>' + u.escapeHtml(rec.title) + '</h2>' +
      '<span class="badge ' + (rec.score >= 11 ? "green" : rec.score >= 7 ? "orange" : "red") + '">' + (rec.score || "—") + " 分</span></div>" +

      '<div class="mb14"><div class="small muted mb8">中文原文</div>' +
      '<div style="padding:14px;background:var(--primary-50);border-radius:10px;line-height:1.9;font-size:15px">' + u.escapeHtml(rec.source || "") + "</div></div>" +

      '<div class="mb14"><div class="small muted mb8">我的翻译</div>' +
      '<div style="padding:14px;background:#f8fafc;border-radius:10px;line-height:1.9">' + u.escapeHtml(rec.userTrans || "") + "</div></div>" +

      '<div class="mb14"><div class="small muted mb8">参考译文</div>' +
      '<div style="padding:14px;background:var(--success-50);border-radius:10px;line-height:1.9">' + u.escapeHtml(rec.reference || "") + "</div></div>" +

      '<div><div class="small muted mb8">AI 错误分析与反馈</div>' +
      '<div style="padding:14px;background:var(--warning-50);border-radius:10px;line-height:1.9">' + renderMd(rec.feedback || "") + "</div></div>" +

      '<div class="row mt14" style="gap:8px">' +
      '<button class="btn sm" id="retryTrans">重做此题</button>' +
      '<button class="btn secondary sm" id="backReview">返回复盘列表</button></div>' +
      "</div>";

    view.querySelector("#backReview").onclick = function () { render(view, ["review"]); };
    view.querySelector("#retryTrans").onclick = function () {
      var match = passages.find(function (p) { return p.title === rec.title; });
      if (match) {
        var idx = passages.indexOf(match);
        location.hash = "#/translate/" + idx;
      } else {
        u.toast("未找到对应题目", "error");
      }
    };
  }

  function showPassage(view, p) {
    const area = view.querySelector("#transArea");
    const configured = CET6.ai.isConfigured();

    area.innerHTML =
      '<div class="card">' +
      '<h2>' + u.escapeHtml(p.title) + ' <span class="badge gray">' + u.escapeHtml(p.cat) + " " + u.escapeHtml(p.year || "") + "</span></h2>" +
      '<div style="padding:16px;background:var(--primary-50);border-radius:10px;margin-bottom:14px">' +
      '<div class="small muted mb8">中文原文（请翻译为英文）</div>' +
      '<div style="font-size:15px;line-height:1.9">' + u.escapeHtml(p.source) + "</div></div>" +

      (p.points ? '<div class="mb14"><div class="small muted">关键表达提示</div><div class="row" style="gap:6px;flex-wrap:wrap">' +
        p.points.map(pt => '<span class="tag">' + u.escapeHtml(pt) + "</span>").join("") + "</div></div>" : "") +

      '<textarea class="textarea" id="transInput" placeholder="在此输入你的英文翻译…" style="height:220px;line-height:1.8"></textarea>' +

      '<div class="row between mt14">' +
      '<div class="row" style="gap:8px">' +
      '<button class="btn secondary sm" id="showRef">📖 查看参考译文</button>' +
      '<button class="btn secondary sm" id="copySrc">复制原文</button></div>' +
      '<button class="btn" id="submitTrans" ' + (configured ? "" : "disabled") + ">提交 AI 评分</button></div>" +

      '<div id="refArea" style="display:none;margin-top:14px">' +
      '<div class="grid grid-2">' +
      '<div style="padding:14px;background:#f8fafc;border-radius:10px">' +
      '<div class="small muted mb8" style="font-weight:600">✏️ 我的翻译</div>' +
      '<div id="myTransDisplay" style="line-height:1.9;white-space:pre-wrap;font-size:14px;color:var(--text-2)">写完后点击查看对照</div></div>' +
      '<div style="padding:14px;background:var(--success-50);border-radius:10px">' +
      '<div class="small muted mb8" style="font-weight:600">✅ 参考译文</div>' +
      '<div style="line-height:1.9;font-size:14px">' + u.escapeHtml(p.reference) + "</div></div></div>" +
      (p.points ? '<div class="mt14"><div class="small muted" style="font-weight:600">🔑 关键表达对照</div>' +
        '<div class="row" style="gap:6px;flex-wrap:wrap;margin-top:8px">' +
        p.points.map(pt => '<span class="tag">' + u.escapeHtml(pt) + "</span>").join("") + "</div></div>" : "") +
      "</div>" +

      '<div id="scoreResult" class="mt20"></div></div>';

    area.querySelector("#showRef").onclick = function () {
      const el = area.querySelector("#refArea");
      const showing = el.style.display !== "none";
      el.style.display = showing ? "none" : "";
      this.textContent = showing ? "📖 查看参考译文" : "📖 隐藏参考译文";
      // 同步显示用户翻译
      const userTrans = area.querySelector("#transInput").value.trim();
      const myDisplay = area.querySelector("#myTransDisplay");
      if (userTrans) {
        myDisplay.textContent = userTrans;
        myDisplay.style.color = "var(--text)";
      } else {
        myDisplay.textContent = "写完后点击查看对照";
        myDisplay.style.color = "var(--text-3)";
      }
    };
    area.querySelector("#copySrc").onclick = function () {
      navigator.clipboard.writeText(p.source).then(() => u.toast("已复制原文", "success"));
    };

    area.querySelector("#submitTrans").onclick = async function () {
      const userTrans = area.querySelector("#transInput").value.trim();
      if (!userTrans) { u.toast("请先输入翻译", "error"); return; }
      if (userTrans.length < 30) { u.toast("翻译太短", "warning"); return; }

      const btn = this;
      btn.disabled = true;
      btn.textContent = "评分中…";
      const result = area.querySelector("#scoreResult");
      result.innerHTML = '<div class="muted" style="text-align:center;padding:20px">⏳ AI 正在评估你的翻译…</div>';

      try {
        let full = "";
        result.innerHTML = '<div class="card" style="margin-top:0"><div id="streamText" class="small"></div></div>';
        const streamEl = result.querySelector("#streamText");

        await CET6.ai.scoreTranslation(p.source, userTrans, p.reference, function (chunk, total) {
          full = total;
          streamEl.innerHTML = renderMd(full);
        });

        const scoreMatch = full.match(/(\d+)\s*[分点]/);
        const score = scoreMatch ? parseInt(scoreMatch[1]) : 0;

        CET6.store.addTransHistory({
          title: p.title,
          source: p.source,
          userTrans: userTrans,
          reference: p.reference,
          feedback: full,
          score: score,
          date: Date.now()
        });

        btn.disabled = false;
        btn.textContent = "提交 AI 评分";
        u.toast("评分完成", "success");
      } catch (e) {
        btn.disabled = false;
        btn.textContent = "提交 AI 评分";
        const fallback = CET6.ai.localFallback("translation", userTrans, p.source);
        result.innerHTML = '<div class="card" style="border-color:var(--warning)"><div>' + renderMd(fallback) + "</div>" +
          '<div class="small muted mt8">' + u.escapeHtml(e.message) + "</div></div>";
      }
    };
  }

  function renderMd(text) {
    return u.escapeHtml(text)
      .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
      .replace(/\n/g, "<br>");
  }

  CET6.translate = { render };
})();
