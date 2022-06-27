function openSideMenu() {
    document.getElementById("side-menu").style.width = "100%";
  }

  function closeSideMenu() {
    document.getElementById("side-menu").style.width = "0";
  }

  const btn = document.getElementById("btn")
const nav = document.getElementById("nav")

btn.addEventListener("click", () => {
    nav.classList.toggle("active");
    btn.classList.toggle("active");
});