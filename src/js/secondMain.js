let time;

document.addEventListener('mousemove', resetTimer);
document.addEventListener('keypress', resetTimer);
function resetTimer() {
    clearTimeout(time);
    time = setTimeout(colseQuestion, 300000);
}

function colseQuestion() {
    let question = confirm("Вы тут?");
    if(!question) {
        window.close();
    }
}


const element = document.querySelector('.block');
let isElementAnimated = false;

const drawAnimation = () => {
  if (!isElementAnimated) {
    isElementAnimated = true;
    element.style.left = `${window.innerWidth - element.clientWidth}px`;
    element.style.transition = 'left 10s linear';
  } else {
    isElementAnimated = false;
    const val = window.getComputedStyle(element, null).left;
    element.style = '';
    element.style.left = `${val}`;
  }
};

const restartAnimation = () => {
  element.style = '';
  element.style.left = `${window.innerWidth - element.clientWidth}px`;
  element.style.transition = 'left 10s linear';
};

element.addEventListener('click', drawAnimation);
element.addEventListener('transitionend', restartAnimation);