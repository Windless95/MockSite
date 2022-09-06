let btn = document.querySelector("button.mobile-menu-button-close");
let btn1 = document.querySelector("button.mobile-menu-open")
let menu = document.querySelector(".mobile-menu")

let desk1 = document.querySelector(".desktop-menu")
let desk2 = document.querySelector("button.desktop-menu-button")


//event listener for the mobile menu to open.

desk2.addEventListener('click', () => {
    desk1.classList.toggle('hidden')
})


btn.addEventListener('click', () => {
    menu.classList.toggle('hidden')
})

btn1.addEventListener('click', () => {
    menu.classList.toggle('hidden')
})
