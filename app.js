function render(){
    const table = document.querySelector(".table");
    table.innerHTML = "";
    for(let i = 0; i<9; i++){
        table.innerHTML +=`
        <div class="box box${i}"><div>`
    }
}
render();

const up = document.querySelector(".up");
const down = document.querySelector(".down");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

let sorszam=0;
let kivalasztva="./kepek1"
let lepesek=0;

let ido = 0;
let idoMero=0;
let kattintas=0;

let images=['Red_X.svg.png','row-1-column-2.png','row-1-column-3.png','row-2-column-1.png','row-2-column-2.png','row-2-column-3.png','row-3-column-1.png','row-3-column-2.png','row-3-column-3.png'] ;

let correctimages=['Red_X.svg.png','row-1-column-2.png','row-1-column-3.png','row-2-column-1.png','row-2-column-2.png','row-2-column-3.png','row-3-column-1.png','row-3-column-2.png','row-3-column-3.png'] ;


$('.toggle').click(function() {
    "use strict";
    $('nav ul').slideToggle();
});



$(window).resize(function() {
    "use strict";
    if ($(window).width() > 780) {
        $('nav ul').removeAttr('style');
    }
});



 idoMero = setInterval(function() {
 
    ido++;

    
    time.textContent = `Your Time ${ido} second(s)`;})