var inputTitle = document.querySelector('#website-title');
var inputUrl = document.querySelector('#website-url');
var makeBookmarkButton = document.querySelector('.make-bookmark-button');
var bookmarkSection = document.querySelector('.bookmark-section');
var inputsForm = document.querySelector('.inputs-form');

inputsForm.addEventListener('submit', function(event) {
  event.preventDefault();
  // handleFormSubmit();
  console.log('Boom Pow!!!');
})

inputTitle.addEventListener('keydown', function() {
  makeBookmarkButton.removeAttribute('disabled', '');
})

inputUrl.addEventListener('keydown', function() {
  makeBookmarkButton.removeAttribute('disabled', '');
})

function clearInputs(element) {
  return element.value = '';
}

function disableButton(element) {
  return element.setAttribute('disabled', 'disabled');
}