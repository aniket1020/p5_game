
var scr=0;
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
class Fruit{
  spawn(){
    fval=1;
    frX=floor(random((bw-350),(bw+350)));
    frY=100;
    rect(frX,frY,15,15);
  }
  drive(){
    frY+=5;
    rect(frX,frY,15,15);
  }
  check(){
    if(frY==(bh-5) && (frX>=(bw-45) && frX<=(bw+45))){
      fval=0;
      scr=scr+1;
    }
    else if(frY==(bh-5)){
      fval=0;
    }
    }
}

function score(){
  textStyle(BOLD);
  textSize(25);
  fill('#0f0');
  text('SCORE : ',600,50);
  text(scr,725,50);
  }
