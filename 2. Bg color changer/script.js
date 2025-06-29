const body = document.querySelector('body');
const btns = document.querySelectorAll('.btn')

//! Simple version

// const redColor = document.querySelector('.red');
// const blueColor = document.querySelector('.blue')
// const greenColor = document.querySelector('.green')
// const yellowColor = document.querySelector('.yellow')
// const blackColor = document.querySelector('.black')

// const changeColor = (color) => {
//     return body.style.backgroundColor =  color;
// }

// redColor.addEventListener('click', () => {
//     changeColor('red');
// })

// blueColor.addEventListener('click', () => {
//     changeColor('blue');
// });

// greenColor.addEventListener('click', () => {
//     changeColor('green');
// });

// yellowColor.addEventListener('click', () => {
//     changeColor('yellow');
// });

// blackColor.addEventListener('click', () => {
//     changeColor('black');
// });

//! optimize using loop

// btns.forEach(btn => {

//     btn.addEventListener('click', ()=> {
//         const colorClass = [...btn.classList].find(cls => cls !== 'btn')
//         body.style.backgroundColor = colorClass;
//     })
// })

//! 3rd method

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const color = btn.getAttribute('data-color');
        body.style.backgroundColor = color;
    })
})