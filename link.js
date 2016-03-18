var linkReady = false;
var link = new Image();
link.onLoad = function() {
  
  linkReady = true;
};


linkObject = {};
link.src= "https://vignette1.wikia.nocookie.net/zelda/images/1/18/Link_(Sprite)_The_Legend_of_Zelda.png/revision/latest?cb=20130117162823";

linkObject.x = 200;
linkObject.y = 200;






var keys = {};



$(document).keydown(function(e) {
    //console.log(e);
    touch(e.keyCode);
   move1(e.keyCode);

 
    if (keys[87] && keys[65]) {
       linkObject.y -=50;
       linkObject.x -=50;
      
        
    }else if(keys[87] && keys[68]){
      
      linkObject.y -=50;
      linkObject.x +=50;
      
      
    }else if(keys[83] && keys[68]){
      
      linkObject.y +=50;
      linkObject.x +=50;
      
      
    }else if(keys[83] && keys[65]){
      
      linkObject.y +=50;
      linkObject.x -=50;
    }
      
    keys[e.keyCode] = true;
}).keyup(function(e) {
  
   keys[e.keyCode] = false;
      
    
   
});

var upKey1 = 87;
var downKey1 = 83;
var leftKey1 = 65;
var rightKey1 = 68;
var attackKey1 = 75; 
var linkH = 100;



var move1 = function(key) {
  
  if (key == upKey1) {
    linkObject.y -= 50;
  }else if(key == downKey1){
    
      var kGroundHeight = 500;

     if(linkObject.y + link.height ==  kGroundHeight){
      
      linkObject.y +=0;
    }else{
      
      linkObject.y +=50;
      
    }
    
   
    //console.log("down");
        console.log(linkObject.y);

    
  }else if(key == leftKey1){
    
    linkObject.x -=50;
  }else if(key == rightKey1 ){
    
    linkObject.x +=50;
  }
  // MORE DIRECTIONS!!!
};




var gravity1 = function() {
	var kGravityScale = 1;
  var kGroundHeight = 500;
  
  if (linkObject.y + link.height >=  kGroundHeight) {
    
  	linkObject.y += 0;
    
  }else{
      	linkObject.y += kGravityScale;
//console.log(link.width);
  }
};

var touch = function(a){
  
  //console.log(kirbyObject.x - linkObject.x);
// console.log(kirbyObject.y - linkObject.y);
 //console.log(linkObject.x);
 //console.log(linkObject.y);
  
  
  if(kirbyObject.x - linkObject.x >= -150 && kirbyObject.x - linkObject.x <= 150 && kirbyObject.y - linkObject.y >= -200 && kirbyObject.y - linkObject.y <= 150 && a== attackKey1 ){
    
   kirbyH = kirbyH-10;
     $("#K").empty(kirbyH);
     $("#K").append(kirbyH);
    
    console.log(linkH);
    
  }
  
  
};
/*
var touchy = function(){
  
  if(kirbyObject.y - linkObject.y >= -200 && kirbyObject.y - linkObject.y <= 150 ){
    
    
  console.log("TOUCH Y");
  
    
  }
  
  
  
};


*/
