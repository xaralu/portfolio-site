//allow audio playback on local server
//code from https://github.com/Tonejs/Tone.js/issues/341 modified by myself
//user @datramt {
if (Tone.context.state !== 'running') {
    Tone.context.resume();
}
let playButtonTag = document.getElementById('playButton');

playButtonTag.addEventListener("click", function(){
        mouse_IsDown = true;
        if (Tone.context.state !== 'running') {
            Tone.context.resume();
        }
        if (Tone.context.state == 'running') {
            console.log("allowed")
        } 
})

//start all players for the typing tracks
let keyBoardPlayers = []
let keyboardTracks = ["average_type.wav", "average_type2.wav", "average_type3.wav", "down_type.wav", "small_type.wav", "enter_key.wav" ];
for (let i = 0; i < keyboardTracks.length; i++) {
    let playerr = new Tone.Player( "./stems/keyboard/" + keyboardTracks[i]);
    keyBoardPlayers.push(playerr);
    keyBoardPlayers[i].toDestination();
}

//start all players for the background music tracks
let players = [];
let bgTracks = ["mysterysolved.wav"];
for (let i = 0; i < bgTracks.length; i++) {
    players.push(new Tone.Player( bgTracks[i]));
    players[i].toDestination();
}

/**
 * Periodically check that the audiocontext is running, gives user information on the state of audio playback int he console.
 */
let playing = false;
setInterval(function() {
    if (Tone.context.state == 'running' && !playing) {
        playing = true;
        console.log("Starting audio.");
    } else if (Tone.context.state == 'running' && playing) {
        console.log("Audio playback is currently enabled.");
    } else {
        console.log("Audio could not be started because the AudioContext is not running. Please press allow audio button in the top left of the screen.");
    }
}, 2000)

document.addEventListener("keypress", keyboard);
//spacebar, punctuation: 
let loudKeys = [32];
//frequently used keys (alphabet) - quieter
let quietKeys1 = [104, 106, 107, 108];
let quietKeys2 = [100, 97, 115, 102, 103];
//infrequently used keys (alphabet) - not as quiet
let normalKeys1 = [113, 119, 101, 114, 116, ]
let normalKeys2 = [121, 117, 105, 111, 112, 122] 
let normalKeys3 = [120, 99, 118, 98, 110, 109];

/**
 * Plays a keyboard sound for each key that is pressed when the user types. 
 * @param {*} event 
 */
function keyboard(event) {
    let gfg = event.keyCode;
    if (normalKeys1.indexOf(gfg) > -1) {
        keyBoardPlayers[0].start();
    } else if (normalKeys2.indexOf(gfg) > -1) {
        keyBoardPlayers[1].start();
    } else if (normalKeys3.indexOf(gfg) > -1) {
        keyBoardPlayers[2].start();
    } else if (quietKeys1.indexOf(gfg) > -1) {
        keyBoardPlayers[3].start();
    } else if (quietKeys2.indexOf(gfg) > -1) {
        keyBoardPlayers[4].start();
    } else if (loudKeys.indexOf(gfg) > -1) {
        keyBoardPlayers[5].start();
    }
}
//65-90 are letters


//store test messages
let testMessages = ["test 1 notes", "test 2 email", "test 3 timesheet"];

//object that stores image, text, 

let notesapp = {
    name: "notesapp",
    text : "test 1 notes",
    window : "images/notepad.png",
    height: 400,
    width: 400,
}

let email = {
    name: "email",
    text : "test 2 email",
    window : "images/email.jpg",
    height: 500,
    width: 500,
}

let timesheet = {
    name: "timesheet",
    text : "test 3 timesheet",
    window : "images/timesheet.png",
    height: 300,
    width: 300,
}

let windows = [notesapp, email, timesheet];
let i = 0;
nextWindow(i);

function nextWindow(index) {
    //check if the div has been created
    //if so, call z index helper func
    //if not, create new div
    let newWindow = document.createElement('div');
    newWindow.id = windows[index].name;
}

