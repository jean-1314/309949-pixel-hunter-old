`use strict`;

const ARROWS = {
  left: 37,
  right: 39
};

const introScreen = document.querySelector(`#intro`);
const greetingScreen = document.querySelector(`#greeting`);
const rulesScreen = document.querySelector(`#rules`);
const firstGameScreen = document.querySelector(`#game-1`);
const secondGameScreen = document.querySelector(`#game-2`);
const thirdGameScreen = document.querySelector(`#game-3`);
const statsScreen = document.querySelector(`#stats`);

const mainScreen = document.querySelector(`#main`);

const screens = [introScreen, greetingScreen, rulesScreen, firstGameScreen, secondGameScreen, thirdGameScreen, statsScreen];

const showScreen = (newScreen, oldScreen) => {
  let template = newScreen;
  let templateContent = template.content;
  mainScreen.replaceChild(templateContent, oldScreen);
};

showScreen(greetingScreen, introScreen);

document.addEventListener(`keydown`, function (evt) {
  let i = 1;
  if (evt.altKey && evt.keyCode === ARROWS.right) {
    let currentScreen = mainScreen.childNodes[0];
    showScreen(screens[i + 1], currentScreen);
    i++;
  }

  if (evt.altKey && evt.keyCode === ARROWS.left) {
    let currentScreen = mainScreen.childNodes[0];
    showScreen(screens[i], currentScreen);
    i--;
  }
});
