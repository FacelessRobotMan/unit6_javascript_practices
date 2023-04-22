// Your task is to make it so that the background of the following divs
// changes to the color black to reveal the text inside if the box is
// checked.


"use strict";

const checkDiv = document.querySelectorAll(".checkbox_div")


function change_background() {
    for (let i = 0; i < checkDiv.length; i++) {
        const checkboxes = checkDiv[i].querySelectorAll("input[type='checkbox']");
        for (let j = 0; j < checkboxes.length; j++)
            checkboxes[j].addEventListener("change", function() {
                if (this.checked) {
                    checkDiv[i].style.backgroundColor = 'black';
                } else {
                    checkDiv[i].style.backgroundColor = '';
                }
        })
    }
}

change_background();