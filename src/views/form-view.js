const PubSub = require('../helpers/pub_sub.js');

const FormView = function(){

};

FormView.prototype.bindEvents = function(){
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputtedText = event.target.text.value;
    PubSub.publish('form-view:text-submitted', inputtedText)
  })
};

module.exports = FormView;
