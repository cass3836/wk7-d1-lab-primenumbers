const PubSub = require('../helpers/pub_sub.js');

const PrimeChecker = function(){

};

PrimeChecker.prototype.bindEvents = function() {
  PubSub.subscribe('form-view:text-submitted', (event) => {
    const inputtedText = event.detail;
    const result = this.numberIsPrime(inputtedText);
    console.log("number: ", result);
    PubSub.publish("PrimeChecker:result", result);
  })
};

PrimeChecker.prototype.numberIsPrime = function (number) {
 if (number <= 1) {
   return false;
 }
 for (let i = 2; i < number; i++) {
   if (number % i === 0) {
       return false;
   }
 }
 return true;
};

module.exports = PrimeChecker;
