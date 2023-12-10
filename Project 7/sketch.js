var animeList = [
  {
    animeName: "Attack On Titan",
    favorites: 3814832,
    favoriteCount: "3,814,832",
    genre: "Action, Drama, Suspense",
    barX: 0,
    barY: 0
  },
  {
    animeName: "Death Note",
    favorites: 3782284,
    favoriteCount: "3,782,284",
    genre: "Supernatural, Suspense",
    barX: 0,
    barY: 0
  },
  {
    animeName: "Fullmetal Alchemist: Brotherhood",
    favorites: 3226008,
    favoriteCount: "3,226,008",
    genre: "Action, Adventure, Drama, Fantasy",
    barX: 0,
    barY: 0
  },
  {
    animeName: "One Punch Man",
    favorites: 3116116,
    favoriteCount: "3,116,116",
    genre: "Action, Comedy",
    barX: 0,
    barY: 0
  },
  {
    animeName: "Sword Art Online",
    favorites: 2995503,
    favoriteCount: "2,995,503",
    genre: "Action, Adventure, Fantasy, Romance",
    barX: 0,
    barY: 0
  },
  {
    animeName: "My Hero Academia",
    favorites: 2993745,
    favoriteCount: "2,993,745",
    genre: "Action",
    barX: 0,
    barY: 0
  },
  {
    animeName: "Demon Slayer",
    favorites: 2893496,
    favoriteCount: "2,893,496",
    genre: "Action, Fantasy",
    barX: 0,
    barY: 0
  },
  {
    animeName: "Naruto",
    favorites: 2768652,
    favoriteCount: "2,768,652",
    genre: "Action, Adventure, Fantasy",
    barX: 0,
    barY: 0,
  },
  {
    animeName: "Tokyo Ghoul",
    favorites: 2743362,
    favoriteCount: "2,743,362",
    genre: "Action, Fantasy, Horror",
    barX: 0,
    barY: 0,
  },
  {
    animeName: "Hunter x Hunter",
    favorites: 2719970,
    favoriteCount: "2,719,970",
    genre: "Action, Adventure, Fantasy",
    barX: 0,
    barY: 0,
  }
];

var currentBar = 0;
let imgAttackOnTitan, imgDeathNote, imgFullmetalAlchemist, imgOnePunchMan, imgSwordArtOnline, imgMyHeroAcademia, imgDemonSlayer, imgNaruto, imgTokyoGhoul, imgHunterxHunter;

function preload() {
  imgAttackOnTitan = loadImage('https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/10/19/11/attack-on-titan.jpg?quality=75&width=990&crop=3%3A2%2Csmart&auto=webp');
  imgDeathNote = loadImage('https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg');
  imgFullmetalAlchemist = loadImage('https://upload.wikimedia.org/wikipedia/en/7/7e/Fullmetal_Alchemist_Brotherhood_key_visual.png');
  imgOnePunchMan = loadImage('https://m.media-amazon.com/images/M/MV5BZjJlNzE5YzEtYzQwYS00NTBjLTk5YzAtYzUwOWQyM2E3OGI2XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg');
  imgSwordArtOnline = loadImage('https://m.media-amazon.com/images/M/MV5BYjY4MDU2YjMtNzY1MC00ODg1LWIwMzYtMWE5YTA3YTI4ZjMxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg');
  imgMyHeroAcademia = loadImage('https://m.media-amazon.com/images/M/MV5BOGZmYjdjN2UtNjAwZi00YmEyLWFhNTEtNjM1OTc5ODg0MGEyXkEyXkFqcGdeQXVyMTA1NjQyNjkw._V1_.jpg');
  imgDemonSlayer = loadImage('https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg');
  imgNaruto = loadImage('https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg');
  imgTokyoGhoul = loadImage('https://m.media-amazon.com/images/I/615UoMEsDEL._AC_UF894,1000_QL80_.jpg');
  imgHunterxHunter = loadImage('https://m.media-amazon.com/images/M/MV5BNGM0YTk3MWEtN2JlZC00ZmZmLWIwMDktZTMxZGE5Zjc2MGExXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg');
}

