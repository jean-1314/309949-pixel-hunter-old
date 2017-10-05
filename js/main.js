import {showScreen} from './show-screen.js';
import intro from './intro.js';

// const Arrows = {
//   LEFT: 37,
//   RIGHT: 39
// };

// const introScreen = document.querySelector(`#intro`);
// const greetingScreen = document.querySelector(`#greeting`);
// const rulesScreen = document.querySelector(`#rules`);
// const firstGameScreen = document.querySelector(`#game-1`);
// const secondGameScreen = document.querySelector(`#game-2`);
// const thirdGameScreen = document.querySelector(`#game-3`);
// const statsScreen = document.querySelector(`#stats`);
// const main = document.querySelector(`#main`);
const mainScreen = document.querySelector(`.central`);

// const screens = [greetingScreen, rulesScreen, firstGameScreen, secondGameScreen, thirdGameScreen, statsScreen];

// const getTemplate = (data) => {
//   return [].filter.call(data.childNodes, (node) => {
//     return node.tagName === `DIV`;
//   });
// };

showScreen(intro);

// let i = 1;

// document.addEventListener(`keydown`, function (evt) {
//   const count = screens.length;
//   const currentScreen = getTemplate(mainScreen);

//   if (i === 0) {
//     i++;
//   }

//   if (evt.altKey && evt.keyCode === Arrows.RIGHT) {
//     if (count !== i) {
//       showScreen(screens[i], currentScreen[0]);
//       i++;
//     }
//   }

//   if (evt.altKey && evt.keyCode === Arrows.LEFT) {
//     i--;
//     if (i >= 0 && i <= count) {
//       if (i === 0) {
//         i = 1;
//       }
//       showScreen(screens[i - 1], currentScreen[0]);
//     }
//   }
// });

export {mainScreen};
