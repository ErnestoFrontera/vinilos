// Seleccionamos el modal
var modal = document.getElementById("modal");

// Seleccionamos el boton
var abrir = document.getElementById("boton-modal");
var menu = document.getElementById("btnburguer");


// Seleccionamos el boton de cerrar
var close = document.getElementsByClassName("close")[0];

// Seleccionamos el overlay
var overlay = document.getElementById("overlay");

// Abrimos el modal al hacer click
abrir.onclick = function() {
  modal.style.display = "block";
  overlay.style.display = "block";
  console.log ('abrimos modal');
}

// Cerramos el modal si hace click en close
close.onclick = function() {
  modal.style.display = "none";
  overlay.style.display = "none";
  console.log ('cerramos modal con el span');
  console.log(event.target.id);
}

// Cerramos el modal si hace click en el overlay
overlay.onclick = function() {
  modal.style.display = "none";
  overlay.style.display = "none";
  console.log ('cerramos modal con el overlay');
}
  
// Abrimos o cerramos el menu
menu.onclick = function(){
    var estado = document.getElementsByClassName("menu")[0];
    if(estado.classList.contains("active")){
        estado.classList.remove("active");
    }else{
        estado.classList.add("active");
    }
}