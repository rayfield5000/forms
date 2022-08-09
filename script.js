'use strict';

function listChange() {
  let mixedList = document.querySelector('ul');
  
}

function changeForm(formEvnt) {
  formEvnt.preventDefault();
  let paragraphElements = document.querySelectorAll('p');
  
}

function primary() {
  let formSubmission = document.querySelector('#pythonForm');
  formSubmission.addEventListener('submit', changeForm);
}

primary();