const showW = document.querySelector("#show-window")
const hidden = document.querySelectorAll(".hidden")
const closeW = document.querySelector("#close-window")

showW.addEventListener("click", () => {
    hidden[0].style.display = "block";
    hidden[1].style.display = "block";
})

closeW.addEventListener("click", () => {
    hidden[0].style.display = "none";
    hidden[1].style.display = "none";
})