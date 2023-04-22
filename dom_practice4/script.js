const downS = document.querySelector(".font-size-down")
const defaultS = document.querySelector(".font-default-size")
const upS = document.querySelector(".font-size-up")
const main = document.getElementsByName("main-text")



downS.addEventListener('click', () => {
    main[0].style.fontSize = '2rem';
})

defaultS.addEventListener('click', () => {
    main[0].style.fontSize = '4rem';
})

upS.addEventListener('click', () => {
    main[0].style.fontSize = '6rem';
})
