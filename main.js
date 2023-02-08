// Effect Title Banner

const typedText  = document.querySelector('.typed-text');
const cursorText = document.querySelector('.cursor-text');
const textArray = document.querySelector('.effect-text').getAttribute('data-words').split(',');
const typingDelay = 50;
const erasingDelay = 50;
const newTextDelay = 2000;
const firstElementDelay = 0;
let textArrayIndex = 0;
let charIndex = 0;


function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(removeText, newTextDelay);
    }
}

function removeText() {
    if (charIndex > 0) {
        typedText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(removeText, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) {
            textArrayIndex = 0;
        }
        setTimeout(type, typingDelay + 1000);
    }

};

document.addEventListener("DOMContentLoaded", function() {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
})


const header = document.querySelector('#header');
document.addEventListener("scroll",function(e){
    if(window.scrollY > 200) {
        header.classList.add('sticky');
    }else {
        header.classList.remove('sticky');
    }
})