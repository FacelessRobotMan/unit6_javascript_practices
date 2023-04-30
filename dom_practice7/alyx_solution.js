'use strict';

const circleSlider = document.querySelector('#circleSlider')
const circleEl = document.querySelector('.wave')

circleSlider.addEventListener('change', function () {
    circleEl.style.height = circleSlider.value + 'vh'
    circleEl.style.width = circleSlider.value + 'vh'
})