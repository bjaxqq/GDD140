let img;
let imageUrls = [
  "https://upload.wikimedia.org/wikipedia/commons/c/c5/LakeAshi_and_MtFuji_Hakone.JPG",
  "https://upload.wikimedia.org/wikipedia/commons/4/43/Lake_Tazawa_and_Kansa-g%C5%AB_20210213.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/d/de/Lake_Kutcharo_20171026.jpg"
];

function preload() {
  let randomIndex = floor(random(imageUrls.length));
  img = loadImage(imageUrls[randomIndex]);
}

function setup() {
  createCanvas(600, 500);
  img.resize(600, 500);
  image(img, 0, 0);
  img.loadPixels();

  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      if (x < img.width / 2) {
        let c = img.get(x, y);
        let gray = red(c) * 0.3 + green(c) * 0.59 + blue(c) * 0.11;
        img.set(x, y, color(gray, gray, gray));
      }
    }
  }

  img.updatePixels();
  image(img, 0, 0, img.width, img.height);
}