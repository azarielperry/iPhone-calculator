// DOM Elements


const batteryEl = document.querySelector('.batteryPercent');
//grabs the hour from the html and it is being assigned a class to the variable hourEl. It's being declared a value 
const hourEl = document.querySelector('.hour');
// the variable minuteEl is being assigned  the minute value from html file
const minuteEl = document.querySelector('.minute');
// the constant valueEl is being assigned the value from the input in the html file. It is the display
const valueEl = document.querySelector('.value');
// the constant acEl  is being assigned .ac from the input (parent element <div>) in the html file 
const acEl = document.querySelector('.ac');
// the constant pmEl  is being assigned .pm from the input in the html file
const pmEl = document.querySelector('.pm');
// the constant percentEl  is being assigned .percent from the input in the html file
const percentEl = document.querySelector('.percent');
// the constant additionEl  is being assigned .addition from the input in the html file
const additionEl = document.querySelector('.addition');
// the constant subtractionEl  is being assigned .subtraction from the input in the html file
const subtractionEl = document.querySelector('.subtraction');
// the constant multiplicationEl  is being assigned .multiplication from the input in the html file
const multiplicationEl = document.querySelector('.multiplication');
// the constant divisionEl  is being assigned .division from the input in the html file
const divisionEl = document.querySelector('.division');
// the constant equalEl  is being assigned .equal from the input in the html file
const equalEl = document.querySelector('.equal');
// the constant percentEl  is being assigned .percent from the input in the html file
const decimalEl = document.querySelector('.decimal');
// the constant number0El  is being assigned .number0 from the input in the html file
const number0El = document.querySelector('.number-0');
// the constant number1El  is being assigned .number1 from the input in the html file
const number1El = document.querySelector('.number-1');
// the constant number2El  is being assigned .number2 from the input in the html file
const number2El = document.querySelector('.number-2');
// the constant number3El  is being assigned .number3 from the input in the html file
const number3El = document.querySelector('.number-3');
// the constant number4El  is being assigned .number4 from the input in the html file
const number4El = document.querySelector('.number-4');
// the constant number5El  is being assigned .number5 from the input in the html file
const number5El = document.querySelector('.number-5');
// the constant number6El  is being assigned .number6 from the input in the html file
const number6El = document.querySelector('.number-6');
// the constant number7El  is being assigned .number7 from the input in the html file
const number7El = document.querySelector('.number-7');
// the variable number8El  is being assigned .number8 from the input in the html file
const number8El = document.querySelector('.number-8');
// the variable number9El  is being assigned .number9 from the input in the html file
const number9El = document.querySelector('.number-9');

// creating  an array to store the value of the variables being assigned
const numberElArray = [
    number0El, number1El, number2El, number3El, number4El,
    number5El, number6El, number7El, number8El, number9El
];


//Variables
//setting variables to null value 
let valueStrInMemory = null;
let operatorInMemory = null;


//Functions
// It is inserting commas after 3 digits
const getValueAsStr = () => valueEl.textContent.split(',').join('');
   //it converts the variable getValueAsNum to a string and returns it as a floating number
const getValueAsNum = () => {
    return parseFloat(getValueAsStr());
};
//it allows for the decimal button to function
const setStrAsValue = (valueStr) => {
    if (valueStr[valueStr.length - 1] === '.') {
        valueEl.textContent += '.';
        return;
    }

    const [wholeNumStr, decimalStr] = valueStr.split('.');
    if (decimalStr) {
        valueEl.textContent =
         parseFloat(wholeNumStr).toLocaleString() + '.' + decimalStr;
    } else {
        valueEl.textContent = parseFloat(wholeNumStr).toLocaleString();
    }
    
    valueEl.textContent = parseFloat(valueStr).toLocaleString();
};
// this allows for it to receive input from clicking and displaying it on the calculator screen
const handleNumberClick = (numStr) => {
    const currentValueStr = getValueAsStr();
    // It displays 0 on the calculator if there is no input on the diplay
    if (currentValueStr === '0') {
        setStrAsValue(numStr);
    } else {
    setStrAsValue(currentValueStr + numStr);
    
    }
};

