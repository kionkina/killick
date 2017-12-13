var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;


//console.log( "box height: " + boxHeight );
//console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    console.log(x1);
    console.log(y1);
    deltaX = x0 - x1;
    deltaY = y0 - y1;
    var ret = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
    return ret;
};




var colors = function(e) {
    
    var dist = distance(targetX, targetY, e.clientX, e.clientY);
    //    console.log("GONNA CHANGE COLA");
    var body = document.getElementsByTagName("body");
    maxDist =  distance(targetX, boxHeight, 0, e.clientY);
    
    //dist         x  
   //--------  = -------        x = (100*dist) / maxdist
    //maxdist     100               
    

    colorVal = 225 - Math.round((225*dist) / maxDist);
    console.log(colorVal);
    //bad:
    //box.setAttribute("style", "background-color: rgb(" + String(Math.round(dist)) + ", 104, 54)");
    //good:
    box.style.backgroundColor= "rgb(" + String(colorVal) + ", 225, 225)";
}


box.addEventListener("mousemove", colors);

