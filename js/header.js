import {initialState} from './data.js';
import {getElementFromTemplate} from './get-element.js';

const header = getElementFromTemplate(`
  <header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
  </header>
`);

const headerData = getElementFromTemplate(`
  <h1 class="game__timer">${initialState.time}</h1>
  <div class="game__lives">
    ${new Array(3 - initialState.lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
    ${new Array(initialState.lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
  </div>
`);

const renderHeader = () => header.cloneNode(true);

export {renderHeader, headerData};
