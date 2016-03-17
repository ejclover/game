$(document).ready(function(){
  
  
 $("#health1").append(linkH);
 $("#health").append(kirbyH);



var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
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
  //gravity();
  //gravity1();
  
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


