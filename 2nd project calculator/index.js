function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;       //  Concatenate the current value with the existing value.
}

function clearDisplay() {             //  removes any previously written value.
    const display = document.getElementById("display");
    display.value = "";
}


function calculate (){                // input value evaluate
    const display = document.getElementById("display");

    try{                                        // Write the code in the try block where an error can occur.
        display.value = eval(display.value)     // eval use execute the expression
    } catch(error) {
        display.value = "Error"
    }
}