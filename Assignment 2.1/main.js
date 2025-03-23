import {meow} from "./bpm.js";


const submitButton = document.getElementById('submitFolder');
let bpmInput = document.getElementById('bpm');
let timestampFields = document.getElementById('timestampFields');
let moreStamps = document.getElementById('moreStamps');
let bpm;
let stamps = 1;

submitButton.addEventListener("click", function(event){
    event.preventDefault();
    bpm = bpmInput.value;
    console.log(bpm);
    if (bpm > 200) {
        bpmInput.value = "thats too big u idiot"
    } else {
        meow(bpm)
    }
})

//timestamps add timestamp inputs
/*
moreStamps.addEventListener("change", function(){
    clearExisting()
    
    stamps = moreStamps.value;
    console.log("stamps "+ stamps)
    
    
    for (let i = 0; i < stamps -1; i++) {
        let newStampField = document.createElement('input');
        newStampField.id = "timestamps" + [i];
        newStampField.maxLength = "5";
        newStampField.type = "text";
        newStampField.value = "additional timestamp: (00:00)";
        newStampField.classList.add(".timestamps");
        
        timestampFields.appendChild(newStampField);
    }
})

function clearExisting(){
    console.log(timestampFields.children.length)
    // while(timestampFields.children.length > 0) {
    //     timestampFields.remove(document.querySelectorAll('#timestamp'))
    // }
    for (let i = 0; i < stamps; i++) {
        timestampFields.remove(document.querySelectorAll('.timestamps'))
    }

}

*/