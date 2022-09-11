let posicion=1;
function anade() {
     let elemento = document.createElement("li");
     let texto = document.createTextNode("Elemento Añadido "+ posicion);
     elemento.appendChild(texto);
     posicion=posicion+1;
     document.getElementById("lista").appendChild(elemento);
    }

    function init() {
        document.getElementById("button").addEventListener("click", addItem);
    }

    window.addEventListener("load",init);