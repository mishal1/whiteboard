var socket = io.connect('/');
var context = $("canvas")[0].getContext("2d");
var lastEvent;
var width = 4
var colour = "black";


socket.on('loop', function(){
  console.log("looping!");
});

$("canvas").mousedown(function(e){
  mouseClicked(e)
}).mousemove(function(e){
  mouseDrag(mouseDown, context, e)
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $("canvas").mouseup();
});

function mouseClicked(e){
  lastEvent = e;
  mouseDown = true;
};

function mouseDrag(mouseDown, context, e){
  if(mouseDown) {
    socket.emit('drawing')
    draw(context, e)
  }
};

function draw(context, e){
  context.beginPath();
  context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
  context.lineTo(e.offsetX, e.offsetY);
  context.strokeStyle = colour;
  context.lineWidth = width;
  context.lineJoin = 'round';
  context.lineCap = 'round';
  context.stroke();
  lastEvent = e;
};

$("button").click(function(){
  colour = this.id
});

$("#line").click(function(){
  var number = parseInt(this.innerText);
  number +=1
  this.innerText = number
  if(number === 6){
    this.innerText = 1
  }
  width +=4
  if(width === 24){
    width = 4
  }
});
