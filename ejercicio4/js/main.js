
let hidden = true;

function toggleText()
{

    const myText = document.getElementById("myText");
    myText.classList.toggle("hidden");

    const myText2 = document.getElementById("myText2");
    
    if (hidden) {
        myText2.innerHTML = "Ver Resumen"

    } else {
        myText2.innerHTML = "Seguir leyendo"
    }

    hidden = !hidden;
}




