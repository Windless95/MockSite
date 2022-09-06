let btn = document.querySelector("button.mobile-menu-button-close");

let desk1 = document.querySelector(".desktop-menu")
let desk2 = document.querySelector("button.desktop-menu-button")


//event listener for the mobile menu to open.

desk2.addEventListener('click', () => {
    desk1.classList.toggle('hidden')
})


