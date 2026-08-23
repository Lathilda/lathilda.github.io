(function () {
  "use strict";

  var header = document.querySelector("[data-header]");
  var menu = document.querySelector("[data-menu]");
  var nav = document.querySelector("[data-nav]");

  function setHeader() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 28);
  }

  setHeader();
  window.addEventListener("scroll", setHeader, { passive: true });

  if (menu && nav) {
    menu.addEventListener("click", function () {
      var open = menu.getAttribute("aria-expanded") !== "true";
      menu.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    });
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        menu.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      }
    });
  }

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var reveals = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window) || reducedMotion) {
    reveals.forEach(function (item) { item.classList.add("is-visible"); });
  } else {
    document.documentElement.classList.add("motion-ready");
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8%", threshold: 0.08 });
    reveals.forEach(function (item) { observer.observe(item); });
  }

  if (!reducedMotion && window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll("[data-tilt]").forEach(function (item) {
      item.addEventListener("pointermove", function (event) {
        var box = item.getBoundingClientRect();
        var x = (event.clientX - box.left) / box.width - 0.5;
        var y = (event.clientY - box.top) / box.height - 0.5;
        item.style.transform = "perspective(900px) rotateX(" + (-y * 5) + "deg) rotateY(" + (x * 7) + "deg)";
      });
      item.addEventListener("pointerleave", function () {
        item.style.transform = "";
      });
    });
  }

  var instrument = document.querySelector("[data-instrument]");
  if (instrument) {
    var step = instrument.querySelector("[data-step]");
    var count = 0;
    instrument.querySelectorAll(".pulse-node").forEach(function (node) {
      node.addEventListener("click", function () {
        count += 1;
        node.classList.toggle("is-reduced");
        if (step) step.textContent = "step " + String(count).padStart(2, "0");
      });
    });
  }
})();
