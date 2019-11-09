var bw=650,bh=500,vx=1;
var canw=1350,canh=550;
var fruit,fval=0;
function setup(){
createCanvas(canw,canh);
fruit = new Fruit();
}
function draw(){
  frameRate(20);
  background(51);
  basket(bw,bh,15,15);
  if(fval==0){
  fruit.spawn();
  }
  if(vx==1){
  if(bw<(canw-60))
  bw=bw+5;
  }
  else if(vx==-1){
  if(bw>45)
  bw=bw-5;
  }
  fruit.drive();
  fruit.check();
  score();
}
function keyPressed(){
  if(keyCode == LEFT_ARROW){
  vx=-1;
  }
  else if(keyCode == RIGHT_ARROW){
    vx=1;
  }
}
