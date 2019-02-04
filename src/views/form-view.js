const PubSub = require('../helpers/pub-sub.js');

const FormView = function(){

};

FormView.prototype.bindEvents = function(){
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputtedText = event.target.number.value;
    PubSub.publish('form-view:text-submitted', inputtedText);
  })
};

module.exports = FormView;
