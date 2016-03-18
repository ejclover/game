$(document).ready(function(){
  
  
 //$("#health1").append(linkH);
 //$("#health").append(kirbyH);



var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");

context.font = "20px Georgia";
context.fillText("Hello World!", 10, 50);

context.font = "30px Verdana";
// Create gradient
var gradient = context.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop("0", "magenta");
gradient.addColorStop("0.5", "blue");
gradient.addColorStop("1.0", "red");
// Fill with gradient
context.fillStyle = gradient;
context.fillText("Big smile!", 10, 90);

canvas.width = 1000;
canvas.height = 600;
document.body.appendChild(canvas);

var kGroundHeight = 500;

/*var upKey = 38;
var downKey = 40;
var leftKey = 37;
var rightKey = 39;
*/


var render = function() {
  gravity();
  gravity1();
  
  touch1()
 touch();
 
// touchy();
  context.clearRect(0, 0, canvas.width, canvas.height);
  
    context.fillRect(0,kGroundHeight,canvas.width,10);

  context.drawImage(kirby, kirbyObject.x, kirbyObject.y);
  
    context.drawImage(link, linkObject.x, linkObject.y);

};




var main = function() {

  render();
  window.requestAnimationFrame(main);
};

main();
});


