var inputTitle = document.querySelector('.inputTitle');
var inputUrl = document.querySelector('.inputUrl');
var makeBookmarkButton = document.querySelector('.makeBookmarkButton');
var bookmarkSection = document.querySelector('.bookmarkSection');
var inputsForm = document.querySelector('.inputsForm');

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