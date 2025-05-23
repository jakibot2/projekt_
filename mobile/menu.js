menu = document.querySelector(".menu");
pokazi_menu = document.querySelector(".pokazi_menu");
skrij_menu = document.querySelector(".skrij_menu");

console.log(pokazi_menu);

pokazi_menu.onclick = function () {
    menu.classList.toggle("pokazan");
    pokazi_menu.style.display = "none";
    skrij_menu.style.display = "inline";
}

skrij_menu.onclick = function () {
    menu.classList.toggle("pokazan");
    skrij_menu.style.display = "none";
    pokazi_menu.style.display = "inline";
}
