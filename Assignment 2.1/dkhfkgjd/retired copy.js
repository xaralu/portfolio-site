//how can i make this code more organized
//i dont know why we need to use setup and draw. :P
//organization of this project:
/*
images appear on the screen in a sequence
this sequence has different triggers 
images have corresponding text to type
as well as different fonts, formats
a big focus is also the atmosphere of the area, musically. 
i honestly want to comminssion friends to work on this project and make the music. 
im thinking about making thiis structured via a huge friggin object. 
lowk i should make/coordinate the music. 
pages object - stores each pages text to type, background image, formatting specs (width height )
*/


//implement volume change for track

//autoplay setup
let context;
window.onload = function() {
  context = new AudioContext();
  // Setup all nodes
  // ...
}

//users consent to play audio
let playButtonPressed = false;
let pressToPlayButton = document.getElementById('pressToPlay');
let audioMessage = document.getElementById('audioMessage');

// One-liner to resume playback when user interacted with the page.
pressToPlayButton.addEventListener('click', function() {
  context.resume().then(() => {
    console.log('Playback resumed successfully');
  });
});

//users consent for audio play 
pressToPlayButton.addEventListener("click", function() {
  playButtonPressed = true;
  console.log("mmmeeeeeeooooooowwwww");
  audioMessage.style.display = "none";
  for (let i = 0; i < urls.length; i++) {
    players[i] = new Tone.Player( "stems/" + urls[i]);
    players[i].toDestination();
  }
})

let players = [];
let urls = ["myteryloop3.wav", "gamemusic.mp3", "mysterysolved.wav"];
// if (playButtonPressed) {
  
// }
let trackIncrementor = 0;

let messages = ["try typing me", "if you keep typing, new tracks will play", "nice"];
messageNumber = 0;

let toType = messages[0];
let typed = "";
let doneTyping = false;
let letter=0;

function nextMessage() {
  messageNumber++;
  toType = messages[messageNumber];
  typed = "";
  doneTyping = false;
  letter=0;
  
  console.log("track incrementor var is : " + players[trackIncrementor]);
  console.log("players is : " + players);
  if (trackIncrementor == 0) {
    players[trackIncrementor].stop();
  } else {
    players[trackIncrementor - 1].stop();
  }
  
  players[trackIncrementor].start();
  trackIncrementor++;
}
/*
function keyTyped() {
  if (playButtonPressed) {
    console.log("ketTyped function entered");
    if (key == toType[letter]) {
      // if (key == ' ') {
      //   typed += '_';
      // } else {
      //   typed += toType[letter];
      // }
      typed += toType[letter];
      console.log("typed++")
      letter++;
    }
    if (toType == typed) {
      doneTyping = true;
    }
    if (doneTyping) {
      nextMessage();
    }
  }
}
*/
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  text(toType, 20, 20, 200, 300);
  text(typed, 20, 100, 200, 300);
}


