var context = $("canvas")[0].getContext("2d");
var lastEvent;

var colour = "black";

$(document).ready(function(){
  drawWhenMouseClicked();
  pickColour();
  $("slider").slider({
    orientation: "horizontal",
    max: 100,
    min: 0
  });
});

function drawWhenMouseClicked(){
  $("canvas").mousedown(function(e){
    mouseClicked(e)
  }).mousemove(function(e){
    mouseDrag(mouseDown, context, e)
  }).mouseup(function(){
    mouseDown = false;
  }).mouseleave(function(){
    $("canvas").mouseup();
  });
};

function mouseClicked(e){
  lastEvent = e;
  mouseDown = true;
};

function mouseDrag(mouseDown, context, e){
  if(mouseDown) {
    draw(context, e)
  }
};

function draw(context, e){
  context.beginPath();
  context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
  context.lineTo(e.offsetX, e.offsetY);
  context.strokeStyle = colour;
  context.lineWidth = 5;
  context.stroke();
  lastEvent = e;
};

function pickColour(){
  $("button").click(function(){
    colour = this.id
  });
};