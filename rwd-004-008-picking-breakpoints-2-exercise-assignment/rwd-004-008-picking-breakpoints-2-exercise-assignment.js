var basePath = '"https://reading-area-community-college.github.io/RWD/rwd-004-008-picking-breakpoints-2-exercise-assignment/';
var element = document.createElement(basePath+'rwd-004-008-picking-breakpoints-2-exercise-assignment.css');
element.setAttribute("rel", "stylesheet");
element.setAttribute("type", "text/css");
element.setAttribute("href", "external.css");
document.getElementsByTagName("head")[0].appendChild(element);


var imgSources = Array.from(xmlDoc.getElementsByTagName("img"));
var i = 0;
do {
    document.getElementsByTagName(cityNames[i]).src = (basePath+'images/'+cityNames[i].src);
    i++;
}while (i < imgSources.length);

document.body.innerHTML = '<div id="dimensions"></div>' + document.body.innerHTML;
window.onresize = displayWindowSize;
window.onload = displayWindowSize;
function displayWindowSize() {
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
    document.getElementById("dimensions").innerHTML = myWidth + "x" + myHeight;
}
