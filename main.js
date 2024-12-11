//   1--- values of Numbers
//   2--- values of opreations +-/*
//   3--- define value , total 
//   4--- MAke the Decimal if no userInput => 0.

let userInput=  '';
let currentOperation= null; // Adding This
let total=       0;



screen= document.getElementById("screen")
screen.value= 0;




// Clear button functionality (AC):
document.getElementById('clear').
addEventListener('click', () =>{
    userInput= '';
    total= 0;
    currentOperation= null
    screen.value= total;
})



// Define The Value Of Buttons:
buttons= document.querySelectorAll('.numbers')
buttons.forEach(button => {
    button.addEventListener('click', () =>{
        userInput += button.value;
        screen.value= userInput
        
    })
});


// Clear button (X)
document.getElementById('deleteB').
addEventListener('click', () => {
    if(userInput.length >= 1){
        userInput= userInput.slice(0, -1)
        console.log(userInput)
        screen.value= userInput
    }
})

// Decimal button :
document.getElementById('decimal').
addEventListener('click', () =>{
    if(!userInput.includes(".")){
        userInput += "."
        screen.value= userInput
    }
})

//  Handle the Opreations (+, -, *, /):
const operations= document.querySelectorAll('.opreation')
operations.forEach(opreation => {
    opreation.addEventListener('click', () =>{
        if(userInput !== ""){
            if(currentOperation !== null){
                calculate()
            }
            else{
                total = parseFloat(userInput)
            }
        }
        currentOperation= opreation.value;  // Set the current operation (+, -, *, /)
        userInput = '';                     // Clear user input after storing the operation
    })
})
            
                        
            
            
//  Handle the equal Button :
document.getElementById('equal')
.addEventListener('click', () =>{
    if(userInput !== ""){
        calculate();
        userInput = total.toString();
        screen.value= total;
    }
})



//  Perform calculation based on the current operation :
function calculate() {
    switch (currentOperation) {
        case '➕':
            total += parseFloat(userInput); // إضافة الرقم المدخل إلى المجموع
            break;
        case '➖':
            total -= parseFloat(userInput); // طرح الرقم المدخل من المجموع
            console.log(total)
            break;
        case '✖' :
            total *= parseFloat(userInput);
            break;
        case "➗" :
            if (parseFloat(userInput) !== 0) {
                total /= parseFloat(userInput);
            } else {
                alert("Cannot divide by zero");
                total = 0;  // Reset total on division by zero
            }
            break;
        default:     //ما هو الـ default؟: في حالة لم يتطابق currentOperation مع أي من الحالات السابقة 
                    //(الجمع أو الطرح أو الضرب أو القسمة)، سيصل الكود إلى هذه العبارة.
    }
    currentOperation = null; // Reset current operation
}
            
            
            
        
console.log(userInput)
console.log(total)
