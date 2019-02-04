const PubSub = require('../helpers/pub-sub.js');

const ResultView = function() {

};

ResultView.prototype.bindEvents = function() {
  PubSub.subscribe("PrimeChecker:result", (event) => {
    const primeCheck = event.detail;
    this.displayResult(primeCheck);
  })
};

ResultView.prototype.displayResult = function(result) {
  const resultElement = document.querySelector("#result");
  resultElement.textContent = `Prime result: ${result}`;
};

module.exports = ResultView;
