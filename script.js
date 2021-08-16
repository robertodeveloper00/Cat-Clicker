'use strict';
// SELECTORS
const catPic = document.querySelector('.cat-img');
const clickCount = document.querySelector('.cat-counter');
let counter = 0;

// EVENT LISTENER
catPic.addEventListener('click', () => {
    counter++;
    clickCount.innerHTML = counter;
})