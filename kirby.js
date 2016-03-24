 var kGroundHeight = 500;


var keys = {};




$(document).keydown(function(e) {
    console.log(e);
    
touch1(e.keyCode);
 
   move(e.keyCode);
   
  
    if (keys[38] && keys[37]) {
       kirbyObject.y -=50;
       kirbyObject.x -=50;
      
        
    }else if(keys[38] && keys[39]){
      
      kirbyObject.y -=50;
      kirbyObject.x +=50;
      
      
    }else if(keys[40] && keys[39]){
      
      kirbyObject.y +=50;
      kirbyObject.x +=50;
      
      
    }else if(keys[40] && keys[37]){
      
      kirbyObject.y +=50;
      kirbyObject.x -=50;
    }
      
    keys[e.keyCode] = true;
}).keyup(function(e) {
  
   keys[e.keyCode] = false;
      
    
   
});



var kirbyReady = false;
var kirby = new Image();
kirby.onLoad = function() {
  kirbyReady = true;
};

kirbyObject = {};
kirby.src = "https://vignette3.wikia.nocookie.net/spritechronicles/images/5/5c/Kirby.png/revision/latest?cb=20101010225540";




kirbyObject.x = 300;
kirbyObject.y = 100;



var upKey = 38;
var downKey = 40;
var leftKey = 37;
var rightKey = 39;
var attackKey = 90; 
var kirbyH = 100;



var move = function(key) {
    
   
  
  if (key == upKey) {
    kirbyObject.y -= 50;
  }else if(key == downKey){
    
      var kGroundHeight = 500;

     if(kirbyObject.y + kirby.height ==  kGroundHeight){
      
      kirbyObject.y +=0;
    }else{
      
      kirbyObject.y +=50;
      
    }
    
   
    //console.log("down");
        console.log(kirbyObject.y);

    
  }else if(key == leftKey){
    
    kirbyObject.x -=50;
  }else if(key == rightKey ){
    
    kirbyObject.x +=50;
  }
  // MORE DIRECTIONS!!!
};




var gravity = function() {
	var kGravityScale = 1;
  var kGroundHeight = 500;
  
  if (kirbyObject.y + kirby.height ==  kGroundHeight) {
    
  	kirbyObject.y += 0;
    
  }else{
      	kirbyObject.y += kGravityScale;

  }
};



var touch1 = function(a){
  
  //console.log(kirbyObject.x - linkObject.x);
// console.log(kirbyObject.y - linkObject.y);
 //console.log(linkObject.x);
 //console.log(linkObject.y);
  
  
  if(kirbyObject.x - linkObject.x >= -150 && kirbyObject.x - linkObject.x <= 150 && kirbyObject.y - linkObject.y >= -200 && kirbyObject.y - linkObject.y <= 150 && a== attackKey ){
    
   if(linkH<=0){
      $("#L").empty(linkH);
     $("#L").append(linkH);
      $("#win").empty();
     $("#win").append("KIRBY WINS");
   
   return;
   
   }
   
    kirby.src = "http://orig08.deviantart.net/e643/f/2015/089/5/9/8_bit_kirby_tribute_by_jcgraphic-d8nsqyq.png";
   kirby.height = 200;
   kirby.width = 200;
   
   setTimeout(function(){ kirby.src ="https://vignette3.wikia.nocookie.net/spritechronicles/images/5/5c/Kirby.png/revision/latest?cb=20101010225540"; }, 200);
   
   linkH =linkH-10;
     $("#L").empty(linkH);
     $("#L").append(linkH);
    
    
    
  }
  
  
};



