const two = document.querySelector('#two');
const twoA = document.querySelector('#twoA');

two.addEventListener('click', () => {
    twoA.style.transform = 'translateX(15rem)';
    twoA.style.backgroundColor = 'coral';
});

twoA.addEventListener('click', () => {
    twoA.style.transform = 'translateX(-15rem)';
    twoA.style.backgroundColor = 'chartreuse';
});