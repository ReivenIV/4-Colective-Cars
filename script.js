const btnDown = document.querySelectorAll('.btn2');
const btnUp = document.querySelectorAll('.btn1');
const tableau = document.querySelector('.tableauPrincipal');
const grid1 = document.querySelector('.grid1');
const grid2 = document.querySelector('.grid2');
const grid3 = document.querySelector('.grid3');

let index = 1;

const downTableau = () => {
    gsap.to(tableau, {duration: 1, y: '-=100vh'});
}

const upTableau = () => {
    gsap.to(tableau, {duration: 1, y: '+=100vh'});
}

btnDown.forEach(btn => {
    btn.addEventListener('click', () => {

        if (index < 3) {
            downTableau();
            index++;
        }
    })
})

btnUp.forEach(btn => {
    btn.addEventListener('click', () => {

        if (index > 1) {
            upTableau();
            index--;
        }
    })
})