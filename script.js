const btnDown = document.querySelectorAll('.btn2');
const btnUp = document.querySelectorAll('.btn1');
const tableau = document.querySelector('.tableauPrincipal');
const grid1 = document.querySelector('.grid1');
const grid2 = document.querySelector('.grid2');
const grid3 = document.querySelector('.grid3');

let index = 1;

const downTableau = () => {

    const TLSORT = gsap.timeline();

    TLSORT.to(`.t${index}`, {opacity: 0, y: -100, duration: 0.45});
    TLSORT.to(`.st${index}`, {opacity: 0, y: -100, duration: 0.45}, '-=0.25');
    TLSORT.to(`.mt${index}`, {opacity: 0, y: -100, duration: 0.45}, '-=0.25');
    TLSORT.to(`.btna${index}`, {opacity: 0, y: -100, duration: 0.45}, '-=0.35');
    TLSORT.to(`.btnb${index}`, {opacity: 0, y: -100, duration: 0.45}, '-=0.35');
    TLSORT.to(`.tg${index}`, {opacity: 0, y: -100, duration: 0.45}, '-=0.55');
    TLSORT.to(tableau, {duration: 1, ease: "power1.in", y: '-=100vh'}, '-=0.95');

    const TLENTRE = gsap.timeline();

    TLENTRE.fromTo(`.t${index+1}`, {opacity:0, y: -100}, {opacity:1, y:0, duration: 0.45, delay: 1})
    TLENTRE.fromTo(`.st${index+1}`, {opacity:0, y: -100}, {opacity:1, y:0, duration: 0.45}, '-=0.25')
    TLENTRE.fromTo(`.mt${index+1}`, {opacity:0, y: -100}, {opacity:1, y:0, duration: 0.45}, '-=0.25')
    TLENTRE.fromTo(`.btna${index+1}`, {opacity:0, y: -100}, {opacity:1, y:0, duration: 0.45}, '-=0.35')
    TLENTRE.fromTo(`.btnb${index+1}`, {opacity:0, y: -100}, {opacity:1, y:0, duration: 0.45}, '-=0.35')
    TLENTRE.fromTo(`.tg${index+1}`, {opacity:0, y: -100}, {opacity:1, y:0, duration: 0.45}, '-=0.45')

}

const upTableau = () => {
   
    const TLSORT2 = gsap.timeline();

    TLSORT2.to(`.t${index}`, {opacity: 0, y: 100, duration: 0.45});
    TLSORT2.to(`.st${index}`, {opacity: 0, y: 100, duration: 0.45}, '-=0.25');
    TLSORT2.to(`.tg${index}`, {opacity: 0, y: 100, duration: 0.45}, '-=0.55');
    TLSORT2.to(`.mt${index}`, {opacity: 0, y: 100, duration: 0.45}, '-=0.25');
    TLSORT2.to(`.btna${index}`, {opacity: 0, y: 100, duration: 0.45}, '-=0.35');
    TLSORT2.to(`.btnb${index}`, {opacity: 0, y: 100, duration: 0.45}, '-=0.35');
    TLSORT2.to(tableau, {duration: 1, ease: "power1.in", y: '+=100vh'}, '-=0.75');

    const TLENTRE2 = gsap.timeline();

    TLENTRE2.fromTo(`.t${index-1}`, {opacity:0, y: -100}, {opacity:1, y:0, duration: 0.45, delay: 0.75})
    TLENTRE2.fromTo(`.st${index-1}`, {opacity:0, y: -100}, {opacity:1, y:0, duration: 0.45}, '-=0.25')
    TLENTRE2.fromTo(`.mt${index-1}`, {opacity:0, y: -100}, {opacity:1, y:0, duration: 0.45}, '-=0.25')
    TLENTRE2.fromTo(`.btna${index-1}`, {opacity:0, y: -100}, {opacity:1, y:0, duration: 0.45}, '-=0.25')
    TLENTRE2.fromTo(`.btnb${index-1}`, {opacity:0, y: -100}, {opacity:1, y:0, duration: 0.45}, '-=0.25')
    TLENTRE.fromTo(`.tg${index-1}`, {opacity:0, y: -100}, {opacity:1, y:0, duration: 0.45}, '-=0.25')

}

btnDown.forEach(btn => {
    btn.addEventListener('click', () => {

        if(index === 3) {
            btn.classList.add('animBtn');
            setTimeout(() => {
            btn.classList.remove('animBtn')
            }, 500); 
        }

        if (index < 3) {

            btn.classList.add('animBtnGood');
            setTimeout(() => {
            btn.classList.remove('animBtnGood')
            }, 500); 
            
            downTableau();
            index++;
        }
    })
})

btnUp.forEach(btn => {
    btn.addEventListener('click', () => {

        if(index === 1){
            btn.classList.add('animBtn');
            setTimeout(() => {
            btn.classList.remove('animBtn')
            }, 500);
        }

        if (index > 1) {
            upTableau();
            index--;
        }
    })
})

