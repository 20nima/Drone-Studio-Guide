// Drone Studio guide: a side menu like the app's; each page shows its screenshot with numbered sections and every control explained.
(function () {
  const D = window.GUIDE_DATA || {}, T = window.GUIDE_TEXT;
  const ORDER = ["start", "project", "plan", "onsite", "photos", "mark", "thermal", "map", "report", "keys"];
  const ICONS = {
    start: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/>',
    project: '<path d="M3 7h6l2 2h10v10H3z"/>',
    plan: '<circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M7.5 16.5l3-5 3 2 3-5"/>',
    photos: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-8 8"/>',
    mark: '<path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/>',
    thermal: '<path d="M10 4a2 2 0 014 0v10a4 4 0 11-4 0z"/>',
    map: '<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/>',
    report: '<path d="M6 3h9l4 4v14H6z"/><path d="M9 12h7M9 16h7"/>',
    onsite: '<path d="M12 21s-7-6.5-7-11a7 7 0 0114 0c0 4.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    keys: '<rect x="3" y="7" width="18" height="11" rx="2"/><path d="M7 11h1M11 11h1M15 11h1M8 14h8"/>'
  };
  let lang = pickLang();
  const main = document.getElementById("main"), nav = document.getElementById("nav");

  function pickLang() {
    const q = new URLSearchParams(location.search).get("lang");
    if (q === "da" || q === "en") return q;
    try { const s = localStorage.getItem("guide-lang"); if (s === "da" || s === "en") return s; } catch (e) {}
    return (navigator.language || "").toLowerCase().startsWith("da") ? "da" : "en";
  }
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"})[c]);
  const tipHtml = s => esc(s).replace(/\n/g, "<br>");
  const L = () => T[lang], U = () => T[lang].ui, data = () => D[lang] || D.da || {nav: {}, pages: {}};
  const title = k => k === "start" ? U().start : k === "onsite" ? U().onsite : k === "keys" ? U().keys : (data().nav[k] || k);
  const icon = k => `<svg viewBox="0 0 24 24">${ICONS[k] || ""}</svg>`;

  function route() {
    const [page, tab] = (location.hash.slice(1) || "start").split("/");
    return {page: ORDER.includes(page) ? page : "start", tab: Math.max(0, (parseInt(tab, 10) || 1) - 1)};
  }

  function buildNav(cur) {
    const item = k => `<a class="nav-item${k === cur ? " on" : ""}" href="#${k}">${icon(k)}<span>${esc(title(k))}</span></a>`;
    nav.innerHTML = item("start") + item("project") + `<div class="nav-group">${esc(U().before)}</div>` + item("plan") + item("onsite")
      + `<div class="nav-group">${esc(U().after)}</div>` + ["photos", "mark", "thermal", "map", "report"].map(item).join("")
      + '<div class="nav-sep"></div>' + item("keys");
    document.getElementById("lang-btn").textContent = U().lang;
    document.getElementById("brand-sub").textContent = U().help;
    document.documentElement.lang = lang;
    document.title = U().title;
  }

  function pager(cur) {
    const i = ORDER.indexOf(cur), p = ORDER[i - 1], n = ORDER[i + 1];
    return `<div class="pager">${p ? `<a href="#${p}">← ${esc(title(p))}</a>` : ""}${n ? `<a class="next" href="#${n}">${esc(title(n))} →</a>` : ""}</div>`;
  }

  // ---- pages without a screenshot
  function startPage() {
    const S = L().startPage;
    return `<h1>${esc(U().start)}</h1><p class="lead">${S.lead}</p><div class="h2">${esc(S.flowTitle)}</div>`
      + `<ol class="flow">${S.flow.map(([k, txt]) => `<li><a href="#${k}"><b>${esc(title(k))}</b><span>${txt}</span></a></li>`).join("")}</ol>`
      + `<div class="h2">${esc(S.frameTitle)}</div><div class="frame">${S.frame.map(([h, txt]) => `<div class="card"><h2>${esc(h)}</h2>${txt}</div>`).join("")}</div>`;
  }
  function onsitePage() {
    const S = L().onsitePage;
    return `<h1>${esc(U().onsite)}</h1><p class="lead">${S.lead}</p><ol class="steps">${S.steps.map(([h, txt]) => `<li><b>${esc(h)}</b>${txt}</li>`).join("")}</ol>`
      + `<div class="card" style="max-width:900px"><h2>${esc(U().tips)}</h2><ul>${S.tips.map(t => `<li>${t}</li>`).join("")}</ul></div>`;
  }
  function keysPage() {
    const S = L().keysPage;
    return `<h1>${esc(U().keys)}</h1><p class="lead">${S.lead}</p><table class="keys">`
      + S.rows.map(([k, txt]) => `<tr><td>${k.split(" / ").map(x => `<kbd>${esc(x)}</kbd>`).join(" / ")}</td><td>${esc(txt)}</td></tr>`).join("") + "</table>";
  }

  // ---- an app page: text, tabs, the screenshot with its sections and the list
  function appPage(key, tab) {
    const P = L().pages[key] || {}, shots = data().pages[key] || [];
    tab = Math.min(tab, Math.max(0, shots.length - 1));
    const shot = shots[tab];
    let h = `<h1>${esc(title(key))}</h1><p class="lead">${P.lead || ""}</p>`;
    const steps = P.steps && P.steps.length ? `<div class="card"><h2>${esc(U().how)}</h2><ol>${P.steps.map(s => `<li>${s}</li>`).join("")}</ol></div>` : "";
    const tips = P.tips && P.tips.length ? `<div class="card"><h2>${esc(U().tips)}</h2><ul>${P.tips.map(s => `<li>${s}</li>`).join("")}</ul></div>` : "";
    if (steps || tips) h += `<div class="cards"${steps && tips ? "" : ' style="grid-template-columns:1fr"'}>${steps}${tips}</div>`;
    if (shots.length > 1) {
      h += `<div class="tabs" role="tablist">${shots.map((s, i) => `<button class="tab${i === tab ? " on" : ""}" data-tab="${i}" type="button">${esc(s.tab || i + 1)}</button>`).join("")}</div>`;
      if (P.tabs && P.tabs[tab]) h += `<p class="tabtext">${P.tabs[tab]}</p>`;
    }
    if (!shot) return h;
    const pct = (r, W, H) => `left:${r[0] / W * 100}%;top:${r[1] / H * 100}%;width:${r[2] / W * 100}%;height:${r[3] / H * 100}%`;
    let hots = "", badges = "";
    shot.sections.forEach((s, i) => {
      hots += `<div class="hot sec" data-id="${s.id}" style="${pct(s.rect, shot.w, shot.h)}"></div>`;
      badges += `<button class="badge" type="button" data-id="${s.id}" style="left:${(s.rect[0] + s.rect[2] - 16) / shot.w * 100}%;top:${(s.rect[1] + 4) / shot.h * 100}%" title="${esc(s.title)}">${i + 1}</button>`;
    });
    shot.controls.forEach(c => { hots += `<div class="hot ctl" data-id="${c.id}" style="${pct(c.rect, shot.w, shot.h)}"></div>`; });
    const ctl = c => {
      if (c.label) return `<div class="ctl-item" data-id="${c.id}"><b>${esc(c.label)}</b><span>${tipHtml(c.tip)}</span></div>`;
      const m = /^(.+?[.!?:])(\s[\s\S]*)?$/.exec(c.tip) || [c.tip, c.tip, ""];       // no name: the first sentence is the name
      return `<div class="ctl-item" data-id="${c.id}"><b>${tipHtml(m[1])}</b><span>${tipHtml((m[2] || "").trim())}</span></div>`;
    };
    let list = shot.sections.map((s, i) => {
      const cs = shot.controls.filter(c => c.section === s.id);
      return `<div class="sec-item" id="li-${s.id}"><div class="sec-title" data-id="${s.id}"><span class="num">${i + 1}</span><strong>${esc(s.title)}</strong></div>`
        + (s.tip ? `<div class="sec-tip">${tipHtml(s.tip)}</div>` : "") + `<div class="ctls">${cs.map(ctl).join("")}</div></div>`;
    }).join("");
    const loose = shot.controls.filter(c => !c.section);
    if (loose.length) list += `<div class="sec-item"><div class="sec-title"><span class="num">·</span><strong>${esc(shot.sections.length ? U().other : U().onpage)}</strong></div><div class="ctls">${loose.map(ctl).join("")}</div></div>`;
    if (!shot.sections.length && !loose.length) list = `<div class="empty">${esc(U().empty)}</div>`;
    h += `<div class="explore"><div class="shotbox"><div class="shotbar"><span>${shot.sections.length} ${esc(U().sections)} · ${shot.controls.length} ${esc(U().controls)}</span>`
      + `<label><input type="checkbox" id="show-all"> ${esc(U().showAll)}</label></div>`
      + `<div class="shot" id="shot"><img src="${shot.img}" alt="${esc(title(key))}" loading="lazy">${hots}${badges}</div></div>`
      + `<div class="list" id="list"><div class="list-head"><b>${esc(U().onpage)}</b>${esc(U().hint)}</div>${list}</div></div>`;
    return h;
  }

  function wire(key) {
    main.querySelectorAll(".tab").forEach(b => b.addEventListener("click", () => { location.hash = `${key}/${+b.dataset.tab + 1}`; }));
    const shot = document.getElementById("shot");
    if (!shot) return;
    const lit = (id, on) => {
      main.querySelectorAll(`[data-id="${id}"]`).forEach(e => e.classList.toggle("lit", on));
    };
    main.querySelectorAll(".ctl-item, .sec-title[data-id]").forEach(e => {
      e.addEventListener("mouseenter", () => lit(e.dataset.id, true));
      e.addEventListener("mouseleave", () => lit(e.dataset.id, false));
      e.addEventListener("click", () => {                       // on a phone there is no hover: a tap shows it on the picture
        const hot = shot.querySelector(`.hot[data-id="${e.dataset.id}"]`);
        lit(e.dataset.id, true);
        if (hot) hot.scrollIntoView({behavior: "smooth", block: "center"});
        setTimeout(() => lit(e.dataset.id, false), 1600);
      });
    });
    main.querySelectorAll(".badge").forEach(b => {
      b.addEventListener("mouseenter", () => lit(b.dataset.id, true));
      b.addEventListener("mouseleave", () => lit(b.dataset.id, false));
      b.addEventListener("click", () => {
        const li = document.getElementById("li-" + b.dataset.id), list = document.getElementById("list");
        if (li && list) {
          if (getComputedStyle(list).position === "sticky") list.scrollTo({top: li.offsetTop - list.firstElementChild.offsetHeight, behavior: "smooth"});
          else li.scrollIntoView({behavior: "smooth", block: "start"});
          lit(b.dataset.id, true); setTimeout(() => lit(b.dataset.id, false), 1600);
        }
      });
    });
    document.getElementById("show-all").addEventListener("change", e => shot.classList.toggle("show-all", e.target.checked));
    shot.querySelector("img").addEventListener("click", e => {
      document.getElementById("lightbox-img").src = e.target.src;
      document.getElementById("lightbox").hidden = false;
    });
  }

  function render() {
    const {page, tab} = route();
    buildNav(page);
    main.innerHTML = (page === "start" ? startPage() : page === "onsite" ? onsitePage() : page === "keys" ? keysPage() : appPage(page, tab))
      + pager(page) + `<p class="foot">${esc(U().footer)}</p>`;
    wire(page);
    document.getElementById("side").classList.remove("open");
    window.scrollTo(0, 0);
  }

  document.getElementById("lang-btn").addEventListener("click", () => {
    lang = lang === "da" ? "en" : "da";
    try { localStorage.setItem("guide-lang", lang); } catch (e) {}
    const u = new URL(location.href); u.searchParams.set("lang", lang); history.replaceState(null, "", u);
    render();
  });
  document.getElementById("menu-btn").addEventListener("click", () => document.getElementById("side").classList.toggle("open"));
  document.getElementById("lightbox").addEventListener("click", e => { e.currentTarget.hidden = true; });
  document.addEventListener("keydown", e => { if (e.key === "Escape") document.getElementById("lightbox").hidden = true; });
  window.addEventListener("hashchange", render);
  render();
})();
