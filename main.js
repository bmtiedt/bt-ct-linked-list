(function () {
  var inputTitle = document.querySelector('#website-title');
  var inputUrl = document.querySelector('#website-url');
  var makeBookmarkButton = document.querySelector('.make-bookmark-button');
  var inputsForm = document.querySelector('.inputs-form');
  var clearButton = document.querySelector('#clear-button');
  var bookmarkSection = document.querySelector('#bookmark-section-id');

  clearButton = addEventListener('click', clearAllBookmarks);

  inputsForm.addEventListener('submit', function(event) {
  event.preventDefault();
  handleFormSubmit();  
  });

  inputTitle.addEventListener('keyup', function() {
    makeBookmarkButton.removeAttribute('disabled', '');
  });

  inputUrl.addEventListener('keyup', function() {
    makeBookmarkButton.removeAttribute('disabled', '');
  });

  bookmarkSection.addEventListener('click', function (event) { 
    console.log('A')   
    if(event.target.innerText.toLowerCase() === 'read') {
      toggleReadClass(event.target);
    }
    if(event.target.innerText.toLowerCase() === 'delete') {
      deleteListItem(event.target);
    }
  });



  function clearInputs(element) {
    return element.value = '';
  }

  function disableButton(element) {
    return element.setAttribute('disabled', 'disabled');
  }

  function handleFormSubmit() {
    var title = inputTitle.value;
    var url = inputUrl.value;
    console.log('B');
    if (title.length > 0 && url.lrngth > 0) {    
      makeBookmarkItem(title, url);
      clearInputs(inputForm);
      clearInputs(inputUrl);
      disableButton(bookmarkButton);
    }
  }

  function makeBookmarkItem(bookmarkItemTitle, bookmarkItemUrl) {
    var bookmarkList = document.querySelector('#bookmark-section-id');
    var bookmarkItem = document.createElement('article');
    var banner = document.createElement('.banner');
    var bannerElement = document.createElement('h2');
    var bookmarkWrapper = document.createElement('span');
    var bookmarkLink = document.createElement('a');
    var nav = document.createElement('nav');
    var readButton = document.createElement('button');
    var deleteButton = document.createElement('button');

    bookmarkItem.className = 'bookmark-list-item';
    banner.className = 'bookmark-list-banner';
    bannerElement.className = 'bookmark-banner-element';
    bookmarkWrapper.className = 'bookmark-list-link';
    bookmarkLink.className = 'bookmark-list-link-item';
    nav.className = 'bookmark-list-buttons';
    readButton.className = 'bookmark-list-button';
    deleteButton.className = 'bookmark-list-button';

    bannerElement.innerText = bookmarkItemTitle;

    bookmarkLink.innerText = bookmarkItemUrl;
    bookmarkList.setAttribute('herf', bookmarkItemUrl);
    bookmarkList.setAttribute('target', '_blank');

    readButton.innerText = 'Read';
    deleteButton.innerText = 'delete';

    bookmarkList.appendChild(bookmarkItem);
    bookmarkItem.appendChild(banner);
    banner.appendChild(bannerElement);

    bookmarkItem.appendChild(bookmarkWrapper);
    bookmarkWrapper.appendChild(bookmarkLink);

    boookmarkItem.appendChild(nav);
    nav.appendChild(readButton);
    nav.appendChild(deleteButton);

    clearButton.style.display = 'block';
  }


  function toggleReadClass(element) {
    var childElement = element;
    while (childElement) {
      childElement = childElement.parentNode;
      if (childElement.parentNode.classList.contains('bookmarkListItem')) {
        childElement.parentNode.classList.toggle('read');
        break;
      }
    }
  }

  function deleteBookmark(element) {
    var childElement = element;
    while (childElement) {
      childElement = childElement.parentNode;
      if (childElement.parentNode.classList.contains('bookmarkListItem')) {
        childElement.parentNode.remove();
        break;
      }
    }
  }

  
  function clearAllBookmarks() {
  while (bookmarkSection.firstChild) {
    bookmarkSection.removeChild(bookmarkSection.firstChild);
  }
  // clearButton.style.display = 'none';
}

function setInnerText(element, string) {
  return element.innerText = string;
}
})();