function setup() {
  createCanvas(800, 600);
  for (var anime = 0; anime < animeList.length; anime++) {
    animeList[anime].barX = 50 + anime * 60 + anime * 10;
    animeList[anime].barY = map(animeList[anime].favorites, 0, 4000000, height - 100, 100);
  }
}

function draw() {
  background(244, 117, 33);
  title();
  bars();
  infoBox(currentBar, animeList[currentBar].barX, animeList[currentBar].barY);
}

function mousePressed() {
  for (var bar = 0; bar < animeList.length; bar++) {
    if (mouseX > animeList[bar].barX && mouseX < animeList[bar].barX + 80 && mouseY > animeList[bar].barY && mouseY < height) {
      currentBar = bar;
    }
  }
}

function title() {
  fill(255);
  textAlign(CENTER);
  textSize(25);
  text("10 Most Watched Anime by MyAnimeList Favorites", 400, 70);
  textSize(15);
  text("(October 9, 2023)", 400, 30);
}

function bars() {
  for (var anime = 0; anime < animeList.length; anime++) {
    stroke(255);
    rectMode(CORNERS);
    rect(animeList[anime].barX, animeList[anime].barY, animeList[anime].barX + 60, height);
    rectMode(CORNER);
    
    if (anime === 0) {
      image(imgAttackOnTitan, animeList[anime].barX, animeList[anime].barY, 60, height - animeList[anime].barY);
    } else if (anime === 1) {
      image(imgDeathNote, animeList[anime].barX, animeList[anime].barY, 60, height - animeList[anime].barY);
    } else if (anime === 2) {
      image(imgFullmetalAlchemist, animeList[anime].barX, animeList[anime].barY, 60, height - animeList[anime].barY);
    } else if (anime === 3) {
      image(imgOnePunchMan, animeList[anime].barX, animeList[anime].barY, 60, height - animeList[anime].barY);
    } else if (anime === 4) {
      image(imgSwordArtOnline, animeList[anime].barX, animeList[anime].barY, 60, height - animeList[anime].barY);
    } else if (anime === 5) {
      image(imgMyHeroAcademia, animeList[anime].barX, animeList[anime].barY, 60, height - animeList[anime].barY);
    } else if (anime === 6) {
      image(imgDemonSlayer, animeList[anime].barX, animeList[anime].barY, 60, height - animeList[anime].barY);
    } else if (anime === 7) {
      image(imgNaruto, animeList[anime].barX, animeList[anime].barY, 60, height - animeList[anime].barY);
    } else if (anime === 8) {
      image(imgTokyoGhoul, animeList[anime].barX, animeList[anime].barY, 60, height - animeList[anime].barY);
    } else if (anime === 9) {
      image(imgHunterxHunter, animeList[anime].barX, animeList[anime].barY, 60, height - animeList[anime].barY);
    }
  }
}

function infoBox(bar, x, y) {
  fill(244, 117, 33);
  stroke(255);
  strokeWeight(5);
  strokeJoin(ROUND);
  if (bar == 0) {
    rect(x + 65, y, 300, 90);
    infoText(bar, x + 65, y);
  } else if (bar >= 7) {
    rect(animeList[6].barX, animeList[6].barY - 100, 300, 90);
    infoText(bar, animeList[6].barX, animeList[6].barY - 100);
  } else {
    rect(x, y - 100, 300, 90);
    infoText(bar, x, y - 100);
  }
}

function infoText(bar, x, y) {
  fill(255);
  stroke(0);
  strokeWeight(5);
  textAlign(CENTER);
  text(animeList[bar].animeName, x + 150, y + 30);
  text("MyAnimeList Favorites: " + animeList[bar].favoriteCount, x + 150, y + 50);
  text("Genre: " + animeList[bar].genre, x + 150, y + 70);
}