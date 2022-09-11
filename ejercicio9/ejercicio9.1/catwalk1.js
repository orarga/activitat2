const cat = document.getElementById('cat');

function catWalk(){
    cat.style.left = parseInt(cat.style.left) + 10 + "px";
}

window.setInterval(catWalk,50);