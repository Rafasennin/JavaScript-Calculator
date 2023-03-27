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



function reload(e){
    window.location.reload();
    keysString[0] = "";
};

var number1 = 0;
var number2 = 0;
var signal ="";

//Numpad of Keyboard functionality for (+; -; *; / and =)
$(window).keypress(function (e) { 
    if(e.code === "NumpadAdd"){
        number1 = display.value;
        signal="+";
        display.value= ""; 
        log(number1 + "," + signal)
    }  

    if(e.code === "NumpadSubtract"){
        number1 = display.value;
        signal="-";
        display.value= ""; 
    }  

    if(e.code === "NumpadDivide"){
        number1 = display.value;
        signal="/";
        display.value= ""; 
    }  

    if(e.code === "NumpadMultiply"){
        number1 = display.value;
        signal="*";
        display.value= ""; 
    } 

    if(e.code === "NumpadEnter"){

        if(signal ==="+"){
            display.value = number1 + number2;
            keysString[19]="";   
            log(number1 + ";" + number2)
    
       }else if(signal ==="-"){
            display.value = number1 - number2;
            keysString[19]="";
    
        }else if(signal ==="*"){
            display.value = number1 * number2;
            keysString[19]="";
    
    
        }else if(signal ==="/"){
            display.value = number1 / number2;
            keysString[19]="";
    
        } else if (signal ==="%"){
            display.value = (number1 * number2) / 100 + number1;
            keysString[19]="";
            log(number1 + "," + n3)
        }   

    }
});

//Calculator keypad functionality for "+"
keys[15].addEventListener("click", (e)=> { 
    number1 = parseFloat(display.value);
    signal="+";
    display.value= "";
    log("Number1 is " + number1 + " Signal is " + signal)
})


//Calculator keypad functionality for "-"
keys[11].addEventListener("click", ()=> { 
    number1 = parseFloat(display.value);
    signal="-";
    display.value= ""; 
    keysString[11]=""; 
    log("Number1 is " + number1 + " Signal is " + signal)
})

//Calculator keypad functionality for "*"
keys[7].addEventListener("click", ()=> { 
    number1 = parseFloat(display.value);
    signal="*";
    display.value= ""; 
    keysString[7]=""; 
    log("Number1 is " + number1 + " Signal is " + signal)
})

//Calculator keypad functionality for "/"
keys[3].addEventListener("click", ()=> { 
    number1 = parseFloat(display.value);
    signal="/";
    display.value= ""; 
    keysString[3]=""; 
    log("Number1 is " + number1 + " Signal is " + signal)
})

//Calculator keypad functionality for "%"
keys[2].addEventListener("click", ()=> { 
    number2 = parseFloat(display.value);
    signal="%";
    display.value= ""; 
    keysString[2]=""; 
    log("Number2 is " + number2 + " Signal is " + signal)
})

//Calculator keypad functionality for "="
keys[19].addEventListener("click", ()=> { 
    let n1 = parseFloat(number1);
    let n2 = parseFloat(display.value);
    let n3 = parseFloat(number2);

   if(signal ==="+"){
        display.value = n1 + n2;
        keysString[19]="";   

   }else if(signal ==="-"){
        display.value = n1 - n2;
        keysString[19]="";

    }else if(signal ==="*"){
        display.value = n1 * n2;
        keysString[19]="";


    }else if(signal ==="/"){
        display.value = n1 / n2;
        keysString[19]="";

    } else if (signal ==="%"){
        display.value = (number1 * number2) / 100 + number1;
        keysString[19]="";
        log(n1 + "," + n3)
    }   
})



$(document).keyup(function (event) { 
    let code = event.code;
    let name = event.key;
    let number = event.charCode;

    if(code === "Escape"){
       window.location.reload();
    }else{

    display.value += event.key; 

    //log(` Esta é a tecla "${name}", seu código é "${code}" e seu número de caracter é "${number}"`)
    }

    const conditionsLetters = ["keyA", "KeyB", "KeyC", "KeyD", "KeyE", "KeyG", "KeyH", "KeyI", "KeyJ",
                               "KeyK", "KeyL", "KeyM", "KeyN", "KeyO", "KeyP", "KeyQ", "KeyR", "KeyS", 
                               "KeyT", "KeyU", "KeyV", "KeyW", "KeyX", "KeyY", "KeyZ", "Tab", "Backspace",
                               "Slash", "ShiftLeft", "ShiftRight", "ArrowLeft", "ArrowRight", "ArrowUp", 
                               "ArrowDown", "ControlRight", "ControlLeft", "AltRight", "AltLeft", "CapsLock",
                               "MetaLeft", "", "Semicolon", "Quote", "Enter", "BracketRight", "Backslash", 
                               "BracketLeft", "Minus", "Equal", "Period", "Comma", "NumLock", "NumpadAdd",
                               "NumpadSubtract", "NumpadDivide", "NumpadMultiply", "KeyA"
                              ];

        conditionsLetters.forEach(element => {
            if(code === element){
                display.value = "";
            }
               
        }) 
})

   
//Movement of calculator body

const calcBody = document.getElementById("calc__body");

var x = 0;
var y = 0;

mousedown =false;


$("#calc__body").mousedown(function (e) { 
    mousedown = true;
    x = calcBody.offsetLeft - e.clientX;
    y = calcBody.offsetTop - e.clientY; 
});


$(document).mouseup(function (e) { 
    mousedown = false;
});

$(document).mousemove(function (e) { 
    if(mousedown){
        calcBody.style.left = e.clientX + x + "px";
        calcBody.style.top = e.clientY + y + "px";
    }    
});