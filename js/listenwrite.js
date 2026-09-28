/* 听力 + 写作模块 —— MP3音频播放 + TTS朗读 / 写作批改 */
(function () {
  const CET6 = (window.CET6 = window.CET6 || {});
  const u = CET6.util;

  // 音频文件路径映射（根据题目ID推断音频文件路径）
  function getAudioPath(id, type) {
    if (!id) return null;
    var folder = "";
    if (type === "shortConvs" || id.indexOf("sc") === 0) folder = "short";
    else if (type === "longConvs" || id.indexOf("lc") === 0) folder = "long";
    else if (type === "passages" || id.indexOf("lp") === 0) folder = "passage";
    else if (type === "dictations" || id.indexOf("dt") === 0) folder = "dictation";
    else return null;
    return "audio/" + folder + "/" + id + ".mp3";
  }

  // 创建音频播放器
  function createAudioPlayer(id, type) {
    var audio = document.createElement("audio");
    audio.preload = "none";
    audio.controls = true;
    audio.style.width = "100%";
    audio.style.marginBottom = "12px";
    var path = getAudioPath(id, type);
    if (path) audio.src = path;
    return audio;
  }

  function render(view, params) {
    const tab = (params && params[0]) || "listen";
    if (tab === "writing") renderWriting(view);
    else renderListening(view);
  }

  /* ==================== 听力 ==================== */
  function renderListening(view) {
    const L = window.CET6_LISTENING || {};
    view.innerHTML =
      '<div class="page-head">' +
      '<h1>🎧 听力练习</h1>' +
      '<div class="sub">MP3 音频播放 + 浏览器语音合成 · 双模式练习</div></div>' +

      '<div class="row mb14" style="gap:8px">' +
      '<a class="tag active" href="#/listening">🎧 听力</a>' +
      '<a class="tag" href="#/listening/writing">✍️ 写作</a>' +
      "</div>" +

      '<div class="row mb20" style="gap:8px;flex-wrap:wrap">' +
      '<a class="tag" href="#/listening?type=shortConvs" data-act="shortConvs">短对话 (' + (L.shortConvs || []).length + ")</a>" +
      '<a class="tag" href="#/listening?type=longConvs" data-act="longConvs">长对话 (' + (L.longConvs || []).length + ")</a>" +
      '<a class="tag" href="#/listening?type=passages" data-act="passages">短文 (' + (L.passages || []).length + ")</a>" +
      '<a class="tag" href="#/listening?type=dictations" data-act="dictations">听写 (' + (L.dictations || []).length + ")</a>" +
      "</div>" +
      '<div id="listenArea"></div>';

    const hash = location.hash;
    const m = hash.match(/type=(\w+)/);
    const type = m ? m[1] : "shortConvs";
    const items = L[type] || [];
    const typeLabel = { shortConvs: "短对话", longConvs: "长对话", passages: "短文理解", dictations: "听写" }[type];

    view.querySelectorAll(".row.mb20 .tag").forEach(t => {
      if (t.dataset.act === type) t.classList.add("active");
    });

    if (type === "dictations") {
      renderDictations(view.querySelector("#listenArea"), items);
    } else {
      renderConvOrPassage(view.querySelector("#listenArea"), items, typeLabel);
    }
  }

  function renderConvOrPassage(container, items, label) {
    if (!items.length) { container.innerHTML = '<div class="empty">暂无素材</div>'; return; }

    container.innerHTML =
      '<div class="row between mb20">' +
      '<div class="row" style="gap:8px">' +
      '<select class="select" id="listenSel">' +
      items.map((it, i) => '<option value="' + i + '">' + u.escapeHtml(it.title) + "</option>").join("") +
      "</select>" +
      '<div class="row" style="gap:6px;align-items:center">' +
      '<span class="rate-chip">语速</span>' +
      '<select class="select sm" id="listenRate" style="width:80px">' +
      '<option value="0.6">0.6x</option>' +
      '<option value="0.8">0.8x</option>' +
      '<option value="1.0" selected>1.0x</option>' +
      '<option value="1.2">1.2x</option>' +
      "</select></div></div>" +
      '<div class="row" style="gap:8px">' +
      '<button class="btn sm" id="lPlay">▶ TTS朗读全文</button>' +
      '<button class="btn secondary sm" id="lStop">⏹ 停止</button>' +
      '<button class="btn secondary sm" id="lScript">📝 显示原文</button>' +
      "</div></div>" +
      '<div id="listenContent"></div>';

    let idx = 0;
    let showScript = false;
    const sel = container.querySelector("#listenSel");
    const rateSel = container.querySelector("#listenRate");

    function showItem() {
      idx = parseInt(sel.value);
      const it = items[idx];
      const content = container.querySelector("#listenContent");

      // MP3 音频播放器
      let html = '<div class="card" id="audioCard"><div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">' +
        '<span style="font-weight:600">🎵 音频播放</span>' +
        '<span class="badge blue" id="audioStatus">加载中...</span>' +
        '</div>' +
        '<div id="audioWrap"></div>' +
        '<p class="small muted" style="margin:8px 0 0 0">如音频无法加载，可使用下方「TTS朗读」功能</p>' +
        "</div>";

      html += '<div class="card" id="scriptCard" style="' + (showScript ? "" : "display:none") + '">';
      if (it.lines) {
        html += it.lines.map(l => {
          const role = l.s === "M" ? "👨 男" : "👩 女";
          return '<div class="row" style="gap:10px;margin-bottom:8px">' +
            '<span class="badge gray" style="min-width:50px;text-align:center">' + role + "</span>" +
            '<span>' + u.escapeHtml(l.t) + "</span></div>";
        }).join("");
      } else if (it.text) {
        html += "<p>" + u.escapeHtml(it.text) + "</p>";
      }
      html += "</div>";

      html += '<div class="card"><h2>题目</h2>';
      html += it.questions.map((q, qi) => {
        const opts = q.opts || [];
        return '<div class="card" style="margin-top:0;padding:14px;border-left:3px solid var(--primary)">' +
          '<div style="font-weight:600;margin-bottom:8px">' + (qi + 1) + ". " + u.escapeHtml(q.q) + "</div>" +
          '<div class="row" style="gap:6px;flex-direction:column;align-items:flex-start">' +
          opts.map((o, oi) =>
            '<label class="row" style="gap:6px;cursor:pointer">' +
            '<input type="radio" name="q' + qi + '" value="' + oi + '" style="cursor:pointer">' +
            '<span>' + String.fromCharCode(65 + oi) + ". " + u.escapeHtml(o) + "</span></label>"
          ).join("") + "</div>" +
          '<div class="ex" data-q="' + qi + '" style="display:none;margin-top:8px"></div></div>';
      }).join("");
      html += "</div>";

      html += '<div class="row mt14"><button class="btn secondary sm" id="lCheck">提交答案</button></div>';

      content.innerHTML = html;

      // 加载 MP3 音频
      var audioWrap = content.querySelector("#audioWrap");
      var audioStatus = content.querySelector("#audioStatus");
      var audioEl = createAudioPlayer(it.id, type);
      audioWrap.appendChild(audioEl);

      audioEl.addEventListener("canplaythrough", function () {
        audioStatus.textContent = "✅ 已就绪";
        audioStatus.className = "badge green";
      });
      audioEl.addEventListener("error", function () {
        audioStatus.textContent = "⚠️ 音频未找到";
        audioStatus.className = "badge orange";
      });
      audioEl.addEventListener("loadstart", function () {
        audioStatus.textContent = "加载中...";
        audioStatus.className = "badge blue";
      });

      content.querySelector("#lCheck").onclick = function () {
        let score = 0;
        it.questions.forEach((q, qi) => {
          const checked = content.querySelector('input[name="q' + qi + '"]:checked');
          const exDiv = content.querySelector('.ex[data-q="' + qi + '"]');
          if (checked) {
            const val = parseInt(checked.value);
            if (val === q.a) {
              score++;
              checked.parentElement.style.color = "var(--success)";
            } else {
              checked.parentElement.style.color = "var(--danger)";
            }
          }
          const correctOpt = String.fromCharCode(65 + q.a);
          exDiv.style.display = "block";
          exDiv.innerHTML = '<span class="badge green">正确答案: ' + correctOpt + "</span> " + (q.ex ? u.escapeHtml(q.ex) : "");
        });
        u.toast("得分: " + score + " / " + it.questions.length, score === it.questions.length ? "success" : "warning");
      };
    }

    sel.onchange = showItem;
    container.querySelector("#lPlay").onclick = function () {
      const it = items[idx];
      const rate = parseFloat(rateSel.value);
      if (it.lines) {
        CET6.tts.speakSequence(it.lines.map(l => l.t), { rate: rate });
      } else if (it.text) {
        CET6.tts.speak(it.text, { rate: rate });
      }
    };
    container.querySelector("#lStop").onclick = function () { CET6.tts.stop(); };
    container.querySelector("#lScript").onclick = function () {
      showScript = !showScript;
      const card = container.querySelector("#scriptCard");
      if (card) card.style.display = showScript ? "" : "none";
      this.textContent = showScript ? "📝 隐藏原文" : "📝 显示原文";
    };

    showItem();
  }

  function renderDictations(container, items) {
    if (!items.length) { container.innerHTML = '<div class="empty">暂无听写素材</div>'; return; }

    container.innerHTML =
      '<div class="row between mb20">' +
      '<select class="select" id="dictSel" style="max-width:300px">' +
      items.map((it, i) => '<option value="' + i + '">' + u.escapeHtml(it.title) + "</option>").join("") +
      "</select>" +
      '<div class="row" style="gap:8px">' +
      '<select class="select sm" id="dictRate" style="width:80px">' +
      '<option value="0.6">0.6x</option><option value="0.8">0.8x</option>' +
      '<option value="1.0" selected>1.0x</option><option value="1.2">1.2x</option></select>' +
      '<button class="btn sm" id="dPlay">▶ 朗读</button>' +
      '<button class="btn secondary sm" id="dReveal">显示答案</button></div></div>' +
      '<div id="dictContent"></div>';

    const sel = container.querySelector("#dictSel");
    const rateSel = container.querySelector("#dictRate");
    let idx = 0;

    function show() {
      idx = parseInt(sel.value);
      const it = items[idx];
      const blanks = (it.text.match(/\{\{[^}]+\}\}/g) || []).map(s => s.slice(2, -2));
      const content = container.querySelector("#dictContent");

      let html = '<div class="card"><div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">' +
        '<span style="font-weight:600">🎵 音频播放</span>' +
        '<span class="badge blue" id="dictAudioStatus">加载中...</span>' +
        '</div>' +
        '<div id="dictAudioWrap"></div>' +
        '<p class="small muted" style="margin:8px 0 0 0">如音频无法加载，可使用下方「TTS朗读」功能</p>' +
        "</div>";

      html += '<div class="card"><h2>听写填空</h2>';
      html += '<p class="muted small mb14">听音频，在空格处填入缺失的单词</p>';
      html += '<div style="line-height:2.2;font-size:16px">';
      let textPart = it.text;
      blanks.forEach((ans, bi) => {
        textPart = textPart.replace("{{" + ans + "}}",
          '<input class="blank-input" data-ans="' + u.escapeHtml(ans.toLowerCase()) + '" data-idx="' + bi + '" placeholder="___">');
      });
      html += textPart;
      html += "</div>";

      html += '<div id="dictZh" style="display:none;margin-top:14px;padding:14px;background:var(--success-50);border-radius:10px">' +
        '<div class="small muted">参考译文</div>' + u.escapeHtml(it.zh || "") + "</div>";

      html += '<div class="row mt14" style="gap:8px"><button class="btn sm" id="dCheck">检查答案</button></div></div>';

      content.innerHTML = html;

      // 加载听写 MP3 音频
      var dictAudioWrap = content.querySelector("#dictAudioWrap");
      var dictAudioStatus = content.querySelector("#dictAudioStatus");
      var dictAudioEl = createAudioPlayer(it.id, "dictations");
      dictAudioWrap.appendChild(dictAudioEl);

      dictAudioEl.addEventListener("canplaythrough", function () {
        dictAudioStatus.textContent = "✅ 已就绪";
        dictAudioStatus.className = "badge green";
      });
      dictAudioEl.addEventListener("error", function () {
        dictAudioStatus.textContent = "⚠️ 音频未找到";
        dictAudioStatus.className = "badge orange";
      });

      content.querySelector("#dPlay").onclick = function () {
        const rate = parseFloat(rateSel.value);
        const fullText = it.text.replace(/\{\{[^}]+\}\}/g, function (m) {
          return m.slice(2, -2);
        });
        CET6.tts.speak(fullText, { rate: rate });
      };
      content.querySelector("#dReveal").onclick = function () {
        content.querySelectorAll(".blank-input").forEach(inp => {
          inp.value = inp.dataset.ans;
          inp.style.color = "var(--success)";
          inp.style.borderColor = "var(--success)";
        });
        content.querySelector("#dictZh").style.display = "";
      };
      content.querySelector("#dCheck").onclick = function () {
        let correct = 0;
        content.querySelectorAll(".blank-input").forEach(inp => {
          const userVal = (inp.value || "").trim().toLowerCase();
          const ans = inp.dataset.ans.toLowerCase();
          if (userVal === ans) { correct++; inp.style.color = "var(--success)"; inp.style.borderColor = "var(--success)"; }
          else { inp.style.color = "var(--danger)"; inp.style.borderColor = "var(--danger)"; }
        });
        content.querySelector("#dictZh").style.display = "";
        u.toast("正确 " + correct + " / " + blanks.length, correct === blanks.length ? "success" : "warning");
      };
    }

    sel.onchange = show;
    show();
  }

  /* ==================== 写作 ==================== */
  function renderWriting(view) {
    const topics = window.CET6_WRITING || [];
    const history = CET6.store.getWritingHistory();

    view.innerHTML =
      '<div class="page-head">' +
      '<h1>✍️ 写作练习</h1>' +
      '<div class="sub">选题目 → 写作 → AI 批改评分</div></div>' +

      '<div class="row mb14" style="gap:8px">' +
      '<a class="tag" href="#/listening">🎧 听力</a>' +
      '<a class="tag active" href="#/listening/writing">✍️ 写作</a>' +
      "</div>" +

      '<div class="grid grid-2 mb20">' +
      '<div class="card">' +
      '<h2>📝 选择题目</h2>' +
      '<div id="topicList">' + topics.map((t, i) =>
        '<div class="row between mb8" style="cursor:pointer;padding:8px;border-radius:8px" data-idx="' + i + '">' +
        '<span class="small"><span class="badge blue">' + u.escapeHtml(t.type) + "</span> " + u.escapeHtml(t.title) + "</span>" +
        '<button class="btn ghost sm">选择</button></div>'
      ).join("") + "</div></div>" +

      '<div class="card">' +
      '<h2>📜 写作历史</h2>' +
      (history.length ? '<div id="whList">' + history.slice(0, 10).map(function (h, i) {
        var dt = new Date(h.date);
        var dateStr = dt.getMonth() + 1 + "/" + dt.getDate();
        return '<div class="row between mb8" style="cursor:pointer;padding:8px;border-radius:8px;border:1px solid #e2e8f0" data-wh="' + i + '">' +
          '<div style="flex:1;overflow:hidden">' +
          '<div class="small" style="font-weight:600">' + u.escapeHtml(h.topicTitle) + "</div>" +
          '<div class="muted" style="font-size:11px">' + dateStr + " · " + (h.essay || "").split(/\s+/).length + " 词</div></div>" +
          '<span class="badge ' + (h.score >= 11 ? "green" : h.score >= 7 ? "orange" : "red") + '">' + (h.score || "—") + "分</span></div>";
      }).join("") + "</div>" +
      (history.length > 5 ? '<button class="btn secondary sm mt8" id="whClearAll">清空历史</button>' : "") :
      '<div class="empty">暂无写作记录</div>') + "</div></div>" +

      '<div id="writeArea"></div>';

    view.querySelectorAll("#topicList [data-idx]").forEach(el => {
      el.onclick = function () {
        const idx = parseInt(this.dataset.idx);
        showTopic(view, topics[idx]);
      };
    });

    view.querySelectorAll("[data-wh]").forEach(function (el) {
      el.onclick = function () {
        var hi = parseInt(this.dataset.wh);
        showWritingHistory(view, history[hi]);
      };
    });

    var clearAllBtn = view.querySelector("#whClearAll");
    if (clearAllBtn) {
      clearAllBtn.onclick = function () {
        if (u.confirm("确定清空全部写作历史吗？")) {
          localStorage.removeItem("cet6prep_writingHistory");
          u.toast("写作历史已清空", "success");
          renderWriting(view);
        }
      };
    }
  }

  function showWritingHistory(view, rec) {
    var area = view.querySelector("#writeArea");
    area.innerHTML =
      '<div class="card">' +
      '<div class="row between mb14"><h2>📜 写作复盘</h2>' +
      '<button class="btn secondary sm" id="whBack">← 返回</button></div>' +
      '<div style="padding:14px;background:var(--primary-50);border-radius:10px;margin-bottom:14px">' +
      '<div class="small muted">题目</div><div style="font-weight:600">' + u.escapeHtml(rec.topicTitle) + "</div>" +
      '<div class="row mt8" style="gap:10px"><span class="badge ' + (rec.score >= 11 ? "green" : rec.score >= 7 ? "orange" : "red") + '">' + (rec.score || "—") + " 分</span>" +
      '<span class="muted small">' + (rec.essay || "").split(/\s+/).filter(Boolean).length + " 词 · " + new Date(rec.date).toLocaleDateString("zh-CN") + "</span></div></div>" +

      '<div class="mb14"><div class="small muted mb8">我的作文</div>' +
      '<div style="padding:14px;background:#f8fafc;border-radius:10px;line-height:1.8;white-space:pre-wrap">' + u.escapeHtml(rec.essay || "") + "</div></div>" +

      '<div><div class="small muted mb8">AI 批改反馈</div>' +
      '<div style="padding:14px;background:var(--success-50);border-radius:10px;line-height:1.8">' + renderMarkdown(rec.feedback || "") + "</div></div>" +

      '<div class="row mt14"><button class="btn sm" id="whRetry">重新写此题</button></div></div>';

    area.querySelector("#whBack").onclick = function () { renderWriting(view); };
    area.querySelector("#whRetry").onclick = function () {
      var topics = window.CET6_WRITING || [];
      var match = topics.find(function (t) { return t.title === rec.topicTitle; });
      if (match) showTopic(view, match);
      else u.toast("未找到对应题目", "error");
    };
  }

  function showTopic(view, topic) {
    const area = view.querySelector("#writeArea");
    const configured = CET6.ai.isConfigured();

    area.innerHTML =
      '<div class="card">' +
      '<h2>' + u.escapeHtml(topic.title) + "</h2>" +
      '<div class="mb14" style="padding:14px;background:var(--primary-50);border-radius:10px">' +
      '<div class="small muted">写作要求</div>' + u.escapeHtml(topic.prompt) + "</div>" +
      (topic.tips ? '<div class="mb14"><div class="small muted">写作思路</div><ul class="diff-list">' +
        topic.tips.map(t => "<li>" + u.escapeHtml(t) + "</li>").join("") + "</ul></div>" : "") +
      '<textarea class="textarea" id="essayArea" placeholder="在此输入你的英文作文…" style="height:280px;line-height:1.8"></textarea>' +
      '<div class="row between mt14">' +
      '<div class="row" style="gap:8px">' +
      '<button class="btn secondary sm" id="showSample">📝 查看范文</button>' +
      '<span class="muted small" id="wordCount">字数: 0</span></div>' +
      '<button class="btn" id="submitEssay" ' + (configured ? "" : "disabled") + ">提交 AI 批改</button></div>" +

      '<div id="sampleArea" style="display:none;margin-top:14px;padding:16px;background:var(--success-50);border-radius:10px">' +
      '<div class="small muted mb8" style="font-weight:600">📖 参考范文</div>' +
      '<div style="line-height:1.9;white-space:pre-wrap">' + (topic.sample ? u.escapeHtml(topic.sample) : "暂无范文") + "</div></div>" +

      '<div id="correctResult" class="mt20"></div></div>';

    const ta = area.querySelector("#essayArea");
    ta.addEventListener("input", function () {
      const words = ta.value.trim().split(/\s+/).filter(Boolean);
      area.querySelector("#wordCount").textContent = "字数: " + words.length;
    });

    area.querySelector("#showSample").onclick = function () {
      const el = area.querySelector("#sampleArea");
      const showing = el.style.display !== "none";
      el.style.display = showing ? "none" : "";
      this.textContent = showing ? "📝 查看范文" : "📝 隐藏范文";
    };

    area.querySelector("#submitEssay").onclick = async function () {
      const essay = ta.value.trim();
      if (!essay) { u.toast("请先写作文", "error"); return; }
      if (essay.split(/\s+/).length < 50) { u.toast("字数太少，至少写50词", "warning"); return; }

      const btn = this;
      btn.disabled = true;
      btn.textContent = "批改中…";
      const result = area.querySelector("#correctResult");
      result.innerHTML = '<div class="muted" style="text-align:center;padding:20px">⏳ AI 正在批改你的作文…</div>';

      try {
        let full = "";
        const bubble = result;
        bubble.innerHTML = '<div class="card" style="margin-top:0"><div id="streamText" class="small"></div></div>';
        const streamEl = bubble.querySelector("#streamText");

        await CET6.ai.correctWriting(essay, topic.prompt, function (chunk, total) {
          full = total;
          streamEl.innerHTML = renderMarkdown(full);
        });

        const scoreMatch = full.match(/(\d+)\s*[分点]/);
        const score = scoreMatch ? parseInt(scoreMatch[1]) : 0;

        CET6.store.addWritingHistory({
          topicTitle: topic.title,
          essay: essay,
          feedback: full,
          score: score,
          date: Date.now()
        });

        btn.disabled = false;
        btn.textContent = "提交 AI 批改";
        u.toast("批改完成", "success");
      } catch (e) {
        btn.disabled = false;
        btn.textContent = "提交 AI 批改";
        const fallback = CET6.ai.localFallback("writing", essay, topic.prompt);
        result.innerHTML = '<div class="card" style="border-color:var(--warning)"><div>' + renderMarkdown(fallback) + "</div>" +
          '<div class="small muted mt8">' + u.escapeHtml(e.message) + "</div></div>";
      }
    };
  }

  function renderMarkdown(text) {
    return u.escapeHtml(text)
      .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
      .replace(/\n/g, "<br>");
  }

  CET6.listenwrite = { render };
})();
