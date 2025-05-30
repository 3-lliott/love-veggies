images = [
  "./images/pink.jpeg",
  "./images/black.jpeg",
  "./images/blue.jpeg",
  "./images/green.jpeg",
];
let index = 0;

function swapImage() {
  index = (index + 1) % images.length;
  document.getElementById("myImage").src = images[index];
}
