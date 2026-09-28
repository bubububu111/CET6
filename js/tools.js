/* AI 工具模块 —— 查词翻译 / AI 对话助手 */
(function () {
  const CET6 = (window.CET6 = window.CET6 || {});
  const u = CET6.util;
  let chatHistory = [];
  let chatAbort = false;

  function render(view, params) {
    const tab = (params && params[0]) || "chat";
    if (tab === "dict") renderDict(view);
    else if (tab === "translate") renderTranslate(view);
    else renderChat(view);
  }

  function renderChat(view) {
    const configured = CET6.ai.isConfigured();

    view.innerHTML =
      '<div class="page-head">' +
      '<h1>🤖 AI 学习助手</h1>' +
      '<div class="sub">向 AI 提问英语学习问题 —— 词汇辨析、语法讲解、翻译指导等</div></div>' +

      (configured ? "" : '<div class="card mb20" style="background:var(--warning-50);border-color:#fde68a">' +
        '<div class="row" style="gap:8px;align-items:flex-start">' +
        '<span style="font-size:20px">⚠️</span><div><b>AI 尚未配置</b><br><span class="small muted">请在<a href="#/settings">设置页面</a>填入 AI 密钥后使用。不配置也可浏览词汇和做阅读题。</span></div></div></div>') +

      '<div class="row mb14" style="gap:8px">' +
      '<a class="tag' + (configured ? " active" : "") + '" href="#/tools/chat">💬 AI 对话</a>' +
      '<a class="tag" href="#/tools/dict">📖 查词典</a>' +
      '<a class="tag" href="#/tools/translate">🌐 中英互译</a>' +
      "</div>" +

      '<div class="chat-box">' +
      '<div class="chat-msgs" id="chatMsgs"></div>' +
      '<div class="typing" id="chatTyping" style="display:none">AI 正在输入…</div>' +
      '<div class="chat-input">' +
      '<textarea id="chatInput" placeholder="输入你的问题，如：besides 和 except 有什么区别？" disabled></textarea>' +
      '<button class="btn" id="chatSend" disabled>发送</button>' +
      "</div></div>" +

      '<div class="row mt14" style="gap:8px;flex-wrap:wrap">' +
      '<span class="muted">快捷提问：</span>' +
      quickBtn("compare|besides 和 except 有什么区别？") +
      quickBtn("grammar|虚拟语气的常见用法和例句") +
      quickBtn('translate|把"随着科技的发展"翻译成英文，给出3种表达') +
      quickBtn("writing|六级写作开头段常用句型") +
      "</div>";

    const input = view.querySelector("#chatInput");
    const sendBtn = view.querySelector("#chatSend");
    const msgsEl = view.querySelector("#chatMsgs");
    const typingEl = view.querySelector("#chatTyping");

    if (configured) {
      input.disabled = false;
      sendBtn.disabled = false;
    }

    function appendMsg(role, text) {
      const div = document.createElement("div");
      div.className = "msg " + (role === "assistant" ? "" : "me");
      div.innerHTML =
        '<div class="avatar">' + (role === "assistant" ? "🤖" : "🙂") + "</div>" +
        '<div class="bubble">' + u.escapeHtml(text) + "</div>";
      msgsEl.appendChild(div);
      msgsEl.scrollTop = msgsEl.scrollHeight;
    }

    function appendStreamingMsg() {
      const div = document.createElement("div");
      div.className = "msg";
      div.innerHTML = '<div class="avatar">🤖</div><div class="bubble" id="streamBubble"></div>';
      msgsEl.appendChild(div);
      msgsEl.scrollTop = msgsEl.scrollHeight;
      return div.querySelector(".bubble");
    }

    function renderHistory() {
      msgsEl.innerHTML = "";
      chatHistory.forEach(m => appendMsg(m.role, m.content));
    }

    renderHistory();

    async function send() {
      const q = input.value.trim();
      if (!q) return;
      if (!CET6.ai.isConfigured()) {
        u.toast("请先在设置中配置 AI 密钥", "error");
        return;
      }

      chatHistory.push({ role: "user", content: q });
      appendMsg("user", q);
      input.value = "";
      sendBtn.disabled = true;
      typingEl.style.display = "block";

      try {
        const bubble = appendStreamingMsg();
        typingEl.style.display = "none";
        chatAbort = false;
        await CET6.ai.ask(q, chatHistory, function (chunk, full) {
          bubble.textContent = full;
          msgsEl.scrollTop = msgsEl.scrollHeight;
        });
        chatHistory.push({ role: "assistant", content: bubble.textContent });
      } catch (e) {
        typingEl.style.display = "none";
        if (bubble) bubble.textContent = "❌ " + e.message;
        else u.toast(e.message, "error");
      } finally {
        sendBtn.disabled = false;
        input.focus();
      }
    }

    sendBtn.onclick = send;
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
    });

    view.querySelectorAll(".quick-btn").forEach(btn => {
      btn.onclick = function () { input.value = this.dataset.q; input.focus(); };
    });
  }

  function quickBtn(text) {
    const q = text.split("|")[1];
    return '<button class="btn secondary sm quick-btn" data-q="' + u.escapeHtml(q) + '">' + u.escapeHtml(text.split("|")[0]) + "</button>";
  }

  function renderDict(view) {
    view.innerHTML =
      '<div class="page-head">' +
      '<h1>📖 词典查询</h1>' +
      '<div class="sub">在词库中搜索单词释义</div></div>' +

      '<div class="row mb14" style="gap:8px">' +
      '<a class="tag" href="#/tools/chat">💬 AI 对话</a>' +
      '<a class="tag active" href="#/tools/dict">📖 查词典</a>' +
      '<a class="tag" href="#/tools/translate">🌐 中英互译</a>' +
      "</div>" +

      '<div class="card">' +
      '<div class="inline-form">' +
      '<div class="field"><input class="input" id="dictSearch" placeholder="输入英文单词…" style="flex:1"></div>' +
      '<button class="btn" id="dictBtn">查询</button>' +
      '<button class="btn secondary" id="dictSpeak">🔊 朗读</button>' +
      "</div>" +
      '<div id="dictResult" class="mt20"></div></div>';

    const input = view.querySelector("#dictSearch");
    const result = view.querySelector("#dictResult");

    function lookup() {
      const q = input.value.trim().toLowerCase();
      if (!q) return;
      const words = (window.CET6_VOCAB || { words: [] }).words;
      const custom = CET6.store.getCustomWords();
      const all = words.concat(custom);
      const found = all.filter(w => w.w.toLowerCase() === q || w.w.toLowerCase().includes(q));

      if (!found.length) {
        result.innerHTML = '<div class="empty">词库中未找到"' + u.escapeHtml(q) + '"，试试<a href="#/tools/chat">AI 对话</a>提问</div>';
        return;
      }

      result.innerHTML = found.map(w =>
        '<div class="card" style="margin-top:0">' +
        '<div class="row between"><h2 style="margin:0">' + u.escapeHtml(w.w) + "</h2>" +
        '<span class="badge blue">' + "★".repeat(w.s || 1) + "</span></div>" +
        '<div class="phon mt8">' + u.escapeHtml(w.p || "") + "</div>" +
        '<div class="mt8">' + u.escapeHtml(w.d) + "</div>" +
        (w.e ? '<div class="mt14" style="padding:14px;background:var(--primary-50);border-radius:10px">' +
          '<div class="small muted">例句</div>' + u.escapeHtml(w.e) +
          (w.ec ? '<div class="small muted mt8">' + u.escapeHtml(w.ec) + "</div>" : "") + "</div>" : "") +
        "</div>"
      ).join("");
    }

    view.querySelector("#dictBtn").onclick = lookup;
    view.querySelector("#dictSpeak").onclick = function () {
      if (input.value.trim()) CET6.tts.speak(input.value.trim());
    };
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") lookup();
    });
  }

  function renderTranslate(view) {
    const configured = CET6.ai.isConfigured();

    view.innerHTML =
      '<div class="page-head">' +
      '<h1>🌐 中英互译</h1>' +
      '<div class="sub">输入中文或英文 · AI 自动识别并翻译 · 支持段落翻译</div></div>' +

      (configured ? "" : '<div class="card mb20" style="background:var(--warning-50);border-color:#fde68a">' +
        '<div class="row" style="gap:8px;align-items:flex-start">' +
        '<span style="font-size:20px">⚠️</span><div><b>AI 尚未配置</b><br><span class="small muted">请在<a href="#/settings">设置页面</a>填入 AI 密钥后使用翻译功能。</span></div></div></div>') +

      '<div class="row mb14" style="gap:8px">' +
      '<a class="tag" href="#/tools/chat">💬 AI 对话</a>' +
      '<a class="tag" href="#/tools/dict">📖 查词典</a>' +
      '<a class="tag active" href="#/tools/translate">🌐 中英互译</a>' +
      "</div>" +

      '<div class="grid grid-2 mb20">' +
      '<div class="card">' +
      '<div class="row between mb8"><h2 style="margin:0">输入</h2>' +
      '<select class="select sm" id="trMode" style="max-width:140px">' +
      '<option value="auto">自动检测</option>' +
      '<option value="zh2en">中→英</option>' +
      '<option value="en2zh">英→中</option>' +
      "</select></div>" +
      '<textarea class="textarea" id="trInput" placeholder="输入要翻译的文本（中英文均可）…" style="height:200px;line-height:1.8"></textarea>' +
      '<div class="row between mt8"><span class="muted small" id="trCount">0 字</span>' +
      '<div class="row" style="gap:8px">' +
      '<button class="btn secondary sm" id="trClear">清空</button>' +
      '<button class="btn sm" id="trSwap">⇅ 互换</button>' +
      '<button class="btn" id="trGo" ' + (configured ? "" : "disabled") + '>翻译</button></div></div></div>' +

      '<div class="card">' +
      '<div class="row between mb8"><h2 style="margin:0">译文</h2>' +
      '<button class="btn secondary sm" id="trCopy" disabled>复制</button></div>' +
      '<div id="trOutput" style="min-height:200px;line-height:1.8;font-size:15px;white-space:pre-wrap">' +
      '<div class="empty" style="border:none;text-align:left">翻译结果将显示在此处…</div></div>' +
      '<div id="trAlt" style="margin-top:10px"></div></div></div>' +

      '<div class="card">' +
      '<h2>📋 翻译历史</h2>' +
      '<div id="trHistory"></div></div>';

    const input = view.querySelector("#trInput");
    const output = view.querySelector("#trOutput");
    const altDiv = view.querySelector("#trAlt");
    const btn = view.querySelector("#trGo");
    const histArea = view.querySelector("#trHistory");

    input.addEventListener("input", function () {
      view.querySelector("#trCount").textContent = input.value.length + " 字";
    });

    view.querySelector("#trClear").onclick = function () {
      input.value = "";
      output.innerHTML = '<div class="empty" style="border:none;text-align:left">翻译结果将显示在此处…</div>';
      altDiv.innerHTML = "";
      view.querySelector("#trCount").textContent = "0 字";
      view.querySelector("#trCopy").disabled = true;
    };

    view.querySelector("#trSwap").onclick = function () {
      const tmp = input.value;
      input.value = output.textContent;
      output.innerHTML = tmp;
    };

    view.querySelector("#trCopy").onclick = function () {
      navigator.clipboard.writeText(output.textContent).then(function () {
        u.toast("已复制译文", "success");
      });
    };

    function renderHistory() {
      const hist = CET6.store.getTransHistory ? CET6.store.getTransHistory() : [];
      if (!hist.length) {
        histArea.innerHTML = '<div class="empty">暂无翻译记录</div>';
        return;
      }
      histArea.innerHTML = hist.slice(0, 5).map(function (h) {
        return '<div class="row between mb8 small" style="cursor:pointer;padding:6px;border-radius:6px" data-src="' + u.escapeHtml(h.userTrans || "") + '">' +
          '<span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + u.escapeHtml((h.userTrans || h.title || "").slice(0, 60)) + "</span>" +
          '<span class="badge ' + (h.score >= 11 ? "green" : h.score >= 7 ? "orange" : "red") + '">' + (h.score || "—") + "</span></div>";
      }).join("");
    }
    renderHistory();

    btn.onclick = async function () {
      const text = input.value.trim();
      if (!text) { u.toast("请输入要翻译的文本", "error"); return; }
      if (!configured) { u.toast("请先配置 AI", "error"); return; }

      btn.disabled = true;
      btn.textContent = "翻译中…";
      output.innerHTML = '<span class="muted">⏳ 正在翻译…</span>';
      altDiv.innerHTML = "";

      try {
        let full = "";
        output.innerHTML = '<div id="streamTr" style="min-height:200px"></div>';
        const streamEl = output.querySelector("#streamTr");

        await CET6.ai.translate(text, view.querySelector("#trMode").value, function (chunk, total) {
          full = total;
          streamEl.innerHTML = renderMd(full);
        });

        view.querySelector("#trCopy").disabled = false;
        u.toast("翻译完成", "success");
      } catch (e) {
        output.innerHTML = '<div style="color:var(--danger)">❌ ' + u.escapeHtml(e.message) + "</div>";
      } finally {
        btn.disabled = false;
        btn.textContent = "翻译";
      }
    };
  }

  function renderMd(text) {
    return u.escapeHtml(text)
      .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
      .replace(/\n/g, "<br>");
  }

  CET6.tools = { render };
})();
