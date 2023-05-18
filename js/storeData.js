const fullname = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('msg');
const allInput = document.querySelectorAll('.input');

const storeData = () => {
  const inputData = {
    inputName: fullname.value,
    inputEmail: email.value,
    inputText: message.value,
  };
  const inputStr = JSON.stringify(inputData);
  localStorage.setItem('DataFromUser', inputStr);
};

allInput.forEach((input) => {
  input.addEventListener('input', storeData);
});
