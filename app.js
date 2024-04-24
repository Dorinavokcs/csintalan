function render(){
    const table = document.querySelector(".table");
    table.innerHTML = "";
    for(let i = 0; i<9; i++){
        table.innerHTML +=`
        <div class="box box${i}"><div>`
    }
}
render();
