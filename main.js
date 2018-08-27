var c=document.getElementById("elevator");
var ctx=c.getContext("2d");
var img=document.getElementById("elevatorimg");
var y=0;
var up=false;
var down=false;
var dest_y;

var fps = 1000;

var reqanimationreference

c.height=window.innerHeight;
c.width=window.innerWidth/2;

var imgwidth=c.width/3;
var imgheight=c.height/4;


ctx.drawImage(img,c.width/3,y,imgwidth,imgheight);


ctx.moveTo(0,c.height/4);
ctx.lineTo(c.width,c.height/4);
ctx.stroke();

ctx.moveTo(0,c.height/2);
ctx.lineTo(c.width,c.height/2);
ctx.stroke();

ctx.moveTo(0,c.height*3/4);
ctx.lineTo(c.width,c.height*3/4);
ctx.stroke();


   
  

  


	



function move() {
    setTimeout(function() {
        reqanimationreference=requestAnimationFrame(move);
 
        // ... Code for Drawing the Frame ...
       
        if(down){
        y=y+1;}
          else if(up){
          y=y-1;}

   
       ctx.clearRect(0, 0, c.width, c.height);


        ctx.moveTo(0,c.height/4);
        ctx.lineTo(c.width,c.height/4);
        ctx.stroke();

        ctx.moveTo(0,c.height/2);
        ctx.lineTo(c.width,c.height/2);
        ctx.stroke();

        ctx.moveTo(0,c.height*3/4);
        ctx.lineTo(c.width,c.height*3/4);
        ctx.stroke();




        ctx.drawImage(img,c.width/3,y,imgwidth,imgheight);
        
if(y<0||y>(c.height-imgheight))
        {
          console.log(y);
          console.log(dest_y);
          cancelAnimationFrame(reqanimationreference);
          return true;
        }

        if(y==dest_y)
        {
          cancelAnimationFrame(reqanimationreference);
          return true;
        }
 
    }, 1000 / fps);
}



