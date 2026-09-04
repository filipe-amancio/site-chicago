(() => {
  "use strict";

  // ----- ano no rodapé -----
  const yearEl = document.getElementById("ano");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ----- menu mobile -----
  const toggle = document.getElementById("burgerToggle");
  const nav = document.getElementById("menu-principal");

  const closeNav = () => {
    nav.dataset.state = "closed";
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  };
  const openNav = () => {
    nav.dataset.state = "open";
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("nav-open");
  };

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.dataset.state === "open" ? closeNav() : openNav();
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNav));
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.dataset.state === "open") closeNav();
    });
  }

  // ----- abas do cardápio -----
  const tabs = document.querySelectorAll(".menu-tab");
  const panels = document.querySelectorAll(".menu-list");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.dataset.target;

      tabs.forEach((t) => {
        t.classList.toggle("is-active", t === tab);
        t.setAttribute("aria-selected", t === tab ? "true" : "false");
      });

      panels.forEach((panel) => {
        const active = panel.id === targetId;
        panel.classList.toggle("is-active", active);
        panel.hidden = !active;
      });
    });
  });

  // ----- revelar ao rolar -----
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  // ----- botão voltar ao topo -----
  const toTop = document.getElementById("toTop");
  if (toTop) {
    const onScroll = () => toTop.classList.toggle("is-visible", window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }
})();
