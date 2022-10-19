/** Exercise 03 - Form **/

// Add your code here
const form = document.querySelector('form');

// name input div block
const nameDiv = element('div', 'mb-3');
nameDiv.append(label('name', 'form-label', 'Name *'));
const nameInput = element('input', 'form-control');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('id', 'name');
nameInput.setAttribute('placeholder', 'Your name');
nameDiv.append(nameInput);
form.append(nameDiv);

// email input div block
const emailDiv = element('div', 'mb-3');
emailDiv.append(label('email', 'form-label', 'Email *'));
const emailInput = element('input', 'form-control');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('id', 'email');
emailInput.setAttribute('placeholder', 'abc@pdx.edu');
emailDiv.append(emailInput);
form.append(emailDiv);

// message div block
const messageDiv = element('div', 'mb-3');
messageDiv.append(label('message', 'form-label', 'Submit your message:'));
const messageInput = element('textarea', 'form-control');
messageInput.setAttribute('id', 'message');
messageInput.setAttribute('rows', '3');
messageInput.setAttribute('placeholder', 'Hellow there!');
messageDiv.append(messageInput);
form.append(messageDiv);

// check box div block
const checkDiv = element('div', 'mb-3 form-check');
const checkBox = element('input', 'form-check-input');
checkBox.setAttribute('type', 'checkbox');
checkBox.setAttribute('id', 'checkbox');
checkDiv.append(checkBox);
checkDiv.append(
  label('checkbox', 'form-check-label', 'Sign up for the newsletter')
);
form.append(checkDiv);

// buttons block
const buttonsDiv = element('div', 'btns mb-3 d-flex');
const submitButton = element('input', 'btn btn-primary flex-fill mx-1');
const resetButton = element('input', 'btn btn-secondary flex-fill mx-1');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('value', 'Submit');
resetButton.setAttribute('type', 'reset');
resetButton.setAttribute('value', 'Reset');
buttonsDiv.append(submitButton);
buttonsDiv.append(resetButton);
form.append(buttonsDiv);

function label(forValue, classValue, contentValue) {
  const label = document.createElement('label');
  label.setAttribute('class', classValue);
  label.setAttribute('for', forValue);
  label.textContent = contentValue;
  return label;
}

function element(elementName, classValue) {
  const element = document.createElement(elementName);
  element.setAttribute('class', classValue);
  return element;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  const checkbox = form.elements.checkbox.checked;

  if (!name || !email) {
    console.warn('Name and email are both required');
  } else {
    console.log('========= Form Submission =========');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Feedback: ${message ? message : `no submission`}`);
    console.log(`Newsletter: ${checkbox ? `Yes` : `No`}`);
  }
});
