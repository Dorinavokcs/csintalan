function render() {
    const table = document.querySelector(".table");
    table.innerHTML = "";
    for (let i = 0; i < 9; i++) {
        table.innerHTML += `
        <div class="box box${i}"><div>`
    }
}
render();

const up = document.querySelector(".up");
const down = document.querySelector(".down");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

let sorszam = 0;
let kivalasztva = "./kepek1"
let lepesek = 0;
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