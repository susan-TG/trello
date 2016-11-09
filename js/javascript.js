// Pasos
// Agregar clase hidden a mi botón para que desaparezca
// Saco hidden a mi panel para que aparezca

var boton = document.getElementById("agregar-tarea");
var tarjeta = document.getElementById("tarjeta-tarea");

// detecta un click en la variable boton y ejecuta la funcion transformer
boton.addEventListener("click", transformer);

function transformer() {
    boton.className = "btn btn-success hidden";
    tarjeta.className = "panel panel-default";
}

// agregar las listas de tareas a la tarjeta

// Pasos
// Obtener el valor del input
// Crear un elemento button dentro dl div .list-group con la clase list-group-item

var btnLista = document.getElementById("lista-nueva");

//detecta un click en la variable btnLista y ejecuta la funcion listaTarea
btnLista.addEventListener("click", listaTarea);

function listaTarea() {
    var valor = document.getElementById("disabledTextInput").value;
    var btn = document.createElement("button");
    var texto = document.createTextNode(valor);

    btn.type = "button";
    btn.className = "list-group-item";
    btn.appendChild(texto);

    document.getElementById("lista").appendChild(btn);

}
