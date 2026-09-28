/* AI 集成模块 —— 支持 OpenAI 兼容接口（智谱 / DeepSeek / OpenAI / 自定义） */
(function () {
  const CET6 = (window.CET6 = window.CET6 || {});

  const ai = {
    isConfigured() {
      const s = CET6.store.getSettings();
      return !!s.aiKey && !!s.aiBaseUrl;
    },

    _buildHeaders(s) {
      const h = { "Content-Type": "application/json" };
      if (/zhipu|bigmodel/i.test(s.aiBaseUrl)) {
        h["Authorization"] = "Bearer " + s.aiKey;
      } else if (/deepseek/i.test(s.aiBaseUrl)) {
        h["Authorization"] = "Bearer " + s.aiKey;
      } else {
        h["Authorization"] = "Bearer " + s.aiKey;
      }
      return h;
    },

    _url(s) {
      return s.aiBaseUrl.replace(/\/$/, "") + "/chat/completions";
    },

    /* 流式对话，onChunk(text) 每收到一段就回调，返回完整文本 */
    async chat(messages, onChunk) {
      const s = CET6.store.getSettings();
      if (!this.isConfigured()) {
        throw new Error("尚未配置 AI 密钥，请点击「设置」填免费key后再试");
      }
      const body = JSON.stringify({
        model: s.aiModel,
        messages: messages,
        stream: true,
        temperature: 0.7
      });
      const resp = await fetch(this._url(s), {
        method: "POST",
        headers: this._buildHeaders(s),
        body: body
      });
      if (!resp.ok) {
        const txt = await resp.text().catch(() => "");
        throw new Error("AI 请求失败 (" + resp.status + "): " + txt.slice(0, 200));
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let full = "";
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop();
        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || !trimmed.startsWith("data:")) continue;
          const data = trimmed.slice(5).trim();
          if (data === "[DONE]") continue;
          try {
            const json = JSON.parse(data);
            const delta = json.choices && json.choices[0] && json.choices[0].delta;
            if (delta && delta.content) {
              full += delta.content;
              if (onChunk) onChunk(delta.content, full);
            }
          } catch (e) { /* skip malformed chunk */ }
        }
      }
      return full;
    },

    /* 非流式对话 */
    async chatSync(messages) {
      const s = CET6.store.getSettings();
      if (!this.isConfigured()) {
        throw new Error("请先在设置中配置 AI 密钥");
      }
      const body = JSON.stringify({
        model: s.aiModel,
        messages: messages,
        stream: false,
        temperature: 0.7
      });
      const resp = await fetch(this._url(s), {
        method: "POST",
        headers: this._buildHeaders(s),
        body: body
      });
      if (!resp.ok) {
        const txt = await resp.text().catch(() => "");
        throw new Error("AI 请求失败 (" + resp.status + "): " + txt.slice(0, 200));
      }
      const json = await resp.json();
      return json.choices[0].message.content;
    },

    /* 写作批改 */
    async correctWriting(essay, prompt, onChunk) {
      const sys = "你是一位资深的英语六级阅卷老师。请对学生的作文进行批改，按以下格式输出：\n" +
        "1. **得分**：给出满分15分的预估分数\n" +
        "2. **总体评价**：2-3句总体评价\n" +
        "3. **语法与拼写错误**：逐条列出原文错误及修改建议（引用原文句子）\n" +
        "4. **用词与句式建议**：指出可替换的高级词汇或句式\n" +
        "5. **结构建议**：对文章结构和逻辑连贯性的建议\n" +
        "6. **范文参考**：根据题目要求写一篇范文\n" +
        "请用中文回复，确保建议具体可行。";
      const userMsg = "【题目】\n" + prompt + "\n\n【学生作文】\n" + essay;
      return this.chat(
        [{ role: "system", content: sys }, { role: "user", content: userMsg }],
        onChunk
      );
    },

    /* 翻译评分 */
    async scoreTranslation(source, userTrans, reference, onChunk) {
      const sys = "你是一位专业的英语翻译老师，正在批改六级翻译练习。请对学生的翻译进行评分和指导，按以下格式输出：\n" +
        "1. **得分**：满分15分\n" +
        "2. **整体评价**：1-2句\n" +
        "3. **逐句对照**：原文→学生翻译→参考译文，指出差异\n" +
        "4. **关键词汇/句型**：列出学生翻译中遗漏或错误的关键表达\n" +
        "5. **改进建议**：3条针对性建议\n" +
        "请用中文回复。";
      const userMsg = "【中文原文】\n" + source + "\n\n【学生翻译】\n" + userTrans + "\n\n【参考译文】\n" + (reference || "（无参考译文）");
      return this.chat(
        [{ role: "system", content: sys }, { role: "user", content: userMsg }],
        onChunk
      );
    },

    /* 简单对话助手 */
    async ask(question, context, onChunk) {
      const sys = "你是六级备考助手，擅长解答英语学习问题（词汇、语法、翻译、写作等）。请用中文回复，回答简洁实用。如果涉及英语内容，请附上中文解释。";
      const msgs = [{ role: "system", content: sys }];
      if (context && context.length) {
        for (const c of context.slice(-6)) {
          msgs.push({ role: c.role, content: c.content });
        }
      }
      msgs.push({ role: "user", content: question });
      return this.chat(msgs, onChunk);
    },

    /* 中英互译 */
    async translate(text, mode, onChunk) {
      let sys;
      if (mode === "zh2en") {
        sys = "你是一位专业的中英翻译专家。请将用户输入的中文翻译成地道、流畅的英文。只输出译文，不要加解释。如果输入包含多个句子，请完整翻译。";
      } else if (mode === "en2zh") {
        sys = "你是一位专业的英中翻译专家。请将用户输入的英文翻译成通顺的中文。只输出译文，不要加解释。";
      } else {
        sys = "你是一位专业的中英互译翻译专家。请自动检测用户输入的语言：如果是中文则翻译为英文，如果是英文则翻译为中文。只输出译文，不要加解释。";
      }
      return this.chat(
        [{ role: "system", content: sys }, { role: "user", content: text }],
        onChunk
      );
    },

    /* AI 不可用时本地规则兜底评分（借鉴"不静默失败"思想，给出基础反馈） */
    localFallback(kind, text, prompt) { // kind: writing | translation
      const tt = (text || "").trim();
      if (!tt) return "请先输入内容再提交。";
      if (kind === "writing") {
        const words = tt.split(/\s+/).filter(Boolean).length;
        const sentences = tt.split(/[.!?。！？]+/).filter(s => s.trim()).length || 1;
        let score = 7;
        let lines = [];
        if (words < 120) { score = Math.max(4, score - 2); lines.push("⚠️ 字数偏少（约 " + words + " 词），六级作文建议 150-180 词。"); }
        if (words >= 120 && words <= 220) score = Math.min(12, score + 1);
        if (/\b(have|has|had)\b/i.test(tt)) lines.push("💡 注意 have/has 主谓一致，避免中式直译。");
        if (/\b(vary|various|variety)\b/i.test(tt)) score = Math.min(12, score + 1), lines.push("✅ 尝试使用 of + quantity（a variety of）等多样表达。");
        if (sentences > 1 && words / sentences >= 15) lines.push("👍 平均句长适中，可继续保持长句与短句穿插。");
        lines.unshift("⚠️ 当前未配置 AI 密钥，以下为本地快速估算，仅供参考；配置 Key 后可获得逐句 AI 精批。");
        return "**本地快速评估（未用 AI）**\n\n" + lines.join("\n") + "\n\n**预估得分：" + score + " / 15（暂估）**";
      }
      // translation
      const len = tt.length;
      let comments = [];
      if (len < 30) comments.push("输入较短，请尽量翻译完整句子以便评估。");
      if (/\b(should|must|can)\b/i.test(tt)) comments.push("能正确使用情态动词，不错。");
      if (/\b(because|so|therefore)\b/i.test(tt)) comments.push("逻辑连接词使用恰当。");
      if (/[\u4e00-\u9fa5]/.test(prompt || "") && /[.!?,;:]/.test(tt) && tt.split(/[.!?]/).length < 2) comments.push("中英句读差异需注意断句与标点。");
      comments.unshift("⚠️ 未配置 AI 密钥，以下为本地快速检查，配置 Key 后可获得逐句 AI 对照评分。");
      return "**本地快速评估（未用 AI）**\n\n" + comments.join("\n") + "\n\n（参考译文见下方对照，请自行比对关键词汇是否译准）";
    }
  };

  CET6.ai = ai;
})();
