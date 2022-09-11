var img = document.getElementById('cat');

anchoVentana = window.innerWidth;  

var pxMovimiento = 10;

function catwalk(){
	if (parseInt(img.style.left) > anchoVentana ) {		
		pxMovimiento = pxMovimiento * -1		
	}

	if (parseInt(img.style.left) < 0 ) {		
		pxMovimiento = pxMovimiento * -1		
	}

	var left = parseInt(img.style.left);
	left = left + pxMovimiento;
	img.style.left = String(left) + "px";
}

window.setInterval(catwalk,50);