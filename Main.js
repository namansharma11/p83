var mouseEvent= "";
var canvas= document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");
var color= document.getElementById("color");
var width= document.getElementById("width");

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
  color= document.getElementById("color").value;
  width= document.getElementById("width").value;
  mouseEvent= "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
  mouseEvent= "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
  mouseEvent= "mouseleave";
}

canvas.addEventLister("touchmove", my_touchmove);
function my_touchmove(e) {
  var currenttouchX= e.touches[0].clientX - canvas.offsetLeft;
  var currenttouchY= e.touches[0].clientY - canvas.offsetTop;
  ctx.beginPath();
  ctx.strokeStyle= color;
  ctx.lineWidth= width;
  ctx.moveTo(lasttouchX, lasttouchY);
  ctx.lineTo(currenttouchX, currenttouchY);
  ctx.stroke;
  lasttouchX= currenttouchX;
  lasttouchY= currenttouchY;
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
  mouseEvent= "mousemove";
  var currentX= e.clientX - canvas.offsetLeft;
  var currentY= e.clientY - canvas.offsetTop;
  
  if (mouseEvent == "mousedown") {
    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth= width;
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();
  }
  lastX= currentX;
  lastY= currentY;
}