'use strict';

function largeChange(formEvnt) {
  formEvnt.preventDefault();
  let changeFontColor = document.querySelector('#main-color').value;
  let changeBackColor = document.querySelector('#colorChange').value;
  let fontAdjustment = document.querySelector('#fontSize').value;
  let allParagraphElements = document.querySelectorAll('p');
  
  console.log(allParagraphElements);
}

function primary() {
  let pythonFormChange = document.querySelector('#pythonForm');
  pythonFormChange.addEventListener('submit', largeChange);
  largeChange();
}

primary();