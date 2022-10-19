/** Exercise 02 - Reverse **/

// Add your code here
let result = '';
let message = document.createElement('p');
message.className = 'mt-4 mb-1';

document.getElementById('reverse').onclick = () => {
  let inputNumber = document.querySelector('#input').value;

  if (inputNumber.length !== 8) {
    result += 'Error: Please input an 8-digit number';
    message.style.color = 'red';
  } else {
    result = inputNumber + ' --> ';
    result += inputNumber.split('').reverse().join('');
    message.style.color = 'green';
  }

  message.textContent = result;
};

const main = document.querySelector('main');
main.append(message);
