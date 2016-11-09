// Pasos
// Agregar clase hidden a mi botón para que desaparezca
// saco hidden a mi panel para que aparezca

var boton = document.getElementById("agregar-tarea");
var tarjeta = document.getElementById("tarjeta-tarea");

boton.addEventListener("click", transformer);

function transformer() {
    boton.className = "btn btn-success hidden";
    tarjeta.className = "panel panel-default";
}

