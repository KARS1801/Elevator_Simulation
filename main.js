var c=document.getElementById("elevator");
var ctx=c.getContext("2d");
var img=document.getElementById("elevatorimg");
var y=0;
//var up=false;
//var down=false;
//var dest_y;

var fps = 1000;

//var reqanimationreference

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


   
  

  


	



function movedown(dest_y) {
    setTimeout(function() {
        //reqanimationreference=requestAnimationFrame(move(this.up,this.down));
        var reqanimationreference=window.requestAnimationFrame(function() {
        movedown(dest_y);
    });
 
        // ... Code for Drawing the Frame ...
       

        y=y+1;
         
   
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

          window.cancelAnimationFrame(reqanimationreference);
          return;
        }

        if(y==dest_y)
        {

          window.cancelAnimationFrame(reqanimationreference);
          current_floor=get_the_floor(y);
          return;
        }

 
    }, 1000 / fps);
    
console.log("hi up");
}



function moveup(dest_y) {
    setTimeout(function() {
        //reqanimationreference=requestAnimationFrame(move(this.up,this.down));
        var reqanimationreference=window.requestAnimationFrame(function() {
        moveup(dest_y);
    });
 
        // ... Code for Drawing the Frame ...
       

        y=y-1;
         
   
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

          window.cancelAnimationFrame(reqanimationreference);
          return;
        }

        if(y==dest_y)
        {

          window.cancelAnimationFrame(reqanimationreference);
          current_floor=get_the_floor(y);
          return;
        }

 
    }, 1000 / fps);
    
console.log("hi down");
}



