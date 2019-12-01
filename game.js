var scr=0,tmp1,tmp2,tmp=0;
var frX,frY;
function basket(x,y,a,b){
let c =  color(255,204,0)
fill(c);
stroke(51);
rect(x,y,a,b);

rect(x+a,y,a,b);
rect(x-a,y,a,b);

rect(x+(a*2),y,a,b);
rect(x-(a*2),y,a,b);

rect(x-(a*3),y-b,a,b);
rect(x+(a*3),y-b,a,b);
}
//fruit class and its functions for its appearance
class Fruit{
  //spawn function to spawn fruit
  spawn(){
    fval=true;
    tmp1=bw-250;
    if(tmp1<0)
    tmp1=0;
    tmp2=bw+250;
    if(tmp2>1250)
    tmp2=1250;
    frX=floor(random((tmp1),(tmp2)));
    frY=100;
    rect(frX,frY,15,15);
    rect(frX-15,frY,15,15);
    rect(frX+15,frY,15,15);
    rect(frX,frY+15,15,15);
    rect(frX,frY-15,15,15);
  }
  //drive function to drive the fruit
  drive(){
    frY+=spd;
    rect(frX,frY,15,15);
    rect(frX-15,frY,15,15);
    rect(frX+15,frY,15,15);
    rect(frX,frY+15,15,15);
    rect(frX,frY-15,15,15);
  }
  //check function to determine if the fruit is within basket
  check(){
    if(frY>=(bh-5) && (frX>=(bw-45) && frX<=(bw+45))){
      fval=false;
      scr=scr+1;
    }
    else if(frY>=(bh-5)){
      fval=false;
    }
    }
}
class Poison{
  //spawn function to spawn poison
  spawn(){
    fval=true;
    tmp1=bw-250;
    if(tmp1<0)
    tmp1=0;
    tmp2=bw+250;
    if(tmp2>1250)
    tmp2=1250;
    frX=floor(random((tmp1),(tmp2)));
    frY=100;
    fill(255,0,0);
    rect(frX,frY,15,15);
    rect(frX+15,frY+15,15,15);
    rect(frX-15,frY+15,15,15);
    rect(frX-15,frY-15,15,15);
    rect(frX-15,frY+15,15,15);
  }
  //drive function to drive the fruit
  drive(){
    frY+=spd;
    fill(255,0,0);
    rect(frX,frY,15,15);
    rect(frX+15,frY+15,15,15);
    rect(frX-15,frY+15,15,15);
    rect(frX-15,frY-15,15,15);
    rect(frX+15,frY-15,15,15);
  }
  //check function to check if the function is in the basket
  check(){
    if(frY>=(bh-5) && (frX>=(bw-45) && frX<=(bw+45))){
      fval=false;
      if(scr!=0){
      scr=scr-1;
      }
    }
    else if(frY>=(bh-5)){
      fval=false;
    }
    }
}

function score(){
  textStyle(BOLD);
  textSize(25);
  fill('purple');
  text('SCORE : ',600,50);
  text(scr,725,50);
  if(scr%5==0 && tmp!=scr){
    tmp=scr;
    spd+=2.5;
  }
  }
