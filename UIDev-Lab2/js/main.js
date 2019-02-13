"use strict"

window.onload = function () {
    setIventHandlers()
}

function setIventHandlers() {
    var menuButton = document.getElementById("menuButton")
    var menu = document.getElementById("nav-menu")
    menu.style.display = window.getComputedStyle(menu, null)["display"];
    menuButton.onclick = toggleNavMenu
}

function toggleNavMenu() {
    var menu = document.getElementById("nav-menu")
    if (menu.style.display == "none") {
        menu.style.display = "block"
    } else {
        menu.style.display = "none"
    }
}