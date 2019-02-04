const FormView = require('./views/form-view.js');
const ResultView = require('./views/result-view.js');
const PrimeChecker = require('./models/prime-checker.js');

document.addEventListener('DOMContentLoaded', () => {
  const formView = new FormView();
  formView.bindEvents();

  const primeChecker = new PrimeChecker();
  primeChecker.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();
});
