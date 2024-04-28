function render(){
    const table = document.querySelector(".table");
    table.innerHTML = "";
    for(let i = 0; i<9; i++){
        table.innerHTML +=`
        <div class="box box${i}"><div>`
    }
}
render();

const time=document.getElementById("time");


let kivalasztva="./kepek1"
let kijelolt=0

let ido = 0;
let idoMero=0;

let images=['Red_X.svg.png','row-1-column-2.png','row-1-column-3.png','row-2-column-1.png','row-2-column-2.png','row-2-column-3.png','row-3-column-1.png','row-3-column-2.png','row-3-column-3.png'] ;

let correctimages=['Red_X.svg.png','row-1-column-2.png','row-1-column-3.png','row-2-column-1.png','row-2-column-2.png','row-2-column-3.png','row-3-column-1.png','row-3-column-2.png','row-3-column-3.png'] ;

shuffle(images)

if(location.search.length>1){
kivalasztva=`./${location.search.substring(1)}`;

}

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

    
    time.textContent = `Your Time ${ido} second(s)`;},1000)

function kirajzol(){
for(let i=0;i<images.length;i++){
if(images[i]=="Red_X.svg.png"){

    $(`.box${i}`)[0].style.backgroundImage="None";
}
else{
$(`.box${i}`)[0].style.backgroundImage=`url("${kivalasztva}/PineTools.com_files/${images[i]}")`;
}
$(".box").removeClass("kijelolt")
document.querySelectorAll(".box")[kijelolt].classList.add("kijelolt")
}}

kirajzol();



function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }


  $(".box").on("click", event=>
  {
kijelolt=[...document.querySelectorAll(".box")].indexOf(event.target)
kirajzol()
  })


function tolas(hova){
if(hova>=0 && hova<9 && images[hova]=="Red_X.svg.png"){
let temp=images[kijelolt]
images[kijelolt]=images[hova]
images[hova]=temp
kijelolt=hova
kirajzol()
$("#hang")[0].currentTime=0
$("#hang")[0].play()
}}
$(".left").on("click", event=>{tolas(kijelolt-1)})
$(".right").on("click", event=>{tolas(kijelolt+1)})
$(".up").on("click", event=>{tolas(kijelolt-3)})
$(".down").on("click", event=>{tolas(kijelolt+3)})


function gyozelem(){
    let nyert=true

    for(let i=0;i<images.length;i++){
    if(images[i] !=correctimages[i])
    
    {
        nyert=false

    }
    
    }
    if(nyert){clearInterval(idoMero);alert("You have won the game!")}
    
}