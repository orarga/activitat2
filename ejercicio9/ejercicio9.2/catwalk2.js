const cat = document.getElementById('cat');

function catWalk(){
    cat.style.left = parseInt(cat.style.left) + 10 + "px";

    const distanciaMovimiento = parseInt(cat.style.left);
    const anchoVentana = window.innerWidth;

    if(distanciaMovimiento > anchoVentana){
    	cat.style.left = "0px";
    }
}

window.setInterval(catWalk,50);