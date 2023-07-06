/* Declarando objetos */
const obj_menu = document.querySelector("#menu")
const obj_menu_list = document.querySelector("#menu_ul")
const obj_menu_bt = document.querySelector("#menu_bt")

/* Abre e fecha menu */
window.onresize = FunUpdateCollapsableMenuBt
window.onload = FunUpdateCollapsableMenuBt

document.querySelector('main').addEventListener('click', FunCollapseMenu);

function FunUpdateCollapsableMenuBt() {
    if (window.innerWidth <= 900) {
        obj_menu.prepend(obj_menu_bt)
        collapsed_menu = false
        FunCollapseMenu()
    } else {
        obj_menu.removeChild(obj_menu_bt)
        collapsed_menu = true
        FunCollapseMenu()
    }
}

let collapsed_menu = false
obj_menu_bt.addEventListener('click', function() { FunCollapseMenu() })

function FunCollapseMenu() {
    if(collapsed_menu == true) {
        collapsed_menu = false
        obj_menu.appendChild(obj_menu_list)
    } else {
        collapsed_menu = true
        obj_menu.removeChild(obj_menu_list)
    }
}


