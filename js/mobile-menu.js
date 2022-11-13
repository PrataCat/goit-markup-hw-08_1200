(() => {
  const refs = {
    openMobMenuBtn: document.querySelector("[data-mobmenu-open]"),
    closeMobMenuBtn: document.querySelector("[data-mobmenu-close]"),
    mobmenu: document.querySelector("[data-mobmenu]"),
    body: document.querySelector("body"),
  };

  refs.openMobMenuBtn.addEventListener("click", toggleMobMenu);
  refs.closeMobMenuBtn.addEventListener("click", toggleMobMenu);

  function toggleMobMenu() {
    refs.mobmenu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();
