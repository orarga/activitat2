let hidden1 = true;
let hidden2 = true;
let hidden3 = true;

function toggleText1()
{

    const myText = document.getElementById("myText");
    myText.classList.toggle("hidden");

    const myText2 = document.getElementById("myText2");
    
    if (hidden1) {
        myText2.innerHTML = "Mostrar"

    } else {
        myText2.innerHTML = "Ocultar"
    }

    hidden1 = !hidden1;
}

function toggleText2()
{

    const myText3 = document.getElementById("myText3");
    myText3.classList.toggle("hidden");

    const myText4 = document.getElementById("myText4");
    
    if (hidden2) {
        myText4.innerHTML = "Mostar"

    } else {
        myText4.innerHTML = "Ocultar"
    }

    hidden2 = !hidden2;
}

function toggleText3()
{

    const myText5 = document.getElementById("myText5");
    myText5.classList.toggle("hidden");

    const myText6 = document.getElementById("myText6");
    
    if (hidden3) {
        myText6.innerHTML = "Mostrar"

    } else {
        myText6.innerHTML = "Ocultar"
    }

    hidden3 = !hidden3;
}