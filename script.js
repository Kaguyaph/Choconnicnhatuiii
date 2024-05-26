"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Iu beee:33";
  buttonsContainer.classList.add("hidden");
  catImg.src = 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.15752-9/341840030_1364711750976304_3828458471848033611_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TUfUwPoDpXQQ7kNvgG2bO_p&_nc_ht=scontent.fsgn2-6.fna&oh=03_Q7cD1QHBgrbsz_GgZSxh2wiYpGxHkse9d822FKtrCZ5iLcpYXQ&oe=667A56F1';
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "Khhh cukkk",
    "T-tui xinloiiii",
    "Connic tha loi cho t nhaaa😭",
    "dhaoifhfoafa😭😭😭",
    "Connic kh doi t nua nhaa",
    "Tui thic connic lam aa nen connic dung gian nua nhaa",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

const images = [
  'https://media.giphy.com/media/SVkhYVCi8fKPKvypi6/giphy.gif',
  'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.15752-9/393082784_1013869759692014_393534187091526528_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=og1xFNTYTFgQ7kNvgE10_Q4&_nc_ht=scontent.fsgn2-5.fna&oh=03_Q7cD1QGjbsLdqR3kgl63xrfBeYWACSOUFmY_iBUYJb8wl1ssJw&oe=667A3DB1',
  'https://scontent.fsgn2-8.fna.fbcdn.net/v/t1.15752-9/421956199_1766050493885323_8551121375008237753_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=t4UJnc6_lPYQ7kNvgH2UYSq&_nc_ht=scontent.fsgn2-8.fna&oh=03_Q7cD1QELud0g01KDBAdOwGHyU_1DrvWtu-E47mH25lpKQOLfiQ&oe=667A3CDF',
  'https://scontent.fsgn2-9.fna.fbcdn.net/v/t1.15752-9/423619249_1589446638494322_7834092961277136143_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Fvm5lnbNED8Q7kNvgHnsK88&_nc_ht=scontent.fsgn2-9.fna&oh=03_Q7cD1QFXD_vkloT39m4A-M857jqj4S58XB5j3d4iaTLm8Az2xw&oe=667A377C',
  'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/348225313_772028364302962_7585745409967187043_n.jpg?_nc_cat=111&_nc_cb=99be929b-ddd1f5c1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=26n1xmnIULsQ7kNvgGRemyj&_nc_ht=scontent.fsgn2-6.fna&oh=00_AYAhxehLcoeHyry0NO6cRf28xP9ARDhniQhWnl232TPquA&oe=66588A68',
  'https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.15752-9/436639991_2382260145301836_2624221202968978686_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=B7ifI6brW5sQ7kNvgGI8DMT&_nc_ht=scontent.fsgn2-7.fna&oh=03_Q7cD1QEIxzM_cV7vIwFUVIAjS7F7JiQTDf96EEq6osvw26adag&oe=667A3243'
];

function changeImage(imageIndex) {
  catImg.src = images[imageIndex];
}
function updateNoButtonText() {
    noButton.innerHTML = generateMessage(noCount);
}