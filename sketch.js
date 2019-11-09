var bw=650,bh=500,vx=1;
var canw=1350,canh=550;
var fruit,fval=false,som,spd=5;
function setup(){
createCanvas(canw,canh);
fruit = new Fruit();
poison = new Poison();
}
function draw(){
  frameRate(20);
  background(51);
  basket(bw,bh,15,15);
  if(!fval){
  if(floor(random(2))){
  fruit.spawn();
  som=true;
  }
  else {
     poison.spawn();
     som=false;
  }}
  if(vx==1){
  if(bw<(canw-60))
  bw=bw+spd;
  }
  else if(vx==-1){
  if(bw>45)
  bw=bw-spd;
  }
  if(som){
  fruit.drive();
  fruit.check();
  }
  else {
    poison.drive();
    poison.check();
  }
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
