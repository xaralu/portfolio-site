/**
 * When submit button is pressed, the bpm corresponds 
 * to the pace of the shoulder movements, which currently start 
 * immediately. 
 * 
 * @author Xara Alexander
 * @version 03/12/2025
 */

let theBpm = 3000;
export function meow(bpm) {
    theBpm = bpm * 100;
    setInterval(shoulderThing, theBpm * 2);
}

function getRawNum(name) {
    let pxFormatted = window.getComputedStyle(name).top;
    pxFormatted =  pxFormatted.substring(0, (pxFormatted.length - 2));
    return pxFormatted;
}

let on = true
let leftArm = document.getElementById('leftarmImg');
console.log("leftArm: "+ leftArm + "on: " + on)

function shoulderThing() {
    console.log("on: " + on)
    let leftArmHeight = getRawNum(leftArm);
    console.log(leftArmHeight)
    if (on){
        leftArm.style.top = (leftArmHeight + 5) + "px";
        on = false;
        console.log(on)
    } 
    if (!on) {
        leftArm.style.top = (leftArmHeight - 5) + "px";
        on = true;
    }
}