/*ventana de inicio*/
var close = document.getElementById("close");
var modal = document.getElementById("myModal");

close.onclick = function () {
    modal.style.display = "none";
    document.body.style.overflow = "auto";/*habilita el moviento de la pagina de fondo*/
}

window.onload = function () {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    document.body.style.overflow = "hidden";/*deshabilita el moviento de la pagina de fondo*/
}

/*ventana de manteniento */
var manteniento = document.getElementById("mante");


function abrirMante(){
    mante.style.display= "block";
}

function cerrarMante(){
    mante.style.display = "none";
}
