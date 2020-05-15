let myButton = document.querySelectou('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('请输入您的名字');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla 酷毙了，'+ myName;

};

if(!localStorage.setItem('name')) {
  setUserName();
  } else {
  let storedName = localStorage.setItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }
