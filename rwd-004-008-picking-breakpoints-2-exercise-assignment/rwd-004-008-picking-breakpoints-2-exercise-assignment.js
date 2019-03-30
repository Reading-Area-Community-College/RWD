document.getElementsByTagName( "head" )[0].appendChild( '<link rel="stylesheet" type="text/css" href="https://reading-area-community-college.github.io/RWD/rwd-004-008-picking-breakpoints-2-exercise-assignment/rwd-004-008-picking-breakpoints-2-exercise-assignment.css">' );
document.body.innerHTML = '<div id="dimensions"></div>' + document.body.innerHTML;
window.onresize = displayWindowSize;
window.onload = displayWindowSize;
function displayWindowSize() {
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
    document.getElementById("dimensions").innerHTML = myWidth + "x" + myHeight;
}
