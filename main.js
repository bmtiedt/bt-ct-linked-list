  var inputTitle = document.querySelector('#website-title');
  var inputUrl = document.querySelector('#website-url');
  var inputsForm = document.querySelector('.inputs-form');
  var makeBookmarkButton = document.querySelector('.make-bookmark-button');
  var mainButtonSection = document.querySelector('.main-button-section');
  var bookmarkMadeCount = document.querySelector('.bookmark-made-counter');
  var bookmarkReadCount = document.querySelector('.bookmark-read-counter');
  var bookmarkUnreadCount = document.querySelector('.bookmark-unread-counter');
  var bookmarkList = document.querySelector('#bookmark-section-id');
  var bookmarkArticle = document.querySelector('#bookmark-article-id');


  inputTitle.addEventListener('keyup', toggleButton);
  inputUrl.addEventListener('keyup', toggleButton);
  
  inputsForm.addEventListener('submit', function(event) {
    event.preventDefault();
    handleFormSubmit();
    totalBookmarks();
    clearReadBookmarks();
  });
  
  bookmarkList.addEventListener('click', function(event) {
    if(event.target.classList.contains('delete-button')){
      deleteBookmark(event.target);
      totalBookmarks();
    } else if (event.target.classList.contains('read-button')) {
     readBookmark(event.target);
     totalBookmarks();
    }
  })

  // mainButtonSection.addEventListener('click', function(event) {
  //   if(event.target.classList.contains('main-button-section')) {
  //     clearAllReadBookmarks();
  //   }
  // }

  // function clearAllReadBookmarks() {
    
  // }

  function totalBookmarks() {
    notReadCount = document.querySelectorAll('.not-read').length;
    readCount = document.querySelectorAll('.read').length;
    console.log(notReadCount);
    console.log(readCount);
    bookmarkMadeCount.innerText = 'Bookmark Count: ' + (notReadCount + readCount);
    bookmarkReadCount.innerText = 'Read Count: ' + readCount;
    bookmarkUnreadCount.innerText = 'Unread Count: ' + notReadCount;
  }

  function readBookmark(element) {
    var article = element.parentNode.parentNode;
    if (article.classList.contains('read')) {
      article.classList.remove('read');
      article.classList.add('not-read');
    } else {
      article.classList.add('read');
      article.classList.remove('not-read');
    }
  }
  
  function deleteBookmark(element) {
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

// function clearReadBookmarks(element) {
//   var clearAllButton = document.createElement('article');
//   clearAllButton.innerHTML = (`
//     <article>
//       <button class="clear-all-button">Clear All</button>
//     </article>`); 
//   mainButtonSection.append(clearAllButton);
// }

function makeBookmarkItem(bookmarkItemTitle, bookmarkItemUrl) {
  var bookMarks = document.createElement('article');
  bookMarks.innerHTML = (`
    <article class="bookmark-list-item not-read" id="bookmark-article-id">
      <header class="bookmark-list-banner">
        <h2 class="bookmark-banner-element">${bookmarkItemTitle}</h2>
      </header>
      <span class="bookmark-list-link">
        <a href="${bookmarkItemUrl}" class="bookmark-list-link-item">${bookmarkItemUrl}</a>
      </span>
      <nav class="bookmark-list-buttons">
        <button class="bookmark-list-button read-button">Read</button>
        <button class="bookmark-list-button delete-button" id="delete-button-id">Delete</button>
      </nav>
    </article>
    `);
  bookmarkList.append(bookMarks);
}

  

