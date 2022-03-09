const add = (numA, numB) => {
  return numA + numB;
}

const subtract = (numA, numB) => {
  return numA - numB;
}

const multiply = (numA, numB) => {
  return numA * numB;
}

const divide = (numA, numB) => {
  return numA / numB;
}

const operateAndDisplay = (operand, numA, numB) => {
  let result = 0;
  switch (operand) {
    case '+':
      result = add(numA, numB);
      break;

    case '-':
      result = subtract(numA, numB);
      break;

    case 'x':
      result = multiply(numA, numB);
      break;

    case '÷':
      result = divide(numA, numB);
      break;

    default:
      result = numA;
  }

  displayNumber(result);
  return result;
}

const displayNumber = (number) => {
  document.querySelector('#display').innerText = number;
}

const inputNumber = (number, input) => {
  number = number * 10 + parseInt(input);

  return number;
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll('.button');
  let number = 0;
  let lastOperator = 0;
  let operand = '';

  buttons.forEach(button => {
    button.addEventListener('click', e => {
      let target = e.target.textContent;
      //click number button 0~9
      if (!Number.isNaN(parseInt(target))) {

        number = inputNumber(number, target);
        displayNumber(number)

      }

      //clear button
      if (target === 'C') {
        number = 0;
        lastOperator = 0;
        operand = '';
        displayNumber(number);
      }

      //calculate button
      if (target === '+' || target === '-' || target === 'x' || target === '÷') {
        if (operand) {
          lastOperator = operateAndDisplay(operand, lastOperator, number);
          operand = target;
          number = 0;
        } else {
          if (lastOperator) {
            operand = target;
          } else {
            lastOperator = number;
            operand = target;
            number = 0;
          }

        }

      }

      //equal button
      if (target === '=') {
        lastOperator = operateAndDisplay(operand, lastOperator, number);
        //lastOperator = 0;
        number = 0;
        operand = '';

      }

    });

    button.addEventListener('mousedown', (e) => {
      e.target.style.backgroundColor = '#DDA0DD';
    });

    button.addEventListener('mouseup', (e) => {
      e.target.style.backgroundColor = '#E6E6FA';
    });

  });

});
