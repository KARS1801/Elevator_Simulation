var c=document.getElementById("elevator");
var ctx=c.getContext("2d");
var img=document.getElementById("elevatorimg");
var y=0;




	
    
    ctx.drawImage(img,50,y,150,150);
    
   	var myVar=setInterval(move, 10)
	


function move()
{

	  if(down){
		y=y+1;}
      else if(up){
      y=y-1;}
   
    	ctx.clearRect(0, 0, c.width, c.height);
        ctx.drawImage(img,50,y,150,150);
        
        if(y<0||y>500)
        {
        clearInterval(myVar);
        }
}


function moveup(){
clearInterval(myVar);
up=true;
down=false;
myVar=setInterval(move, 10);
}

function movedown(){
clearInterval(myVar);
down=true;
up=false;
myVar=setInterval(move, 10);
}

function stop(){
clearInterval(myVar);
}

function start(){
myVar=setInterval(move, 10);
}
