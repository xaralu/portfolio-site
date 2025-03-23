let bodyDiv = document.getElementById('body');
let torso = document.getElementById('torsoImg');
let head = document.getElementById('headImg');
let body = document.querySelector('body')

//use for calculation:
//console.log("offset witdth", bodyDiv.offsetWidth);
//pixel notation:
//console.log("computed style", window.getComputedStyle(bodyDiv).width);
window.addEventListener("load", resizeBody )

function resizeBody() {
    let bodyHeight = window.getComputedStyle(bodyDiv).height;
    bodyHeight = bodyHeight.substring(0, bodyHeight.length - 2);

    let windowHeight = document.documentElement.clientHeight;
    let ratio = windowHeight / bodyHeight;

    for (let i = 0; i < bodyDiv.children.length; i++) {
        let child = bodyDiv.children[i];
        let newWidth = child.offsetHeight * ratio;
        let newPos = child.offsetTop * ratio;
        child.style.height = newWidth + "px";
        child.style.top = newPos + "px";
    }
    setInterval(duplicateHand, 4000);
}

let numHands = 20;
let speed = 200;
let rightPosition = document.documentElement.clientWidth / numHands;
let i = 0
let transparency = 1;

function duplicateHand() {
    if( i < numHands){
        let newHand = document.createElement('img');
        newHand.classList.add('extraHandImg');
        newHand.src = "extrahand.png";
        newHand.style.right = rightPosition * i + "px";
        newHand.style.opacity = transparency;
        body.appendChild(newHand);
        console.log(newHand.off)
        i++;
        transparency -= 1/numHands;
    } 
}
