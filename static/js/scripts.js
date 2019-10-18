'use strict';

function clickHandlers() {
  console.log(event.target);
  if (event.target.matches('#pull')) {
    document.querySelector('body').classList.toggle('show-nav');
    event.preventDefault();
  }
}

// video
const iFrame = document.querySelector('iframe');
const videoLinks = document.querySelectorAll('.content-video a');
videoLinks.forEach(videoLink =>
  videoLink.addEventListener('click', selectVideo),
);

function selectVideo() {
  removeActiveClass(); // NEW
  this.classList.add('active'); // NEW
  const videoToPlay = event.target.getAttribute('href');
  iFrame.setAttribute('src', videoToPlay);
  event.preventDefault();
}

// NEW
function removeActiveClass() {
  videoLinks.forEach(videoLink => videoLink.classList.remove('active'));
}
// end video

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

// getData();

if (document.querySelector('.blog')) {
  getData();
}
