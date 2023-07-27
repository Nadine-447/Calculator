console.log('Hi!');

//get all the buttons with the document
let keys = document.querySelectorAll('#calculator span');
console.log(`keys: ${keys}`);
console.log(`keys 0: ${keys[0]}`);
//an array for displaying statements on the display
let operators = ['+', '-', 'x', '/'];
let decimalAdded = false;

//масив для кнопок, спочатку порожній:
let arrayOfButtons = [];

//зв'язуємо кнопку '1' та '2' з відповідними змінними:
const one = document.querySelector('.button.one');
const two = document.querySelector('.button.two');

//додаємо в масив першу та другу кнопки:
arrayOfButtons.push(one, two);


//змінна для дісплею, з'єднуємо з відповідним елементом у html:
let inputDisplay = document.querySelector('#display');
//нехай початкове значення на дісплеї буде '0':
inputDisplay.value = 0;

//цикл для надання кожній кнопці події 'onclick'(натискання)
for (let i = 0; i < arrayOfButtons.length; i++) {
    arrayOfButtons[i].onclick  = function(event) {

    //надаємо дісплею значення натиснутої кнопки, отримавши її зміст(content)
    inputDisplay.value = arrayOfButtons[i].textContent;
    }
}

/* arrayOfButtons[0].onclick  = function(event) {
    //надаємо дісплею значення натиснутої кнопки, отримавши її зміст(content)
    inputDisplay.value = arrayOfButtons[0].textContent;
    //let contentOfOne = arrayOfButtons[0].textContent;
    //inputDisplay.value = contentOfOne;

    //inputDisplay.value = one.value;// don't work
    
} */

/* //додаємо подію 'onclick' до цієї кнопки та що відбудеться після натискання
one.onclick = function(event) {
    //надаємо дісплею значення натиснутої кнопки
    inputDisplay.value = 1;
    //inputDisplay.value = one.value;// don't work
    
} */


//add  'onclick' event for all buttons and perform the action
for (let i = 0; i < keys.length; i++) {
    keys[i].onclick = function(e) {
        console.log(`keys[i]: ${keys[i]}`);
        //get input and value of button
        let input = document.querySelector('#display');
        let inputVal = input.innerHTML;
        let btnVal = this.innerHTML;

        if (btnVal == 'C') {
            input.innerHTML = '';
            decimalAdded = false;
        }

        else if (btnVal == '=') {
            let equation = inputVal;
            let lastChar = equation[equation.length - 1];

            equation = equation.replace(/x/g, '*');

            if (operators.indexOf(lastChar) > -1 || lastChar == '.') {
                equation = equation.replace(/.$/, '');
            }
            if (equation) {
                input.innerHTML = eval(equation);
            }
            decimalAdded = false;
        }

        else if (operators.indexOf(btnVal) > -1) {
            let lastChar = inputVal[inputVal.length - 1];

            if (inputVal != '' && operators.indexOf(lastChar) == -1) {
                input.innerHTML += btnVal;
            }
            else if (inputVal == '' && btnVal == '-') {
                input.innerHTML += btnVal;
            }
            if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
                input.innerHTML = inputVal.replace(/.$/, btnVal);
            }
            decimalAdded = false;
        }

        else if (btnVal == '.') {
            if (!decimalAdded) {
                input.innerHTML += btnVal;
                decimalAdded = true;
            }
        }

        else {
            input.innerHTML += btnVal;
        }

        e.preventDefault();
    }
}
