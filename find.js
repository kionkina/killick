var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = Math.round(Math.random() * boxWidth);
var targetY = Math.round(Math.random() * boxHeight);

console.log(targetX);
console.log(targetY);

//console.log( "box height: " + boxHeight );
//console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    //    console.log(x1);
    //console.log(y1);
    deltaX = x0 - x1;
    deltaY = y0 - y1;
    var ret = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
    return ret;
};




var colors = function(e) {
    
    var dist = distance(targetX, targetY, e.x, e.y);
    console.log(e);
    console.log("BOUTA PRINT X N Y");
    console.log(e.x);
    console.log(e.y);
    console.log("DONE WIT X N Y");
    console.log("BOUTA PRINT clientX N clientY");
    console.log(e.clientX);
    console.log(e.clientY);
    //    console.log("GONNA CHANGE COLA");
    var body = document.getElementsByTagName("body");
    maxDist1 =  distance(targetX, targetY, 0, 0 );
    maxDist2 =  distance(targetX, targetY, 0, boxHeight );
    maxDist3 =  distance(targetX, targetY, boxWidth, 0 );
    maxDist4 =  distance(targetX, targetY, boxWidth, boxHeight );
    maxDist = Math.round(Math.max(maxDist1, maxDist2, maxDist3, maxDist4));
    //dist         x  
   //--------  = -------        x = (225*dist) / maxdist
    //maxdist     255               
    
    console.log("max Dist: " + String(maxDist));
    colorVal = 255 - Math.round((255*dist) / maxDist);
    console.log(colorVal);
    //bad:
    //box.setAttribute("style", "background-color: rgb(" + String(Math.round(dist)) + ", 104, 54)");
    //good:
    box.style.backgroundColor= "rgb(" + String(colorVal) + ",255 , 255)";
}


box.addEventListener("mousemove", colors);

