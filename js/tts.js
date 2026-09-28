/* 语音合成（Web Speech API）——用于听力朗读与单词发音 */
(function () {
  const CET6 = (window.CET6 = window.CET6 || {});
  let voices = [];
  let enVoice = null;

  function loadVoices() {
    voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
    enVoice = voices.find(v => /en[-_]US/i.test(v.lang)) ||
              voices.find(v => /en[-_]GB/i.test(v.lang)) ||
              voices.find(v => /^en/i.test(v.lang)) || null;
  }
  if (window.speechSynthesis) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }

  const tts = {
    supported: !!window.speechSynthesis,

    speak(text, opts) {
      opts = opts || {};
      if (!this.supported) {
        CET6.util.toast("当前浏览器不支持语音合成", "error");
        return;
      }
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "en-US";
      u.rate = opts.rate || 1.0;
      u.pitch = opts.pitch || 1.0;
      if (enVoice) u.voice = enVoice;
      if (opts.onend) u.onend = opts.onend;
      if (opts.onboundary) u.onboundary = opts.onboundary;
      window.speechSynthesis.speak(u);
    },

    stop() {
      if (this.supported) window.speechSynthesis.cancel();
    },

    paused() {
      return this.supported && window.speechSynthesis.paused;
    },

    pause() {
      if (this.supported && !window.speechSynthesis.paused) window.speechSynthesis.pause();
    },

    resume() {
      if (this.supported && window.speechSynthesis.paused) window.speechSynthesis.resume();
    },

    speakSequence(lines, opts) {
      opts = opts || {};
      if (!lines.length) return;
      let idx = 0;
      const next = () => {
        if (idx >= lines.length) {
          if (opts.onAllEnd) opts.onAllEnd();
          return;
        }
        const line = lines[idx++];
        this.speak(line, { rate: opts.rate || 1.0, onend: next });
      };
      next();
    }
  };

  CET6.tts = tts;
})();
