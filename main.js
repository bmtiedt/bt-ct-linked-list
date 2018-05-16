  var inputTitle = document.querySelector('#website-title');
  var inputUrl = document.querySelector('#website-url');
  var makeBookmarkButton = document.querySelector('.make-bookmark-button');
  var inputsForm = document.querySelector('.inputs-form');

  var bookmarkList = document.querySelector('#bookmark-section-id');
  var bookmarkArticle = document.querySelector('#bookmark-article-id');


  inputTitle.addEventListener('keyup', toggleButton);
  inputUrl.addEventListener('keyup', toggleButton);
  
  inputsForm.addEventListener('submit', function(event) {
    event.preventDefault();
    handleFormSubmit();  
  });
  
  bookmarkList.addEventListener('click', function(event) {
    if(event.target.classList.contains('delete-button')){
      deleteBookmark(event.target);
    } else if (event.target.classList.contains('read-button')) {
      readBookmark(event.target);
    }
  });

  function readBookmark(element) {
    var article = element.parentNode.parentNode;
    if (article.classList.contains('read-button')) {
      article.classList.remove('read-button');
    } else {
    article.classList.add('read-button');      
    }
  }
  
  function deleteBookmark(element) {
    console.log(element.parentNode.parentNode);
    var article = element.parentNode.parentNode;
    article.remove();
  }
  
  
  function toggleButton () {
    if ((inputTitle.value === '') || (inputUrl.value === '')) {
      makeBookmarkButton.disabled = true;
    } else {
      makeBookmarkButton.disabled = false;
    }
  }

  function clearInputs(element) {
    element.value = '';
  }

  function disableButton(element) {
    element.setAttribute('disabled', 'disabled');
  }

  function handleFormSubmit() {
    if (inputTitle.value.length > 0 && inputUrl.value.length > 0) {    
      makeBookmarkItem(inputTitle.value, inputUrl.value);
      clearInputs(inputTitle);
      clearInputs(inputUrl);
      disableButton(makeBookmarkButton);
    }
  }

function makeBookmarkItem(bookmarkItemTitle, bookmarkItemUrl) {
  var bookMarks = document.createElement('article');
  bookMarks.innerHTML = (`
    <article class="bookmark-list-item" id="bookmark-article-id">
      <header class="bookmark-list-banner">
        <h2 class="bookmark-banner-element">${bookmarkItemTitle}</h2>
      </header>
      <span class="bookmark-list-link">
        <a class="bookmark-list-link-item">${bookmarkItemUrl}</a>
      </span>
      <nav class="bookmark-list-buttons">
        <button class="bookmark-list-button read-button">Read</button>
        <button class="bookmark-list-button delete-button" id="delete-button-id">Delete</button>
      </nav>
    </article>
    `);
  bookmarkList.append(bookMarks);
}

  

