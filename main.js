const screen= document.getElementById('screen')

const buttons= document.querySelectorAll('.numbers')// we used querySelectoarAll cause it's return an array instead of
                                                    //  getElementsByClassName cause it will return HTMLCollection =>
                                                    // it's not worrking forEach 
                                                    // or if we use ☝(getEl) we use Array.from(buttons).forEach

let inputValue= ""; //store current input value in a varible

buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        inputValue += button.value;
        screen.value= inputValue; // we use screen.value instead of inner.HTML
        // cause <input>, <textarea>, and <select> elements user sees and interacts with is stored
        //-- unlike innerHTML getting the content of non-form elements div, span, p
        
    })
});

document.getElementById('clear').
    addEventListener('click', ()=>{
        inputValue= '';
        screen.value= inputValue;
    })
