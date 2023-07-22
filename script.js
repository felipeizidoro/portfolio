const body = document.querySelector("body");
const root = document.querySelector(":root");

// Change the background
document.getElementById("themeSwitcher").addEventListener("click", function () {
    if (body.dataset.theme === "dark") {
      root.style.setProperty("--bg-color", "#f1f5f9");
      root.style.setProperty("--font-color", "#212529");
      body.dataset.theme = "light";
    } else {
      root.style.setProperty("--bg-color", "#212529");
      root.style.setProperty("--font-color", "#f1f5f9");
      body.dataset.theme = "dark";
    }
  });