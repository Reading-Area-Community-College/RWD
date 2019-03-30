var basePath = 'https://reading-area-community-college.github.io/RWD/rwd-004-008-picking-breakpoints-2-exercise-assignment/';

var i = 0;
do {
    let newSrc = document.getElementsByTagName("img")[i].currentSrc.split('/').pop();
    document.getElementsByTagName("img")[i].src = basePath+'images/'+newSrc;
    i++;
}
while (i < document.getElementsByTagName("img").length);

document.body.innerHTML = '<div id="dimensions"></div>' + document.body.innerHTML;

window.onresize = displayWindowSize;
window.onload = displayWindowSize;

function displayWindowSize() {
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
    document.getElementById("dimensions").innerHTML = myWidth + "x" + myHeight;
}
