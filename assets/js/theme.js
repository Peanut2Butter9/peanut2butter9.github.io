// Light/dark mode button. The visitor's choice is remembered in their browser;
// without a choice the site follows their system setting.
(function () {
  var root = document.documentElement;
  var button = document.querySelector(".theme-toggle");
  var systemDark = window.matchMedia("(prefers-color-scheme: dark)");
  if (!button) return;

  function currentTheme() {
    return root.getAttribute("data-theme") || (systemDark.matches ? "dark" : "light");
  }

  function updateLabel() {
    var next = currentTheme() === "dark" ? "light" : "dark";
    button.setAttribute("aria-label", "Switch to " + next + " mode");
    button.setAttribute("title", "Switch to " + next + " mode");
  }

  button.addEventListener("click", function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    updateLabel();
  });

  if (systemDark.addEventListener) systemDark.addEventListener("change", updateLabel);
  updateLabel();
})();
