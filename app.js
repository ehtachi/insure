let close = document.querySelector(".close");
let menu = document.querySelector(".nav-menu");
let body = document.body;

close.addEventListener("click", () => {
  menu.classList.toggle("no");
  close.classList.toggle("no");

  if (!menu.classList.contains("no")) {
    body.style.overflowY = "hidden";
  } else {
    body.style.overflowY = "auto";
  }
});
