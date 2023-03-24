function log(text){
    console.log(text);
}

const display = document.getElementById("input__text");
const keys = document.querySelectorAll(".input__button");


const keysString = ["C", "()", "%", "/", "7", "8", "9", "X","4", "5", 
                    "6", "-", "1", "2", "3", "+", "+/-", "0", ".", "="];



for (let index = 0; index < keys.length; index++) {
    keys[index].addEventListener("click", ()=>{
        display.value+= keysString[index];
    })   
}

function reload(){
    keysString[0] ="";
    window.location.reload();
};

var number1 = 0;
var signal ="";

function sum(){
    number1 = display.value;
    signal="+";
    display.value= ""; 
    keysString[15]=""; 
    log(number1)
}

$(window).keypress(function (e) { 
    if(e.code === "NumpadAdd"){
        number1 = display.value;
        signal="+";
        display.value= ""; 
        log(number1)
    }  

    if(e.code === "NumpadSubtract"){
        number1 = display.value;
        signal="-";
        display.value= ""; 
        log(number1)
    }  

    if(e.code === "NumpadDivide"){
        number1 = display.value;
        signal="/";
        display.value= ""; 
        log(number1)
    }  

    if(e.code === "NumpadMultiply"){
        number1 = display.value;
        signal="*";
        display.value= ""; 
        log(number1)
    } 

    if(e.code === "NumpadEnter"){
        result();
    } 
    
});


function sub(){
    number1 = display.value;
    signal="-";
    display.value= ""; 
    keysString[11]=""; 
    log(number1)
}

function mult(){
    number1 = display.value;
    signal="*";
    display.value= ""; 
    keysString[7]=""; 
    log(number1)
}

function div(){
    number1 = display.value;
    signal="/";
    display.value= ""; 
    keysString[3]=""; 
    log(number1)
}


function result(){
   let n1 = parseFloat(number1);
   let n2 = parseFloat(display.value);

   if(signal ==="+"){
        let fresult = display.value = n1 + n2;
        keysString[19]="";
        log(fresult)

   }else if(signal ==="-"){
        let fresult = display.value = n1 - n2;
        keysString[19]="";
        log(fresult)

    }else if(signal ==="*"){
        let fresult = display.value = n1 * n2;
        keysString[19]="";
        log(fresult)

    }else if(signal ==="/"){
        let fresult = display.value = n1 / n2;
        keysString[19]="";
        log(fresult)
    }
}

$(document).keyup(function (event) { 
    let code = event.code;
    let name = event.key;
    let number = event.charCode;

    if(code === "Escape"){
       window.location.reload()

    }else{

    display.value += event.key; 

    log(` Esta é a tecla "${name}", seu código é "${code}" e seu número de caracter é "${number}"`)
    }

    const conditionsLetters = ["keyA", "KeyB", "KeyC", "KeyD", "KeyE", "KeyG", "KeyH", "KeyI", "KeyJ",
                               "KeyK", "KeyL", "KeyM", "KeyN", "KeyO", "KeyP", "KeyQ", "KeyR", "KeyS", 
                               "KeyT", "KeyU", "KeyV", "KeyW", "KeyX", "KeyY", "KeyZ", "Tab", "Backspace",
                               "Slash", "ShiftLeft", "ShiftRight", "ArrowLeft", "ArrowRight", "ArrowUp", 
                               "ArrowDown", "ControlRight", "ControlLeft", "AltRight", "AltLeft", "CapsLock",
                               "MetaLeft", "", "Semicolon", "Quote", "Enter", "BracketRight", "Backslash", 
                               "BracketLeft", "Minus", "Equal", "Period", "Comma", "NumLock", "NumpadAdd",
                               "NumpadSubtract", "NumpadDivide", "NumpadMultiply"
                              ];

        conditionsLetters.forEach(element => {

          if(code === element){
            display.value= "";
          }
        })
     
})

   
