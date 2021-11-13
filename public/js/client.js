/* Landon Reekstin, 12/15/2020, Programming Languages, JavaScript
    Christmas Card v1.0
    Project to make an animated Christmas card using the p5 library.
*/

// Init items
let win;
let fps = 60; // Frames per second
let DEBUG = 0;
let sizeMultiplier = 1

let imgWidth = 0;
let imgHeight = 0;

// Array of presents
let presentArray = []

let NoPresents = 5


// Present Class
class Present {
  constructor(xPos, yPos, size, speed, wrapping) {
      this.presentxPos = xPos
      this.presentyPos = yPos
      this.presentSize = size
      this.presentRotSpeed = speed
      this.presentTexture = wrapping
  }
}

// Load background image to animate over
let img
let msg
function preload() {
  img = loadImage('img/tree.jpg');
  msg = loadImage('img/merrychristmas.png');
}

// Initial Setup
function setup() {
  // Set drawing parmameters
  rectMode(CENTER);
  textAlign(CENTER, CENTER);

  // Set window size and push to the main screen
  // Good DEV size
  win = { width: 600, height: 600};
  // Good PROD size
  //  win = { width: 900, height: 700 };
  let canvas = createCanvas(win.width, win.height, WEBGL);
  canvas.parent('sketch-holder');

  // Set the framerate so everyone is *hopefully* the same
  frameRate(fps); // As low as possible to not tax slow systems

  // Setup view items
  // Setup background img
  image(img, 0, 0)

  // Set up message image
  image(msg, 0, 0)

  // Functional programming to load image textures for presents
  let textureArray = ['img/present1.jpg', 'img/present2.jpg', 'img/present3.jpg', 'img/present4.jpg', 'img/present5.jpg']
  const wrappingPaper = textureArray.map(present => loadImage(present))

  // create present objects
  let presentObj1 = new Present(150, 1000, 75 * sizeMultiplier, -0.0075, wrappingPaper[0])
  presentArray.push(presentObj1)
  let presentObj2 = new Present(300, 1100, 50 * sizeMultiplier, 0.02, wrappingPaper[1])
  presentArray.push(presentObj2)
  let presentObj3 = new Present(600, 1075, 100 * sizeMultiplier, -0.025, wrappingPaper[2])
  presentArray.push(presentObj3)
  let presentObj4 = new Present(800, 1090, 45 * sizeMultiplier, 0.01, wrappingPaper[3])
  presentArray.push(presentObj4)
  let presentObj5 = new Present(1000, 1000, 50 * sizeMultiplier, 0.03, wrappingPaper[4])
  presentArray.push(presentObj5)

  // setup audio
  ele = createAudio('img/song.mp3');

  // here we set the element to autoplay
  // The element will play as soon
  // as it is able to do so.
  ele.autoplay(true);

  

}
  
// Draw the screen and process the position updates
function draw() {
  background(0, 255, 0);

  // display background
  translate(-300, -300)
  scale(0.5)
  image(img, 0, 0)

  // display message
  translate(0,100)
  scale(0.33)
  image(msg, 0, 0)

  translate(0, -245)
  scale(3)


  // Create the presents and thier animations
  for (let i = 0; i < NoPresents; i++) {
    push()
      translate(presentArray[i].presentxPos, presentArray[i].presentyPos, 75)
      rotateY(frameCount * presentArray[i].presentRotSpeed)
      texture(presentArray[i].presentTexture)
      box(presentArray[i].presentSize)
    pop()
  }
    
  


}