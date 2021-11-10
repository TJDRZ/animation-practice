const two = document.querySelector('#two');
const twoA = document.querySelector('#twoA');
const ham = document.querySelector('#ham');
const bur = document.querySelector('#bur');
const ger = document.querySelector('#ger');

two.addEventListener('click', () => {
    if (two.classList.contains('closed')) {
        ham.style.transform = 'rotate(45deg) translate(22.5%, 100%)';
        ham.style.backgroundColor = 'blue';
        bur.style.opacity = '0';
        ger.style.transform = 'rotate(-45deg) translate(22.5%, -100%)';
        ger.style.backgroundColor = 'blue';
        twoA.style.transform = 'translateX(15rem)';
        twoA.style.backgroundColor = 'coral';
        two.classList.toggle('closed');
    }
    else {
        ham.style.transform = 'rotate(0) translate(0)';
        ham.style.backgroundColor = 'aliceblue';
        bur.style.opacity = '1';
        ger.style.transform = 'rotate(0) translate(0)';
        ger.style.backgroundColor = 'aliceblue';
        twoA.style.transform = 'translateX(-15rem)';
        twoA.style.backgroundColor = 'chartreuse';
        two.classList.toggle('closed');
    }
});
