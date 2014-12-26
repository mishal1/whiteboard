var context = $("canvas")[0].getContext("2d");
var lastEvent;

$(document).ready(function(){
  drawWhenMouseClicked()
});

function drawWhenMouseClicked(){
  $("canvas").mousedown(function(e){
    lastEvent = e;
    mouseDown = true;
  }).mousemove(function(e){
  if(mouseDown) {
    draw(context, e)
  }
  }).mouseup(function(){
    mouseDown = false;
  }).mouseleave(function(){
    $("canvas").mouseup();
  });
};

function draw(context, e){
  context.beginPath();
  context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
  context.lineTo(e.offsetX, e.offsetY);
  context.strokeStyle = "black";
  context.stroke();
  lastEvent = e;
};