  var inputTitle = document.querySelector('#website-title');
  var inputUrl = document.querySelector('#website-url');
  var makeBookmarkButton = document.querySelector('.make-bookmark-button');
  var inputsForm = document.querySelector('.inputs-form');
  // var clearButton = document.querySelector('#clear-button');
  var bookmarkList = document.querySelector('#bookmark-section-id');


  // clearButton.addEventListener('click', clearAllBookmarks);
  inputTitle.addEventListener('keyup', toggleButton);
  inputUrl.addEventListener('keyup', toggleButton);
  
  // makeBookmarkButton.addEventListener('click', handleFormSubmit);
  
  inputsForm.addEventListener('submit', function(event) {
    event.preventDefault();
    handleFormSubmit();  
  });
  
  function toggleButton () {
    if ((inputTitle.value === '') || (inputUrl.value === '')) {
      makeBookmarkButton.disabled = true;
    } else {
      makeBookmarkButton.disabled = false;
    }
  }

  // bookmarkSection.addEventListener('click', function (event) { 
  //   console.log('A')
  //   if(event.target.innerText.toLowerCase() === 'read') {
  //     toggleReadClass(event.target);
  //   }
  //   if(event.target.innerText.toLowerCase() === 'delete') {
  //     deleteListItem(event.target);
  //   console.log('A')
  //   }
  // });

  function clearInputs(element) {
    element.value = '';
    console.log('a');
  };

  function disableButton(element) {
    element.setAttribute('disabled', 'disabled');
    console.log('b')
  };

  function handleFormSubmit() {
    console.log(inputTitle.value)
    // var title = inputTitle.value;
    // var url = inputUrl.value;
    if (inputTitle.value.length > 0 && inputUrl.value.length > 0) {    
      makeBookmarkItem(inputTitle.value, inputUrl.value);
      clearInputs(inputTitle);
      clearInputs(inputUrl);
      disableButton(makeBookmarkButton);
      console.log('a1');
    }
  };

function makeBookmarkItem(bookmarkItemTitle, bookmarkItemUrl) {
  // console.log(bookmarkItemTitle);
  var bookMarks = document.createElement('article');
  bookMarks.innerHTML = (`
    <article class="bookmark-list-item">
      <header class="bookmark-list-banner">
        <h2 class="bookmark-banner-element">${bookmarkItemTitle}</h2>
      </header>
      <span class="bookmark-list-link">
        <a class="bookmark-list-link-item">${bookmarkItemUrl}</a>
      </span>
      <nav class="bookmark-list-buttons">
        <button class="bookmark-list-button">read</button>
        <button class="bookmark-list-button">delete</button>
      </nav>
    </article>
    `)
  bookmarkList.append(bookMarks);
  console.log('B5')
};


    // var bookmarkItem = document.createElement('article');
    // var banner = document.createElement('header');
    // var bannerElement = document.createElement('h2');
    // var bookmarkWrapper = document.createElement('span');
    // var bookmarkLink = document.createElement('a');
    // var nav = document.createElement('nav');
    // var readButton = document.createElement('button');
    // var deleteButton = document.createElement('button');


    // bookmarkItem.className = 'bookmark-list-item';
    // banner.className = 'bookmark-list-banner';
    // bannerElement.className = 'bookmark-banner-element';
    // bookmarkWrapper.className = 'bookmark-list-link';
    // bookmarkLink.className = 'bookmark-list-link-item';
    // nav.className = 'bookmark-list-buttons';
    // readButton.className = 'bookmark-list-button';
    // deleteButton.className = 'bookmark-list-button';

    // bannerElement.innerText = bookmarkItemTitle;
    // bookmarkLink.innerText = bookmarkItemUrl;

    // bookmarkList.setAttribute('href', bookmarkItemUrl);
    // bookmarkList.setAttribute('target', '_blank');

    // readButton.innerText = 'read';
    // deleteButton.innerText = 'delete';

    // bookmarkList.appendChild(bookmarkItem);
    // bookmarkItem.appendChild(banner);
    // banner.appendChild(bannerElement);


  //   bookmarkItem.appendChild(bookmarkWrapper);
  //   bookmarkWrapper.appendChild(bookmarkLink);


  //   bookmarkItem.appendChild(nav);
  //   nav.appendChild(readButton);
  //   nav.appendChild(deleteButton);

  //   clearButton.style.display = 'block';
  // }

  // function toggleReadClass(element) {
  //   var childElement = element;
  //   while (childElement) {
  //     childElement = childElement.parentNode;
  //     if (childElement.parentNode.classList.contains('bookmarkListItem')) {
  //       childElement.parentNode.classList.toggle('read');
  //       break;
  //     }
  //   }
  // }
    

  // function deleteBookmark(element) {
  //   var childElement = element;
  //   while (childElement) {
  //     childElement = childElement.parentNode;
  //     if (childElement.parentNode.classList.contains('bookmarkListItem')) {
  //       childElement.parentNode.remove();
  //       break;
  //     }
  //   }
  // }

  
  // function clearAllBookmarks() {
  // while (bookmarkSection.firstChild) {
  //   bookmarkSection.removeChild(bookmarkSection.firstChild);
  // }
  // clearButton.style.display = 'none';
// }


// function setInnerText(element, string) {
//   element.innerText = string;
// }
// })();

