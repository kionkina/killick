//change to true to enable debug statements.
var debug = false; 

//if you wanna cheat with the console ;)
//to be honest, not the most useful way to cheat...
var cheatCodes = false;

//change to true to squelch alert messages
var suppressAlert = false;

var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

var winningDist = 25;

var targetX = Math.round(Math.random() * boxWidth);
var targetY = Math.round(Math.random() * boxHeight);

if (debug || cheatCodes){
    console.log("Target at: " + String(targetX) + ", " + String(targetY));
}

if(debug){
    console.log( "box height: " + boxHeight );
    console.log( "box width: " + boxWidth );
}

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    if(debug){
	console.log("running distance with mouse at (x,y):");
	console.log(x1);
	console.log(y1);
    }
    
    deltaX = x0 - x1;
    deltaY = y0 - y1;
    var ret = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
    if(debug)
	console.log("distance to mouse from target is " + String(ret));
    return ret;
};

var colors = function(e) {
    
    var dist = distance(targetX, targetY, e.x, e.y);
    if(debug){
	console.log(e);
	console.log("ABOUTTA PRINT X N Y");
	console.log(e.x);
	console.log(e.y);
	console.log("DONE WIT X N Y");
	console.log("ABOUTTA PRINT clientX N clientY");
	console.log(e.clientX);
	console.log(e.clientY);
	console.log("GONNA CHANGE COLOR");
    }
	      
    var body = document.getElementsByTagName("body");
    maxDist1 =  distance(targetX, targetY, 0, 0 );
    maxDist2 =  distance(targetX, targetY, 0, boxHeight );
    maxDist3 =  distance(targetX, targetY, boxWidth, 0 );
    maxDist4 =  distance(targetX, targetY, boxWidth, boxHeight );
    maxDist = Math.round(Math.max(maxDist1, maxDist2, maxDist3, maxDist4));
    //  dist         x  
    //--------- = -------  ==>  x = (225*dist) / maxdist
    // maxdist      255               

    colorVal = 255 - Math.round((255*dist) / maxDist);
    
    box.style.backgroundColor= "rgb(" + String(colorVal) + ",255 , 255)";

    if(debug){
	console.log("max Dist: " + String(maxDist));	
	console.log("color value: " + String(colorVal));
    }
}

var finding = function(e){
    if (distance(targetX, targetY, e.x, e.y) < winningDist){
	if(debug)
	    console.log("yea");
	if(cheatCodes){
	    console.log("You are on the target");
	}
	if (! suppressAlert)
	    alert("Found it!");
    } else {
	if(cheatCodes){
	    console.log("You are at: " + String(e.x) + ", " + String(e.y));
	    console.log("Move to :   " + String(targetX) + ", " + String(targetY));
	}
	if(debug)
	    console.log("nay");
	if(!suppressAlert)
	    alert("Keep Trying...");
    }
}

box.addEventListener("mousemove", colors);
box.addEventListener("click", finding);

