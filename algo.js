var current_floor=4;
var destination_floor;


//returns the floor no. from the value of y

function get_the_floor(y)
{
	if(y==0)
		{return 4;}
	else if(y==c.height/4)
		{return 3;}
	else if(y==c.height/2)
		{return 2;}
	else if(y==c.height*3/4)
		{return 1;}
}


//returns th value of y from the floor no.
 
function get_y(floor)
{
	if(floor==4)
		{return 0;}
	else if(floor==3)
		{return Math.round(c.height/4);}
	else if(floor==2)
		{return Math.round(c.height/2);}
	else if(floor==1)
		{return Math.round(c.height*3/4);}
}

//functions for 1/2/3/4 lift buttons pressed

function one_pressed()
{
  	document.getElementById("one").style.backgroundColor="red";
}

function two_pressed()
{
	document.getElementById("two").style.backgroundColor="red";
}

function three_pressed()
{
	document.getElementById("three").style.backgroundColor="red";
}

function four_pressed()
{
	document.getElementById("four").style.backgroundColor="red";
}



//functions for up nad down buttons

function movedown4()
{
	document.getElementById("md4").style.backgroundColor="red";
	move_to_floor(4);
}

function movedown3()
{
	document.getElementById("md3").style.backgroundColor="red";
	move_to_floor(3);
}

function movedown2()
{
	document.getElementById("md2").style.backgroundColor="red";
	var reset=move_to_floor(2);
	if(reset)
	{
		document.getElementById("md2").style.backgroundColor="#337ab7";
		reset=false;
	}
}

function moveup1()
{
	document.getElementById("mu1").style.backgroundColor="red";
	move_to_floor(1);
}

function moveup2()
{
	document.getElementById("mu2").style.backgroundColor="red";
	move_to_floor(2);
}

function moveup3()
{
	document.getElementById("mu3").style.backgroundColor="red";
	move_to_floor(3);
}


//function to move the lift from current_floor to destination_floor

function move_to_floor(dfloor)
{

	var difference=dfloor-current_floor;

	if(difference>0)
	{		
		 up=true;
		 down=false;
	}
	else if(difference<0)
	{		
		 down=true;
		 up=false;
	}
	else
	{		
		 down=false;
		 up=false;
	}
	
	 dest_y=get_y(dfloor);
	
	move();
	
	current_floor=dfloor;
	return true;
	
}


/*
cancelAnimationFrame(reqanimationreference)

function movediv(timestamp){
    leftpos += 5
    adiv.style.left = leftpos + 'px'
    requestAnimationFrame(movediv) // call requestAnimationFrame again to animate next frame
}
requestAnimationFrame(movediv)

*/