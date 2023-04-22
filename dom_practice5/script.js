const buttons = document.getElementsByClassName("button-color")
const emph = document.querySelector(".emphasized-word")



for (let button of buttons) {
    button.addEventListener("click", () => {
        emph.style.color = button.textContent;
    })
}