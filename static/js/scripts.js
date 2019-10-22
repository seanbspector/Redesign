'use strict';

function clickHandlers() {
  if (event.target.matches('#pull')) {
    showMenu();
    event.preventDefault();
  }
  if (event.target.matches('.content-video a')) {
    videoSwitch();
    event.preventDefault();
  }
  if (event.target.matches('.image-tn img')) {
    runCarousel();
    event.preventDefault();
  }
}

function runCarousel() {
  const imageHref = event.target.parentNode.getAttribute('href');
  const titleText = event.target.title;
  document.querySelector('figure img').setAttribute('src', imageHref);
  document.querySelector('figcaption').innerHTML = titleText;
}

var showMenu = function() {
  document.querySelector('body').classList.toggle('show-nav');
};

var videoSwitch = function() {
  const iFrame = document.querySelector('iframe');
  const videoLinks = document.querySelectorAll('.content-video a');
  videoLinks.forEach(videoLink => videoLink.classList.remove('active'));
  event.target.classList.add('active');
  const videoToPlay = event.target.getAttribute('href');
  iFrame.setAttribute('src', videoToPlay);
};

// BLOG
var addContent = function(data) {
  var looped = '';
  for (let i = 0; i < data.results.length; i++) {
    looped += `
      <div class="item">
        <h3>${data.results[i].title}</h3>
        <p>${data.results[i].abstract}</p>
      </div>
      `;
  }
  document.querySelector('.content div').innerHTML = looped;
};

var getData = function() {
  fetch(nyt)
    .then(response => response.json())
    .then(json => addContent(json));
};

var nyt =
  'https://api.nytimes.com/svc/topstories/v2/nyregion.json?api-key=uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0';

document.addEventListener('click', clickHandlers);

if (document.querySelector('.blog')) {
  getData();
}
