const openMenu = document.querySelector('.humberger')
const menu = document.querySelector('.menu-drop')
const closeButton = document.createElement("img");
openMenu.addEventListener('click',()=>{
    if(menu.classList.contains("close")) {
        menu.classList.remove("close");
        menu.classList.add("open");
        openMenu.setAttribute("src", "images/close.png");

    }
    else{
        menu.classList.remove("open");
        menu.classList.add("close");
        openMenu.setAttribute("src", "images/humberger.png");
    }
 
})