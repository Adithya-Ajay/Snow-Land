var drop,rain = [],bg;
function setup() {
  createCanvas(windowWidth,windowHeight);
 
  for(var i =0;i<200;i= i+1){
    drop = new Drop (random(0,width),random(0,height),random(20,30))
    rain.push(drop)

  }

}

 

function draw() {
  background(bg);  
 
  for(var i = 0 ; i<rain.length;i = i+1){
    rain[i].show()
   rain[i].fall()
    


  }
}
function preload(){
  bg = loadImage ("bg1.jpg")

}