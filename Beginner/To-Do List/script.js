const themeToggleBtn = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const body = document.querySelector("body");
const main = document.querySelector("main");

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  body.classList.add(savedTheme);

  if (savedTheme === "dark") {
    themeIcon.src = "./images/icon-sun.svg";
    main.style.backgroundImage = "url('./images/bg-desktop-dark.jpg')";
  } else {
    themeIcon.src = "./images/icon-moon.svg";
    main.style.backgroundImage = "url('./images/bg-desktop-light.jpg')";
  }
});

themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");

  const isDark = body.classList.contains("dark");

  themeIcon.src = isDark ? "./images/icon-sun.svg" : "./images/icon-moon.svg";
  main.style.backgroundImage = isDark
    ? "url('./images/bg-desktop-dark.jpg')"
    : "url('./images/bg-desktop-light.jpg')";

  localStorage.setItem("theme", isDark ? "dark" : "light");
});
