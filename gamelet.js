/*
Instructions:

Inclde gamelet.js in an HTML document containing
an element with an id of "ball".
The script will detect when the left or right arrow
key is pressed and will move the element.
*/

const bal = document.getElementById("ball"); // get the ball
document.addEventListener("keydown", handleKeyPress); // listen for keys
let position = 0; //set initial position

function handleKeyPress(e) {
  //responds to key presses by updating position
  if (e.code === "ArrowLeft") {
    position = position - 10;
  }
  if (e.code === "ArrowRight") {
    position = position + 10;
  }
  if (position < 0) {
    position = 0;
  }
  refresh(); // reposition the ball
}
function refresh() {
  // changes position of the ball
  ball.style.left = position + "px";
}