// These lines controls the operator buttons namely: addition, subtraction, multipliction and division
// Allows the calculator to perfroms operations
const getResultOfOperationAsStr = () => {
    const currentValueNum = getValueAsNum();
    const valueNumInMemory = parseFloat(valueStrInMemory);
    let newValueNum; 
    if (operatorInMemory === 'addition') {
        newValueNum = valueNumInMemory + currentValueNum;
    } else if (operatorInMemory === 'subtraction') {
        newValueNum = valueNumInMemory - currentValueNum;
    } else if (operatorInMemory === 'multiplication') {
        newValueNum = valueNumInMemory * currentValueNum;
    } else if (operatorInMemory === 'division') {
        newValueNum = valueNumInMemory / currentValueNum;
    }

    return newValueNum.toString ();
};


// it allows for the operator buttons the receive an input and display it when clicked and then returning 0 on the screen
const handleOperatorClick = (operation) => {
    const currentValueStr = getValueAsStr();
    if (!valueStrInMemory) {
        valueStrInMemory = currentValueStr;
        operatorInMemory = operation;
        setStrAsValue('0');
        return;
    }

    valueStrInMemory = getResultOfOperationAsStr();
    operatorInMemory = operation;
    setStrAsValue('0');
};



// Add Event Listners to functions 
// It receives input from clicking on the AC button and resets the screen to 0
acEl.addEventListener('click', () => {
    setStrAsValue('0');
    valueStrInMemory = null;
    operatorInMemory = null;
});
// it controls the plus or minus button
pmEl.addEventListener('click', () => {
    const currentValueNum = getValueAsNum();
    const currentValueStr = getValueAsStr();
    if (currentValueStr === '-0') {
        setStrAsValue('0');
        return;
    }
    if (currentValueNum >= 0) {
        setStrAsValue('-' + currentValueStr);
    } else {
        setStrAsValue(currentValueStr.substring(1));
    }
});
// It controls the percent button and performs the operation
percentEl.addEventListener('click', () => {
    const currentValueNum = getValueAsNum();
    const newValueNum = currentValueNum / 100;
    setStrAsValue(newValueNum.toString()); 
    valueStrInMemory = null;
    operatorInMemory = null;
});



// Add Event Event Listeners to operators
//links the operators to the html file to register the clicks
additionEl.addEventListener('click', () => {
    handleOperatorClick('addition');
});
subtractionEl.addEventListener('click', () => {
    handleOperatorClick('subtraction');
});
multiplicationEl.addEventListener('click', () => {
    handleOperatorClick('multiplication');
});
divisionEl.addEventListener('click', () => {
    handleOperatorClick('division');
});
equalEl.addEventListener('click', () => {
    if (valueStrInMemory) {
        setStrAsValue(getResultOfOperationAsStr());
        valueStrInMemory = null;
        operatorInMemory = null; 
    }
})



// Add Event Listeners to numbers and decimal
//converts the numbers when clicked in to a string and stores it
for (let i=0; i < numberElArray.length; i++) {
    const numberEl = numberElArray[i];
    numberEl.addEventListener('click', () => {
      handleNumberClick(i.toString());
    });
  }

//receives input and display it when the decimal button is pressed
decimalEl.addEventListener('click', () => {
    const currentValueStr = getValueAsStr();
    if (!currentValueStr.includes('.')) {
        setStrAsValue(currentValueStr + '.');
    }

});
//receives laptop battery input and displaying it on the calculator
const batteryPercent = () => {
    navigator.getBattery()
    .then(function(battery) {
        //Caling battery level and multiplying it by 100
      batteryEl.textContent = (battery.level * 100).toString();
    } 
  )}; 
 
  setInterval(batteryPercent, 1000);
  batteryPercent();
       



// Set up the time
// controls the time to update live
const updateTime = () => {
    const CurrentTime = new Date();

    let currentHour = CurrentTime.getHours();
    const currentMinute =CurrentTime.getMinutes();

    if(currentHour > 12) {
        currentHour -=12;
    }
    
    hourEl.textContent = currentHour.toString();
    minuteEl.textContent = currentMinute.toString().padStart(2, '0');   
}
setInterval(updateTime, 1000);
updateTime();


// if(navigator){
//     navigator.getbattery()
//     .then(status=>{
//         console.table(status)
//         charging(status.charging);
//         batteryLevel(status.level);

//         status.onchargingchange = ()=> charging(status.charging)
//         status.onlevelchange = ()=> batteryLevel(status.level)

//     })
// } else {
//     alert('sorry your browser doesn\'t support the navigator object');
// }

// let level = document.querySelector('.level')
// function charging(status){
//     status ? level.classList.add('charging') :
//     level.classList.remove('charging');
// }

// function batteryLevel(value) {
//     text.innerHTML = '${value * 100}%'
//     level.style.width = '${value * 100}%'
// // }