/* 词汇学习模块 —— 卡片翻转 / 分类浏览 / 生词本 / 导入 */
(function () {
  const CET6 = (window.CET6 = window.CET6 || {});
  const u = CET6.util;

  function getAllWords() {
    return (window.CET6_VOCAB || { words: [] }).words || [];
  }
  function getCats() {
    return (window.CET6_VOCAB || { cats: [] }).cats || [];
  }

  function render(view, params) {
    const mode = (params && params[0]) || "card";
    if (mode === "list") renderList(view);
    else if (mode === "review") renderReview(view);
    else if (mode === "spelling") renderSpelling(view);
    else if (mode === "due") renderDue(view);
    else renderCard(view);
  }

  function renderCard(view) {
    const words = getAllWords();
    const vocab = CET6.store.getVocab();
    const knownCount = Object.keys(vocab.known).length;
    const total = words.length;
    const pct = total ? Math.round(knownCount / total * 100) : 0;
    const dueWords = CET6.store.dueWords();

    view.innerHTML =
      '<div class="page-head">' +
      '<h1>📚 词汇学习</h1>' +
      '<div class="sub">翻转卡片记忆单词 · 点击卡片翻面 · 用按钮标记掌握程度</div>' +
      '</div>' +

      (dueWords.length
        ? '<div class="card mb20" style="border-color:var(--warning);background:var(--warning-50)">' +
          '<div class="row between" style="flex-wrap:wrap;gap:8px">' +
          '<div><b>⏰ 到期待复习：' + dueWords.length + " 个单词</b>" +
          '<div class="small muted">按遗忘曲线（SM-2）安排复习，建议优先完成</div></div>' +
          '<a class="btn sm" href="#/vocab/due">开始到期复习 →</a>' +
          "</div></div>"
        : '<div class="card mb20"><div class="small muted">✅ 暂无到期复习，继续学习新词保持记忆节奏</div></div>') +

      '<div class="grid grid-3 mb20">' +
      statCard("已掌握", knownCount, "green") +
      statCard("待复习", vocab.review.length, "orange") +
      statCard("进度", pct + "%", "blue") +
      '</div>' +

      '<div class="progress mb20"><div style="width:' + pct + '%"></div></div>' +

      '<div class="row mb20" style="gap:8px;flex-wrap:wrap">' +
      '<input class="input" id="vSearch" placeholder="🔍 搜索单词 / 释义…" style="flex:1;min-width:180px;max-width:260px">' +
      '<button class="btn secondary sm" id="vFavOnly" style="white-space:nowrap">❤️ 仅看收藏</button>' +
      '</div>' +
      '<div class="row between mb20">' +
      '<div class="row" style="gap:8px">' +
      '<label class="field" style="margin:0"><span class="muted">分类</span><select id="vCat" class="select" style="margin-left:8px"></select></label>' +
      '<label class="field" style="margin:0"><span class="muted">排序</span><select id="vSort" class="select" style="margin-left:8px"><option value="freq">按频率</option><option value="alpha">按字母</option><option value="random">随机</option></select></label>' +
      '</div>' +
      '<div class="row" style="gap:8px">' +
      '<a class="btn secondary sm" href="#/vocab/list">词表</a>' +
      '<a class="btn secondary sm" href="#/vocab/spelling">拼写测试</a>' +
      '<a class="btn secondary sm" href="#/vocab/review">生词本(' + vocab.review.length + ')</a>' +
      '<button class="btn secondary sm" id="vImport">导入词库</button>' +
      '</div>' +
      '</div>' +

      '<div class="flashcard" id="flashCard">' +
      '<div class="flashcard-inner" id="flashInner">' +
      '<div class="flash-face front" id="flashFront"></div>' +
      '<div class="flash-face back" id="flashBack"></div>' +
      '</div>' +
      '</div>' +

      '<div class="row" style="justify-content:center;margin-top:18px;gap:10px">' +
      '<button class="btn secondary" id="vPrev">← 上一个</button>' +
      '<button class="btn secondary" id="vSpeak">🔊 朗读</button>' +
      '<button class="btn danger" id="vUnknown">不会</button>' +
      '<button class="btn warning" id="vFuzzy">模糊</button>' +
      '<button class="btn success" id="vKnown">已会</button>' +
      '<button class="btn secondary" id="vNext">下一个 →</button>' +
      '</div>' +
      '<p class="muted small mt14" style="text-align:center" id="vCounter"></p>';

    const catSel = view.querySelector("#vCat");
    catSel.innerHTML = '<option value="">全部分类</option>' +
      getCats().map(c => '<option value="' + c.id + '">' + c.icon + " " + c.name + "</option>").join("");

    let list = words.slice();
    let idx = 0;
    let flipped = false;
    let favOnly = false;

    function applyFilter() {
      const cat = catSel.value;
      const sort = view.querySelector("#vSort").value;
      const q = (view.querySelector("#vSearch").value || "").toLowerCase().trim();
      list = words.filter(w =>
        (!cat || w.c === cat) &&
        (!q || w.w.toLowerCase().includes(q) || (w.d || "").toLowerCase().includes(q)) &&
        (!favOnly || CET6.store.isFavWord(w.w))
      );
      if (sort === "freq") list.sort((a, b) => (b.s || 0) - (a.s || 0));
      else if (sort === "alpha") list.sort((a, b) => a.w.localeCompare(b.w));
      else list.sort(() => Math.random() - 0.5);
      // 断点续学：同一过滤条件下，恢复到上次位置
      const res = CET6.store.getResume("vocab");
      if (res && res.cat === cat && res.sort === sort && res.len === list.length && res.idx > 0 && res.idx < list.length) {
        idx = res.idx;
        u.toast("已续学，从上次第 " + (idx + 1) + " 个继续，" + (list.length - idx) + " 个剩余", "info");
      } else {
        idx = 0;
      }
      showCard();
    }

    function showCard() {
      flipped = false;
      const card = view.querySelector("#flashCard");
      card.classList.remove("flipped");
      if (!list.length) {
        view.querySelector("#flashFront").innerHTML = '<div class="muted">没有符合条件的单词</div>';
        view.querySelector("#flashBack").innerHTML = "";
        view.querySelector("#vCounter").textContent = "";
        return;
      }
      const w = list[idx];
      const isFav = CET6.store.isFavWord(w.w);
      view.querySelector("#flashFront").innerHTML =
        '<div style="position:absolute;top:10px;right:14px;cursor:pointer;font-size:22px;user-select:none" id="favToggle" title="收藏/取消">' + (isFav ? "❤️" : "🤍") + "</div>" +
        '<div class="flash-word">' + u.escapeHtml(w.w) + "</div>" +
        '<div class="flash-phonetic">' + u.escapeHtml(w.p || "") + "</div>" +
        '<div class="flash-tip">点击翻面查看释义</div>';
      view.querySelector("#flashBack").innerHTML =
        '<div class="flash-def">' + u.escapeHtml(w.d) + "</div>" +
        '<div class="flash-example">' + u.escapeHtml(w.e || "") + "</div>" +
        (w.ec ? '<div class="flash-example" style="margin-top:4px">' + u.escapeHtml(w.ec) + "</div>" : "") +
        '<div class="flash-tip">' + (w.s ? "真题频率: " + "★".repeat(w.s) : "") + "</div>";
      view.querySelector("#vCounter").textContent = (idx + 1) + " / " + list.length;
    }

    catSel.onchange = applyFilter;
    view.querySelector("#vSort").onchange = applyFilter;
    view.querySelector("#vSearch").oninput = applyFilter;
    view.querySelector("#vFavOnly").onclick = function () {
      favOnly = !favOnly;
      this.innerText = favOnly ? "❤️ 查看全部" : "❤️ 仅看收藏";
      applyFilter();
      u.toast(favOnly ? "已切换为仅看收藏" : "已显示全部单词", "info");
    };

    view.querySelector("#flashCard").onclick = function (e) {
      if (e.target && e.target.id === "favToggle") {
        if (list.length) {
          const w = list[idx].w;
          const now = CET6.store.toggleFavWord(w);
          e.target.textContent = now ? "❤️" : "🤍";
          u.toast(now ? "已收藏 ❤️ : " + w : "取消收藏: " + w, "info");
          if (favOnly) applyFilter();
        }
        return;
      }
      flipped = !flipped;
      this.classList.toggle("flipped", flipped);
    };

    view.querySelector("#vPrev").onclick = function () {
      if (list.length) { idx = (idx - 1 + list.length) % list.length; saveResume(); showCard(); }
    };
    view.querySelector("#vNext").onclick = function () {
      if (list.length) { idx = (idx + 1) % list.length; saveResume(); showCard(); }
    };
    function saveResume() {
      CET6.store.setResume("vocab", {
        cat: catSel.value, sort: view.querySelector("#vSort").value,
        idx: idx, len: list.length
      });
    }
    view.querySelector("#vSpeak").onclick = function () {
      if (list.length) CET6.tts.speak(list[idx].w);
    };

    view.querySelector("#vKnown").onclick = function () {
      if (list.length) { CET6.store.reviewDue(CET6.store.getSM2(), list[idx].w, true); CET6.store.markWord(list[idx].w, "known"); u.toast("已标记为「已会」", "success"); applyFilterRefresh(); }
    };
    view.querySelector("#vFuzzy").onclick = function () {
      if (list.length) { CET6.store.reviewDue(CET6.store.getSM2(), list[idx].w, false); CET6.store.markWord(list[idx].w, "fuzzy"); u.toast("已加入复习列表", "warning"); applyFilterRefresh(); }
    };
    view.querySelector("#vUnknown").onclick = function () {
      if (list.length) { CET6.store.reviewDue(CET6.store.getSM2(), list[idx].w, false); CET6.store.markWord(list[idx].w, "unknown"); u.toast("已标记为「不会」", "error"); applyFilterRefresh(); }
    };

    function applyFilterRefresh() {
      const knownCount = Object.keys(CET6.store.getVocab().known).length;
      const pct = total ? Math.round(knownCount / total * 100) : 0;
      view.querySelector(".grid.grid-3").innerHTML =
        statCard("已掌握", knownCount, "green") +
        statCard("待复习", CET6.store.getVocab().review.length, "orange") +
        statCard("进度", pct + "%", "blue");
      view.querySelector(".progress > div").style.width = pct + "%";
      view.querySelector("#vNext").click();
    }

    view.querySelector("#vImport").onclick = function () {
      u.modal("导入自定义词库",
        '<div class="field"><label>粘贴 JSON 数组（格式同 vocabulary.js 中的单词对象）</label>' +
        '<textarea class="textarea" id="importArea" placeholder=\'[{"w":"word","p":"/wɜːrd/","d":"n. 单词","e":"example sentence","ec":"例句译文","c":"verb","s":3}]\' style="height:200px"></textarea></div>' +
        '<div class="row" style="justify-content:flex-end"><button class="btn" id="doImport">导入</button></div>',
        function (modal) {
          modal.querySelector("#doImport").onclick = function () {
            try {
              const arr = JSON.parse(modal.querySelector("#importArea").value);
              if (!Array.isArray(arr)) throw new Error("not array");
              CET6.store.addCustomWords(arr);
              u.toast("成功导入 " + arr.length + " 个单词", "success");
              u.closeModal();
            } catch (e) {
              u.toast("JSON 格式错误：" + e.message, "error");
            }
          };
        });
    };

    applyFilter();
  }

  function renderList(view) {
    const words = getAllWords();
    const vocab = CET6.store.getVocab();

    view.innerHTML =
      '<div class="page-head">' +
      '<h1>📋 词汇表</h1>' +
      '<div class="sub">浏览全部词汇 · 点击行可朗读</div></div>' +
      '<div class="row mb20" style="gap:8px">' +
      '<input class="input" id="vSearch" placeholder="搜索单词或释义…" style="flex:1;max-width:320px">' +
      '<select id="vLCat" class="select" style="max-width:180px"><option value="">全部分类</option></select>' +
      '<a class="btn secondary sm" href="#/vocab">← 返回卡片</a>' +
      '</div>' +
      '<div class="table-wrap"><table class="table"><thead><tr><th>收藏</th><th>单词</th><th>音标</th><th>释义</th><th>频率</th><th>状态</th><th>操作</th></tr></thead>' +
      '<tbody id="vTbody"></tbody></table></div>';

    const catSel = view.querySelector("#vLCat");
    catSel.innerHTML = '<option value="">全部分类</option>' +
      getCats().map(c => '<option value="' + c.id + '">' + c.name + "</option>").join("");

    const search = CET6.util.debounce(function () { renderRows(); }, 200);

    function renderRows() {
      const q = view.querySelector("#vSearch").value.toLowerCase().trim();
      const cat = catSel.value;
      let list = words.filter(w =>
        (!cat || w.c === cat) &&
        (!q || w.w.toLowerCase().includes(q) || (w.d || "").toLowerCase().includes(q))
      );
      const tb = view.querySelector("#vTbody");
      if (!list.length) { tb.innerHTML = '<tr><td colspan="7" class="muted" style="text-align:center;padding:20px">无匹配结果</td></tr>'; return; }
      tb.innerHTML = list.map(w => {
        const inReview = vocab.review.indexOf(w.w) >= 0;
        const known = vocab.known[w.w];
        const isFav = CET6.store.isFavWord(w.w);
        const badge = known ? '<span class="badge green">已会</span>' : inReview ? '<span class="badge orange">复习</span>' : '<span class="badge gray">未学</span>';
        return '<tr data-w="' + u.escapeHtml(w.w) + '">' +
          '<td><span class="v-fav" style="cursor:pointer;font-size:18px;user-select:none" title="收藏/取消">' + (isFav ? "❤️" : "🤍") + "</span></td>" +
          '<td class="word-td">' + u.escapeHtml(w.w) + "</td>" +
          '<td class="phon">' + u.escapeHtml(w.p || "") + "</td>" +
          "<td>" + u.escapeHtml(w.d) + "</td>" +
          "<td>" + "★".repeat(w.s || 1) + "</td>" +
          "<td>" + badge + "</td>" +
          '<td><button class="btn ghost sm v-speak">🔊</button> ' +
          '<button class="btn ghost sm v-rev">' + (inReview ? "取消" : "加入复习") + "</button></td>" +
          "</tr>";
      }).join("");
    }

    catSel.onchange = renderRows;
    view.querySelector("#vSearch").oninput = search;
    view.querySelector("#vTbody").addEventListener("click", function (e) {
      const tr = e.target.closest("tr");
      if (!tr) return;
      const w = tr.dataset.w;
      if (e.target.classList.contains("v-speak")) CET6.tts.speak(w);
      else if (e.target.classList.contains("v-rev")) {
        CET6.store.toggleReview(w);
        vocab.review = CET6.store.getVocab().review;
        renderRows();
        u.toast("已更新复习列表", "success");
      } else if (e.target.classList.contains("v-fav")) {
        const now = CET6.store.toggleFavWord(w);
        e.target.textContent = now ? "❤️" : "🤍";
        u.toast(now ? "已收藏 ❤️ : " + w : "取消收藏: " + w, "info");
      }
    });

    renderRows();
  }

  function renderReview(view) {
    const vocab = CET6.store.getVocab();
    const review = vocab.review;
    const allWords = getAllWords();
    const customWords = CET6.store.getCustomWords();
    const allMap = {};
    allWords.forEach(w => { allMap[w.w] = w; });
    customWords.forEach(w => { allMap[w.w] = w; });

    view.innerHTML =
      '<div class="page-head">' +
      '<h1>🔖 生词本</h1>' +
      '<div class="sub">复习标记过的单词 · 共 ' + review.length + " 个</div></div>" +
      (review.length === 0
        ? '<div class="empty">还没有加入生词，去<a href="#/vocab">词汇学习</a>中添加吧</div>'
        : '<div class="row mb20" style="gap:8px;flex-wrap:wrap">' +
        '<button class="btn secondary sm" id="rfavOnly" style="white-space:nowrap">❤️ 仅看收藏</button>' +
        '</div>' +
        '<div class="table-wrap"><table class="table"><thead><tr><th>收藏</th><th>单词</th><th>音标</th><th>释义</th><th>例句</th><th>操作</th></tr></thead><tbody id="rTbody"></tbody></table>' +
        '<div class="row mt20"><button class="btn secondary sm" id="clearReview">清空生词本</button>' +
        '<a class="btn sm" href="#/vocab">← 返回卡片</a></div>');

    if (review.length) {
      let revFavOnly = false;
      function renderReviewRows() {
        let rows = review.filter(w => !revFavOnly || CET6.store.isFavWord(w));
        view.querySelector("#rTbody").innerHTML = rows.map(w => {
          const info = allMap[w] || { w: w, p: "", d: "（自定义）", e: "" };
          const isFav = CET6.store.isFavWord(w);
          return '<tr data-w="' + u.escapeHtml(w) + '">' +
            '<td><span class="r-fav" style="cursor:pointer;font-size:18px;user-select:none">' + (isFav ? "❤️" : "🤍") + "</span></td>" +
            '<td class="word-td">' + u.escapeHtml(w) + "</td>" +
            '<td class="phon">' + u.escapeHtml(info.p || "") + "</td>" +
            "<td>" + u.escapeHtml(info.d || "") + "</td>" +
            '<td class="small">' + u.escapeHtml((info.e || "").slice(0, 50)) + "</td>" +
            '<td><button class="btn ghost sm r-speak">🔊</button> ' +
            '<button class="btn success sm r-known">已会</button> ' +
            '<button class="btn danger sm r-del">移除</button></td></tr>';
        }).join("");
        if (!rows.length) view.querySelector("#rTbody").innerHTML = '<tr><td colspan="6" class="muted" style="text-align:center;padding:20px">没有收藏的生词</td></tr>';
      }

      view.querySelector("#rfavOnly").onclick = function () {
        revFavOnly = !revFavOnly;
        this.innerText = revFavOnly ? "❤️ 查看全部" : "❤️ 仅看收藏";
        renderReviewRows();
        u.toast(revFavOnly ? "已切换为仅看收藏" : "已显示全部生词", "info");
      };

      renderReviewRows();

      view.querySelector("#rTbody").addEventListener("click", function (e) {
        const tr = e.target.closest("tr");
        if (!tr) return;
        const w = tr.dataset.w;
        if (e.target.classList.contains("r-speak")) CET6.tts.speak(w);
        else if (e.target.classList.contains("r-fav")) {
          const now = CET6.store.toggleFavWord(w);
          e.target.textContent = now ? "❤️" : "🤍";
          u.toast(now ? "已收藏 ❤️ : " + w : "取消收藏: " + w, "info");
          if (revFavOnly) renderReviewRows();
        } else if (e.target.classList.contains("r-known")) {
          CET6.store.markWord(w, "known");
          tr.remove();
          u.toast("已标记为已会", "success");
        } else if (e.target.classList.contains("r-del")) {
          CET6.store.toggleReview(w);
          tr.remove();
          u.toast("已从生词本移除", "success");
        }
      });

      view.querySelector("#clearReview").onclick = function () {
        if (u.confirm("确定清空生词本吗？此操作不可撤销。")) {
          const v = CET6.store.getVocab();
          v.review = [];
          localStorage.setItem("cet6prep_vocab", JSON.stringify(v));
          u.toast("生词本已清空", "success");
          renderReview(view);
        }
      };
    }
  }

  /* ==================== 拼写测试 ==================== */
  function renderSpelling(view) {
    const allWords = getAllWords().filter(w => w.w && w.w.indexOf(" ") === -1);
    const cats = getCats();
    let queue = [];
    let idx = 0;
    let correct = 0;
    let wrong = 0;
    let answered = false;
    let spFavOnly = false;

    view.innerHTML =
      '<div class="page-head">' +
      '<h1>⌨️ 拼写测试</h1>' +
      '<div class="sub">听音拼写 · 巩固词汇记忆</div></div>' +

      '<div class="row mb20" style="gap:8px;flex-wrap:wrap">' +
      '<label class="field" style="margin:0"><span class="muted">分类</span><select id="spCat" class="select" style="margin-left:8px">' +
      '<option value="">全部分类</option>' +
      cats.map(c => '<option value="' + c.id + '">' + c.icon + " " + c.name + "</option>").join("") +
      "</select></label>" +
      '<label class="field" style="margin:0"><span class="muted">数量</span><select id="spNum" class="select" style="margin-left:8px">' +
      '<option value="10">10 题</option><option value="20" selected>20 题</option><option value="30">30 题</option><option value="50">50 题</option>' +
      "</select></label>" +
      '<button class="btn sm" id="spStart">开始测试</button>' +
      '<button class="btn secondary sm" id="spFavOnly" style="white-space:nowrap">❤️ 仅收藏</button>' +
      '<a class="btn secondary sm" href="#/vocab">← 返回卡片</a>' +
      "</div>" +

      '<div class="row mb20"><span class="small muted" id="spFavCount"></span></div>' +

      '<div id="spArea"></div>';

    view.querySelector("#spStart").onclick = function () {
      const cat = view.querySelector("#spCat").value;
      const num = parseInt(view.querySelector("#spNum").value);
      let pool = allWords.filter(w =>
        (!cat || w.c === cat) &&
        (!spFavOnly || CET6.store.isFavWord(w.w))
      );
      pool.sort(() => Math.random() - 0.5);
      queue = pool.slice(0, Math.min(num, pool.length));
      idx = 0; correct = 0; wrong = 0;
      showQuestion();
    };

    view.querySelector("#spFavOnly").onclick = function () {
      spFavOnly = !spFavOnly;
      this.innerText = spFavOnly ? "❤️ 全部词" : "❤️ 仅收藏";
      updateSpFavCount();
      u.toast(spFavOnly ? "已切换为仅收藏单词" : "已显示全部单词", "info");
    };
    function updateSpFavCount() {
      const el = view.querySelector("#spFavCount");
      if (!el) return;
      const cat = view.querySelector("#spCat").value;
      const favPool = allWords.filter(w => (!cat || w.c === cat) && CET6.store.isFavWord(w.w));
      el.textContent = spFavOnly ? ("当前将只测试 收藏单词 " + favPool.length + " 个") : ("收藏单词共 " + favPool.length + " 个，可点「❤️ 仅收藏」只测收藏词");
    }
    updateSpFavCount();

    function showQuestion() {
      if (idx >= queue.length) {
        showResult();
        return;
      }
      answered = false;
      const w = queue[idx];
      const area = view.querySelector("#spArea");

      area.innerHTML =
        '<div class="grid grid-2 mb20">' +
        spStat("已答对", correct, "green") +
        spStat("已答错", wrong, "red") +
        "</div>" +
        '<div class="progress mb20"><div style="width:' + (idx / queue.length * 100) + '%"></div></div>' +

        '<div class="card" style="text-align:center;padding:32px 20px">' +
        '<div class="muted small mb14">第 ' + (idx + 1) + " / " + queue.length + " 题</div>" +
        '<div class="row" style="justify-content:flex-end;padding-bottom:6px"><span id="spFavBtn" style="cursor:pointer;font-size:22px;user-select:none" title="收藏/取消">' + (CET6.store.isFavWord(w.w) ? "❤️" : "🤍") + "</span></div>" +
        '<button class="btn lg" id="spPlay" style="font-size:18px;padding:14px 32px">🔊 点击播放读音</button>' +
        '<div class="mt14"><button class="btn secondary sm" id="spReplay">🔁 再听一遍</button>' +
        '<button class="btn secondary sm" id="spHint">💡 提示首字母</button></div>' +
        '<div class="mt20">' +
        '<input class="input sp-input" id="spInput" placeholder="输入单词拼写…" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" style="text-align:center;font-size:22px;letter-spacing:2px;max-width:300px;height:50px">' +
        "</div>" +
        '<div class="row mt20" style="justify-content:center;gap:10px">' +
        '<button class="btn" id="spSubmit">提交答案</button>' +
        '<button class="btn secondary" id="spSkip">跳过 →</button>' +
        "</div>" +
        '<div id="spFeedback" class="mt20"></div>' +
        "</div>";

      area.querySelector("#spFavBtn").onclick = function () {
        const now = CET6.store.toggleFavWord(w.w);
        this.textContent = now ? "❤️" : "🤍";
        u.toast(now ? "已收藏 ❤️ : " + w.w : "取消收藏: " + w.w, "info");
      };
      area.querySelector("#spPlay").onclick = function () { CET6.tts.speak(w.w); };
      area.querySelector("#spReplay").onclick = function () { CET6.tts.speak(w.w); };
      area.querySelector("#spHint").onclick = function () {
        const inp = area.querySelector("#spInput");
        inp.placeholder = w.w.charAt(0) + " " + "•".repeat(w.w.length - 1) + " (" + w.w.length + " 字母)";
        u.toast("首字母: " + w.w.charAt(0).toUpperCase(), "info");
      };

      const input = area.querySelector("#spInput");
      input.focus();
      setTimeout(function () { CET6.tts.speak(w.w); }, 500);

      function check() {
        if (answered) return;
        answered = true;
        const userAns = input.value.trim().toLowerCase();
        const correctAns = w.w.toLowerCase();
        const fb = area.querySelector("#spFeedback");

        if (userAns === correctAns) {
          correct++;
          fb.innerHTML = '<div class="card" style="border-color:var(--success);background:var(--success-50)">' +
            '<div style="color:var(--success);font-weight:700;font-size:18px">✅ 正确！</div>' +
            '<div class="mt8"><b>' + u.escapeHtml(w.w) + "</b> " + u.escapeHtml(w.p || "") + " " + u.escapeHtml(w.d) + "</div>" +
            '<div class="small muted mt8">' + u.escapeHtml(w.e || "") + "</div></div>";
          input.style.borderColor = "var(--success)";
          CET6.store.markWord(w.w, "known");
        } else {
          wrong++;
          fb.innerHTML = '<div class="card" style="border-color:var(--danger);background:var(--danger-50)">' +
            '<div style="color:var(--danger);font-weight:700;font-size:18px">❌ 错误</div>' +
            '<div class="mt8">你的答案: <span style="text-decoration:line-through">' + u.escapeHtml(userAns) + "</span></div>" +
            '<div>正确拼写: <b style="color:var(--success)">' + u.escapeHtml(w.w) + "</b> " + u.escapeHtml(w.p || "") + " " + u.escapeHtml(w.d) + "</div>" +
            '<div class="small muted mt8">' + u.escapeHtml(w.e || "") + "</div></div>";
          input.style.borderColor = "var(--danger)";
          CET6.store.markWord(w.w, "fuzzy");
        }
        area.querySelector("#spSubmit").textContent = "下一题 →";
      }

      area.querySelector("#spSubmit").onclick = function () {
        if (!answered) { check(); }
        else { idx++; showQuestion(); }
      };
      area.querySelector("#spSkip").onclick = function () {
        if (!answered) {
          answered = true;
          wrong++;
          const fb = area.querySelector("#spFeedback");
          fb.innerHTML = '<div class="card" style="border-color:var(--warning)">' +
            '<div style="font-weight:700">⏭️ 已跳过</div>' +
            '<div class="mt8">正确拼写: <b>' + u.escapeHtml(w.w) + "</b> " + u.escapeHtml(w.d) + "</div></div>";
          area.querySelector("#spSubmit").textContent = "下一题 →";
          CET6.store.markWord(w.w, "fuzzy");
        } else { idx++; showQuestion(); }
      };
      input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") { e.preventDefault(); area.querySelector("#spSubmit").click(); }
      });
    }

    function showResult() {
      const total = queue.length;
      const pct = total ? Math.round(correct / total * 100) : 0;
      const grade = pct >= 90 ? "A" : pct >= 80 ? "B" : pct >= 70 ? "C" : pct >= 60 ? "D" : "F";
      const area = view.querySelector("#spArea");

      area.innerHTML =
        '<div class="card" style="text-align:center;padding:40px 20px">' +
        '<div style="font-size:48px">' + (pct >= 80 ? "🎉" : pct >= 60 ? "👍" : "💪") + "</div>" +
        '<h2 style="margin-top:10px">测试完成</h2>' +
        '<div style="font-size:36px;font-weight:800;color:var(--primary);margin:14px 0">' + correct + " / " + total + "</div>" +
        '<div class="row" style="justify-content:center;gap:20px;margin-bottom:20px">' +
        '<div><div class="stat-num" style="color:var(--success)">' + correct + "</div><div class=\"stat-label\">答对</div></div>" +
        '<div><div class="stat-num" style="color:var(--danger)">' + wrong + "</div><div class=\"stat-label\">答错</div></div>" +
        '<div><div class="stat-num" style="color:var(--primary)">' + pct + "%</div><div class=\"stat-label\">正确率</div></div>" +
        '<div><div class="stat-num" style="color:var(--warning)">' + grade + "</div><div class=\"stat-label\">评级</div></div>" +
        "</div>" +
        '<div class="row" style="justify-content:center;gap:10px">' +
        '<button class="btn" id="spAgain">再来一轮</button>' +
        '<a class="btn secondary" href="#/vocab">返回词汇</a>' +
        '<a class="btn secondary" href="#/vocab/review">查看生词本</a>' +
        "</div></div>";

      area.querySelector("#spAgain").onclick = function () {
        idx = 0; correct = 0; wrong = 0;
        queue.sort(() => Math.random() - 0.5);
        showQuestion();
      };
    }

    function spStat(label, val, color) {
      return '<div class="card" style="text-align:center">' +
        '<div class="stat-num" style="color:var(--' + (color === "green" ? "success" : color === "red" ? "danger" : "primary") + ')">' + val + "</div>" +
        '<div class="stat-label">' + label + "</div></div>";
    }
  }

  function statCard(label, val, color) {
    return '<div class="card" style="text-align:center">' +
      '<div class="stat-num" style="color:var(--' + (color === "green" ? "success" : color === "orange" ? "warning" : "primary") + ')">' + val + "</div>" +
      '<div class="stat-label">' + label + "</div></div>";
  }

  /* ==================== 到期复习（SM-2） ==================== */
  function renderDue(view) {
    const sm2 = CET6.store.getSM2();
    const due = CET6.store.dueWords();
    const allWords = getAllWords();
    const allMap = {};
    allWords.forEach(w => { allMap[w.w] = w; });
    const customWords = CET6.store.getCustomWords();
    customWords.forEach(w => { allMap[w.w] = w; });

    view.innerHTML =
      '<div class="page-head">' +
      '<h1>⏰ 到期复习</h1>' +
      '<div class="sub">按遗忘曲线（SM-2）安排 · 今日到期待复习 ' + due.length + " 个</div></div>" +
      '<div class="row mb20" style="gap:8px;align-items:center;flex-wrap:wrap">' +
      '<span class="badge orange">今日 ' + due.length + "</span>" +
      '<span class="badge gray">总复习卡片 ' + Object.keys(sm2).length + "</span>" +
      '<a class="btn secondary sm" href="#/vocab">← 返回词汇</a>' +
      "</div>";

    if (due.length === 0) {
      view.innerHTML += '<div class="empty">🎉 今日没有到期待复习的单词，好好休息或学新词吧</div>';
      const cn = allWords.filter(w => (w.w || "").indexOf(" ") !== -1).length;
      if (view.querySelector("a[href='#/vocab']")) { /* keep back link */ }
      return;
    }

    // 复习队列按到期顺序，答对移出本轮，答错留队再错一轮
    let queue = due.slice();
    let idx = 0;
    let doneCorrect = 0;
    let doneWrong = 0;
    let round = 0;

    view.innerHTML +=
      '<div id="dueArea">' +
      '<div class="row mb20" style="gap:8px">' +
      '<div class="card" style="text-align:center;flex:1"><div class="stat-num" style="color:var(--success)">' + doneCorrect + "</div><div class=\"stat-label\">已掌握</div></div>" +
      '<div class="card" style="text-align:center;flex:1"><div class="stat-num" style="color:var(--danger)">' + doneWrong + "</div><div class=\"stat-label\">待加强</div></div>" +
      '<div class="card" style="text-align:center;flex:1"><div class="stat-num" style="color:var(--primary)">' + queue.length + "</div><div class=\"stat-label\">剩余</div></div>" +
      "</div>" +
      '<div class="progress mb20"><div id="dueProg" style="width:0%"></div></div>' +
      '<div class="flashcard" id="dueCard">' +
      '<div class="flashcard-inner" id="dueInner">' +
      '<div class="flash-face front" id="dueFront"></div>' +
      '<div class="flash-face back" id="dueBack"></div>' +
      "</div></div>" +
      '<div class="row" style="justify-content:center;margin-top:18px;gap:10px">' +
      '<button class="btn success" id="dueKnown">✓ 记得</button>' +
      '<button class="btn danger" id="dueForgot">✗ 忘了</button>' +
      "</div>" +
      '<p class="muted small mt14" style="text-align:center" id="dueCnt"></p>' +
      "</div>";

    function show() {
      if (idx >= queue.length) { finish(); return; }
      const w = queue[idx];
      const card = view.querySelector("#dueCard");
      card.classList.remove("flipped");
      view.querySelector("#dueFront").innerHTML =
        '<div class="flash-word">' + u.escapeHtml(w.w) + "</div>" +
        '<div class="flash-phonetic">' + u.escapeHtml((w.p || "")) + "</div>";
      view.querySelector("#dueBack").innerHTML =
        '<div class="flash-def">' + u.escapeHtml(w.d) + "</div>" +
        (w.e ? '<div class="flash-example">' + u.escapeHtml(w.e) + "</div>" : "") +
        '<div class="flash-tip">下次复习间隔：' + (CET6.store.sm2Card(w.w).interval || "—") + " 天</div>";
      view.querySelector("#dueCnt").textContent = "复习进度 " + (idx + 1) + " / " + queue.length + (round ? "（第 " + (round + 1) + " 轮）" : "");
      view.querySelector("#dueProg").style.width = Math.min(100, (doneCorrect + doneWrong) / Math.max(1, due.length) * 100) + "%";
    }

    function finish() {
      view.querySelector("#dueArea").innerHTML =
        '<div class="card" style="text-align:center;padding:40px 20px">' +
        '<div style="font-size:48px">🎉</div><h2>本轮到期复习完成</h2>' +
        '<div class="row" style="justify-content:center;gap:20px;margin-top:16px">' +
        '<div><div class="stat-num" style="color:var(--success)">' + doneCorrect + "</div><div class=\"stat-label\">已掌握</div></div>" +
        '<div><div class="stat-num" style="color:var(--danger)">' + doneWrong + "</div><div class=\"stat-label\">待加强</div></div>" +
        "</div>" +
        '<div class="row mt20" style="justify-content:center;gap:10px">' +
        '<button class="btn" id="dueAgain">再复习一遍</button>' +
        '<a class="btn secondary" href="#/vocab">返回词汇</a>' +
        "</div></div>";
      view.querySelector("#dueAgain").onclick = function () {
        const still = queue.filter(w => w._forgot);
        queue = still.concat(due.filter(w => !queue.includes(w))); // 错词优先
        idx = 0; round++; doneCorrect = 0; doneWrong = 0;
        view.querySelector("#dueArea").innerHTML = ""; renderDue(view);
      };
    }

    function answer(knownFlag) {
      const w = queue[idx];
      CET6.store.reviewDue(CET6.store.getSM2(), w.w, knownFlag);
      const card = CET6.store.sm2Card(w.w);
      if (knownFlag) { doneCorrect++; w._forgot = false; }
      else { doneWrong++; w._forgot = true; }
      view.querySelector("#dueCnt").textContent = knownFlag
        ? "✓「" + w.w + "」已在 " + card.interval + " 天后复习"
        : "✗「" + w.w + "」1 天后再次复习";
      idx++;
      setTimeout(show, 550);
    }

    const cardEl = view.querySelector("#dueCard");
    cardEl.onclick = function () { this.classList.toggle("flipped"); };
    view.querySelector("#dueKnown").onclick = function () { answer(true); };
    view.querySelector("#dueForgot").onclick = function () { answer(false); };

    show();
  }

  CET6.vocab = { render };
})();
