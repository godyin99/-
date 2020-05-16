let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('请输入您的名字');
  if(!myName||myName === null) {
  setUserName();
  } else {
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla 酷毙了，'+ myName;
  }
};

if(!localStorage.getItem('name')) {
  setUserName();
  } else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  };

myButton.onclick = function() {
  setUserName();
}
let myImage = document.querySelector('img');
  myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
      if(mySrc === 'images/website-screenshot.png') {
      myImage.setAttribute('src', 'images/Firefox.png')
    } else {
        myImage.setAttribute('src', 'images/website-screenshot.png');
        }
  }
