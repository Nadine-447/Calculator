console.log('Hi!');

//get all the buttons with the document
let keys = document.querySelectorAll('#calculator span');
//an array for displaying statements on the display
let operators = ['+', '-', 'x', '/'];
let decimalAdded = false;
//зв'язуємо кнопку '1' зі зьінною єone'
let one = document.querySelector('.button.one');

//змінн поля для вводу
let inputDisplay = document.querySelector('#display');

//додаємо подію 'onclick' до цієї кнопки та що відбудеться після натискання
one.onclick = function(event) {
    //надаємо дісплею значення натиснутої кнопки
    inputDisplay.value = 1;
    //inputDisplay.value = one.value;
    console.log(`inputDisplay.value = ${inputDisplay.value}`);// на дисплеї з'явилась цифра '1'
}

//add  'onclick' event for all buttons and perform the action
for (let i = 0; i < keys.length; i++) {
    keys[i].onclick = function(e) {
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
//console.log(keys);