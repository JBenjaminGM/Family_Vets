/*Funcion del Scroll hacia el header*/
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");/*Inicializamos la variable*/
    header.classList.toggle("abajo", this.window.scrollY>0);/*va añadir al header la funcion abajo*/
})