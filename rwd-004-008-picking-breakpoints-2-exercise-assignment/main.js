

document.body.innerHTML = '<div id="dimensions"></div>' + document.body.innerHTML;

window.onresize = displayWindowSize;
window.onload = displayWindowSize;

function displayWindowSize() {
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
    document.getElementById("dimensions").innerHTML = myWidth + "x" + myHeight;
}
