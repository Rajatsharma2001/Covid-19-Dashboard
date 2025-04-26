'use strict';

const faq = document.querySelector('.pop-faq')
const showfaq = document.querySelector('.faq');

const mask = document.querySelector('.pop-mask');
const showMask = document.querySelector('.mask');

const doDont = document.querySelector('.pop-do-dont');
const showDoDont = document.querySelector('.instruct');

const redirect1 = document.querySelector('.redirect1');
const redirect2 = document.querySelector('.redirect2');
const redirect3 = document.querySelector('.redirect3');
const redirect4 = document.querySelector('.redirect4');
const redirect5 = document.querySelector('.redirect5');
const redirect6 = document.querySelector('.redirect6');

showfaq.addEventListener('click' , function() {
    console.log("button pressed");
    faq.classList.toggle('hidden');
    mask.classList.add('hidden');
    doDont.classList.add('hidden');
})

showMask.addEventListener('click' , function() {
    console.log("button pressed");
    mask.classList.toggle('hidden');
    faq.classList.add('hidden');
    doDont.classList.add('hidden');
})

showDoDont.addEventListener('click' , function () {
    console.log("button pressed!");
    mask.classList.add('hidden');
    faq.classList.add('hidden');
    doDont.classList.toggle('hidden');
})

const popUp = function () {
    alert('You are being redirected to an external website.');
}
redirect1.addEventListener('click' , popUp);
redirect2.addEventListener('click' , popUp);
redirect3.addEventListener('click' , popUp);
redirect4.addEventListener('click' , popUp);
redirect5.addEventListener('click' , popUp);
redirect6.addEventListener('click' , popUp);

