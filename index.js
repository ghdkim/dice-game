const randomNumber1 = Math.floor(Math.random() * 6 + 1);

const image1 = document.querySelector(".img1");
image1.src = `images/dice${randomNumber1}.png`;

const randomNumber2 = Math.floor(Math.random() * 6 + 1);

const image2 = document.querySelector(".img2");
image2.src = `images/dice${randomNumber2}.png`;

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 2 wins!";
} else {
  document.querySelector("h1").innerHTML = "❎ Draw!";
}
