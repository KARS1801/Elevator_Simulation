var current_floor=4;



//returns the floor no. from the value of y

function get_the_floor(y)
{
	if(y==0)
		{return 4;}
	else if(y==Math.round(c.height/4))
		{return 3;}
	else if(y==Math.round(c.height/2))
		{return 2;}
	else if(y==Math.round(c.height*3/4))
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
	move_to_floor(2);
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
	var dest_y;
	if(difference>0)
	{		
		 dest_y=get_y(dfloor);
		 moveup(dest_y);
	}
	else if(difference<0)
	{	
		 dest_y=get_y(dfloor);	
		 movedown(dest_y);
	}
	
	
	//current_floor=dfloor;
	
}


