const body = document.querySelector("body");
const spanTags = document.querySelector(".js-tags");
const IMG_NUMBER = 100;
const IMG_SEARCH = "landscape";

var URL = `https://pixabay.com/api/?key=${BG_API_KEY}&q=${IMG_SEARCH}&image_type=photo&per_page=100`;

function getImage(number) {
  console.log(URL);
  fetch(URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const imageURL = json.hits[number].largeImageURL;
      const tags = json.hits[number].tags;
      const image = new Image();
      console.log(tags);

      // image.src = `/images/${imageNumber + 1}.jpg`;
      spanTags.innerText = tags;
      spanTags.classList.add("tags");

      image.src = imageURL;
      image.classList.add("bgImage");
      //body.appendChild(image);
      body.prepend(image);
    });
}

function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = getRandom();
  getImage(randomNumber);
  console.log(randomNumber);
}

init();
