window.addEventListener("load", init);
 
var todos = [];
 
window.addEventListener("load", init);
 
var todos = [];

function form(li)
{
	//creamos un formulario
	var todo = document.createElement("a");
	//href
    todo.href = "#";
    //añadimos varias clases
    todo.classList.add("pull-right");
    //añadimos el evento click para que sea eliminado
    todo.onclick = function() 
    { 
        var toDelete = document.querySelector('#todo'+li.index);
		toDelete.parentNode.removeChild(toDelete);
    };
    //devolvemos el nuevo elemento
    
    var i = document.createElement("i");
	i.className = 'fa fa-trash fa-2x'; 

	todo.appendChild(i);

    return todo;
}

 <input type="text" id="texto" />
var valor = document.getElementById("texto").value;
 
<textarea id="parrafo"></textarea>
var valor = document.getElementById("parrafo").value;