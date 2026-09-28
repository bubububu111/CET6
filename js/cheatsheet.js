/* 干货速查模块 —— 各模块重点单词/句式/短语 */
(function () {
  const CET6 = (window.CET6 = window.CET6 || {});
  const u = CET6.util;

  CET6.cheatsheet = {
    render(view) {
      const data = window.CET6_CHEATSHEET || { groups: [] };
      const groups = data.groups || [];

      if (groups.length === 0) {
        view.innerHTML = '<div class="card"><h2>📋 干货速查</h2><p>暂无数据</p></div>';
        return;
      }

      let tabs = '<div class="card"><h2>📋 干货速查</h2><p class="small muted">各模块重点单词 · 句式 · 可运用短语，考前速记 · 支持搜索与收藏</p>';

      // ---- 搜索栏 + 收藏筛选 ----
      tabs += '<div class="row mt14" style="gap:10px;flex-wrap:wrap">' +
        '<input id="cheatSearch" type="text" placeholder="🔍 搜索 单词 / 句式 / 词组 / 中文释义…" ' +
        'style="flex:1;min-width:220px;padding:9px 12px;border:1px solid var(--border);border-radius:10px;background:var(--card);color:var(--text);outline:none">' +
        '<select id="cheatFavFilter" class="btn sm secondary" style="padding:9px 12px;background:var(--card);color:var(--text)">' +
        '<option value="all">⭐ 全部</option>' +
        '<option value="fav">❤️ 仅看收藏</option>' +
        "</select></div>";

      tabs += '<div class="row" style="justify-content:space-between;margin-top:14px;gap:10px;flex-wrap:wrap">';
      tabs += '<div class="row" style="gap:8px;flex-wrap:wrap">';
      groups.forEach((g, i) => {
        tabs += '<button class="btn ' + (i === 0 ? "" : "secondary") + ' sm" data-g="' + g.id + '">' + g.icon + " " + g.name + "</button>";
      });
      tabs += "</div>";
      tabs += '<button class="btn sm secondary" id="cheatPrintBtn">🖨️ 导出打印背诵版</button>';
      tabs += "</div></div>";

      /* ---- 渲染所有面板，便于搜索时按需显示 ---- */
      let panels = groups.map((g, gi) => {
        const secs = (g.sections || []).map((sec, si) => {
          const itemsHtml = (sec.items || []).map((it, ii) =>
            '<div class="cheat-item" data-gi="' + gi + '" data-si="' + si + '" data-ii="' + ii + '" ' +
            'data-fav="' + (isFav(g.id, si, ii) ? "1" : "0") + '" ' +
            'data-hay="' + u.escapeHtml(((it.en || "") + " " + (it.zh || "") + " " + (it.note || "")).toLowerCase()) + '" ' +
            'style="padding:8px 0;border-bottom:1px dashed var(--border)">' +
            '<div class="row" style="gap:10px;align-items:flex-start;flex-wrap:wrap">' +
            '<span class="cheat-fav" role="button" title="收藏/取消" data-gi="' + gi + '" data-si="' + si + '" data-ii="' + ii + '" ' +
            'style="cursor:pointer;font-size:16px;line-height:1.2;user-select:none">' +
            (isFav(g.id, si, ii) ? "❤️" : "🤍") + "</span>" +
            '<div style="flex:1;min-width:200px"><b class="cheat-en">' + u.escapeHtml(it.en) + "</b></div>" +
            '<div style="flex:1;min-width:180px"><span class="cheat-zh" style="color:var(--primary-600)">' + u.escapeHtml(it.zh) + "</span></div>" +
            "</div>" +
            (it.note ? '<div class="small mt4 cheat-note" style="color:var(--text-3);padding-left:26px">💡 ' + u.escapeHtml(it.note) + "</div>" : "") +
            "</div>"
          ).join("");
          return '<div class="card cheat-sec" data-si="' + si + '"><h3>📌 <span class="sec-title">' + u.escapeHtml(sec.title) + "</span></h3>" +
            '<div class="mt8">' + itemsHtml + "</div></div>";
        }).join("");
        return '<div class="cheat-panel" data-g="' + g.id + '" style="' + (gi === 0 ? "" : "display:none") + '"><div class="mb8"><h2>' + g.icon + " " + u.escapeHtml(g.name) + '</h2><p class="small muted">' + u.escapeHtml(g.desc || "") + "</p></div>" + secs + "</div>";
      }).join("");

      view.innerHTML = tabs + panels;

      /* ---- 收藏存取 ---- */
      function isFav(gid, si, ii) {
        try {
          const f = JSON.parse(localStorage.getItem("cet6prep_cheat_fav") || "{}");
          return !!(f[gid] && f[gid][si] && f[gid][si][ii]);
        } catch (e) { return false; }
      }
      function toggleFav(gid, si, ii) {
        let f = {};
        try { f = JSON.parse(localStorage.getItem("cet6prep_cheat_fav") || "{}"); } catch (e) {}
        f[gid] = f[gid] || {};
        f[gid][si] = f[gid][si] || {};
        f[gid][si][ii] = !f[gid][si][ii];
        localStorage.setItem("cet6prep_cheat_fav", JSON.stringify(f));
        return f[gid][si][ii];
      }

      /* ---- 收藏点击 ---- */
      view.querySelectorAll(".cheat-fav").forEach(c => {
        c.addEventListener("click", function (e) {
          e.stopPropagation();
          const gi = +this.getAttribute("data-gi");
          const si = +this.getAttribute("data-si");
          const ii = +this.getAttribute("data-ii");
          const gid = groups[gi].id;
          const isNowFav = toggleFav(gid, si, ii);
          this.textContent = isNowFav ? "❤️" : "🤍";
          this.closest(".cheat-item").setAttribute("data-fav", isNowFav ? "1" : "0");
          applyFilter(); // 若处于「仅看收藏」则即时隐藏
          u.toast(isNowFav ? "已收藏 ❤️" : "已取消收藏", "info");
        });
      });

      /* ---- 搜索 + 筛选 ---- */
      const searchInput = view.querySelector("#cheatSearch");
      const favSel = view.querySelector("#cheatFavFilter");

      function applyFilter() {
        const q = (searchInput.value || "").trim().toLowerCase();
        const favOnly = favSel.value === "fav";
        let visibleCount = 0;
        view.querySelectorAll(".cheat-item").forEach(it => {
          const hay = it.getAttribute("data-hay") || "";
          const fav = it.getAttribute("data-fav") === "1";
          let show = true;
          let hit = false;
          if (q) { if (hay.indexOf(q) === -1) show = false; else hit = true; }
          if (favOnly && !fav) show = false;
          it.style.display = show ? "" : "none";
          if (show) visibleCount++;
          // 高亮：收藏项左侧红边；搜索命中淡蓝底
          it.classList.toggle("highlight", show && fav);
          it.classList.toggle("cheat-search-hit", show && hit);
        });
        // 折叠无效板块（当前面板内）
        let panel = null;
        view.querySelectorAll(".cheat-panel").forEach(p => { if (p.style.display !== "none") panel = p; });
        if (panel) {
          panel.querySelectorAll(".cheat-sec").forEach(sec => {
            const any = Array.from(sec.querySelectorAll(".cheat-item")).some(it => it.style.display !== "none");
            sec.style.display = any ? "" : "none";
          });
        }
        // 无结果显示提示
        let empty = view.querySelector("#cheatEmpty");
        if (!empty && panel) {
          empty = document.createElement("div");
          empty.id = "cheatEmpty";
          empty.style.cssText = "display:none;text-align:center;padding:30px;color:var(--text-3)";
          empty.textContent = "😕 没有匹配的内容，换个关键词试试";
          panel.insertAdjacentElement("afterend", empty);
        }
        if (empty) empty.style.display = visibleCount ? "none" : "";
      }
      searchInput.addEventListener("input", applyFilter);
      favSel.addEventListener("change", applyFilter);
      applyFilter();

      /* ---- 打印 ---- */
      const printBtn = view.querySelector("#cheatPrintBtn");
      if (printBtn) {
        printBtn.addEventListener("click", function () {
          const w = window.open("", "_blank");
          if (!w) { alert("请允许弹窗以导出打印"); return; }
          let all = "<html><head><meta charset='utf-8'><title>六级干货背诵版</title><style>" +
            "body{font-family:'Microsoft YaHei',sans-serif;padding:24px;line-height:1.7;color:#1e293b}" +
            "h1{text-align:center;font-size:22px;border-bottom:3px solid #4f46e5;padding-bottom:10px}" +
            "h2{font-size:17px;color:#4f46e5;margin:22px 0 6px;border-left:5px solid #4f46e5;padding-left:8px}" +
            "h3{font-size:15px;color:#334155;margin:14px 0 4px}" +
            ".item{padding:5px 0;border-bottom:1px dashed #e2e8f0;page-break-inside:avoid}" +
            ".en{font-weight:600}.zh{color:#4338ca;margin-left:8px}" +
            ".note{color:#64748b;font-size:13px}" +
            "@media print{body{padding:10px}h1{font-size:18px}}";
          all += "</style></head><body><h1>📋 六级备考干货背诵版</h1><p style='text-align:center;color:#64748b'>重点单词 · 句式 · 短语速记手册</p>";
          groups.forEach(g => {
            all += "<h2>" + g.icon + " " + g.name + "</h2>";
            (g.sections || []).forEach(sec => {
              all += "<h3>📌 " + u.escapeHtml(sec.title) + "</h3>";
              (sec.items || []).forEach(it => {
                all += '<div class="item"><span class="en">' + u.escapeHtml(it.en) + "</span><span class=\"zh\">" + u.escapeHtml(it.zh) + "</span>";
                if (it.note) all += '<div class="note">💡 ' + u.escapeHtml(it.note) + "</div>";
                all += "</div>";
              });
            });
          });
          all += "</body></html>";
          w.document.write(all);
          w.document.close();
          w.focus();
          setTimeout(() => { w.print(); }, 300);
        });
      }

      view.querySelectorAll("button[data-g]").forEach(btn => {
        btn.addEventListener("click", function () {
          const g = this.getAttribute("data-g");
          view.querySelectorAll(".cheat-panel").forEach(p => { p.style.display = p.getAttribute("data-g") === g ? "" : "none"; });
          view.querySelectorAll("button[data-g]").forEach(b => {
            if (b.getAttribute("data-g") === g) b.classList.remove("secondary");
            else if (!b.classList.contains("secondary")) b.classList.add("secondary");
          });
          applyFilter(); // 切换模块后重新折叠空板块
        });
      });
    }
  };
})();