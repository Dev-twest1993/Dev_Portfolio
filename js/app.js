let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
// let btn4 = document.querySelector("#btn4");

let arrow1 = document.querySelector("#arrow1");
let arrow2 = document.querySelector("#arrow2");
let arrow3 = document.querySelector("#arrow3");
let arrowZ = document.querySelector("#arrowZ");
// let arrow4 = document.querySelector("#arrow4");

arrow1.addEventListener('click', function(){
    btn1.click();
})

arrow2.addEventListener('click', function(){
    btn2.click();
})

arrow3.addEventListener('click', function(){
    btn3.click();
})

arrowZ.addEventListener('click', function(){
    btnZ.click();
})


// side nav bar
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const wrap = document.querySelectorAll('.wrap');


openBtn.addEventListener('click', function(){
    for (let x = 0; x < wrap.length; x++){
        wrap[x].classList.add('visible');
    }
})

closeBtn.addEventListener('click', function(){
    for (let x = 0; x < wrap.length; x++){
        wrap[x].classList.remove('visible');
    }
})

//wrap toggles
let btns = document.querySelectorAll('.wrap-toggle');
let wraps = document.querySelectorAll('.wrapt');

for(let x = 0; x<btns.length; x++){
    btns[x].addEventListener('click', function(){
        wraps[x].classList.toggle('active')
    })
}