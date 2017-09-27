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
  if (evt.altKey && evt.keyCode === ARROWS.right) {
    let currentScreen = mainScreen.childNodes[0];
    for (let i = 0; i < screens.length; i++) {
      showScreen(screens[i + 1], currentScreen);
      console.log(screens[i]);
    }
  }
});
