"use strict";

const priceMin = document.querySelector('.min');
const priceMax = document.querySelector('.max');
const rangeSlider = document.querySelector('.range-slider');
const rangeMin = document.querySelector('.range-min');
const rangeMax = document.querySelector('.range-max');

var limitPrice = 10;

[rangeMin, rangeMax].map((range, index) => {
    range.addEventListener('input', (e) => {
        if(rangeMax.value - rangeMin.value < limitPrice) {
            rangeMin.value = `${priceMin.textContent.slice(1)}`;
            rangeMax.value = `${priceMax.textContent.slice(1)}`;
        }
        else if(index === 0){
            priceMin.textContent = `$${range.value}`;
            rangeSlider.style.left = `${range.value}%`;
        }
        else if(index === 1){
            priceMax.textContent = `$${range.value}`;
            rangeSlider.style.right = `${100 - range.value}%`;
        }
    })
});