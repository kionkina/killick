var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    // console.log(x1);
    // console.log(y1);
    deltaX = x0 - x1;
    deltaY = y0 - y1;
    var ret = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
    console.log("DISTANCE:" );
    console.log(ret);
    return ret;
};


var findIt = function(e) {
    distToTarget = distance(targetX, targetY, e.clientX, e.clientY);
    console.log(distToTarget);
};



/*
your OTHER FXNS

*/

box.addEventListener("click", findIt);

