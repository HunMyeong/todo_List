const images = [ "1.bmp", "2.bmp", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `Images/${chosenImage}`;

document.body.appendChild(bgImage);