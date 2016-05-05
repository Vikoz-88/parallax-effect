
document.body.onmousemove = function(e){
	e =e || event;
	var widthBody = document.body.offsetWidth;// или на body
	var cursorX = e.clientX;
	var proc = (cursorX * 100) / widthBody;
	for(var i = 1; i<=5; i++){
		document.getElementById("pic"+i).style.backgroundPosition = proc+"% 0"
	}
}