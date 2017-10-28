import renderStats from './stats';
import {renderHeader, headerData} from "./header";
import renderFooter from "./footer";
import GameLevelBase from "./game-level-base";

export default class GameLevelTwoOfTwo extends GameLevelBase {

  __prepareLevelTemplate(params) {
    return `
    <div class="game">
    <p class="game__task">${params.question}</p>
    <form class="game__content">
      <div class="game__option">
        <img src="${params.answers[0].image.url}" alt="Option 1" width="${params.answers[0].image.width}" height="${params.answers[0].image.height}">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="${params.answers[1].image.url}" alt="Option 2" width="${params.answers[1].image.width}" height="${params.answers[1].image.height}">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
  </div>
    `;
  }

  __checkAnswer() {
    // const questionOneArray = Array.from(this.__gameScreenRendered.querySelectorAll(`[name='question1']`));
    // const questionTwoArray = Array.from(this.__gameScreenRendered.querySelectorAll(`[name='question2']`));
    this.__sendAnswer({});
  }

  __renderLevelScreen() {
    const gameScreenRendered = this.__templateFragment.cloneNode(true);
    gameScreenRendered.prepend(renderHeader());
    const header = gameScreenRendered.querySelector(`header`);
    header.appendChild(headerData);
    gameScreenRendered.appendChild(renderStats());
    gameScreenRendered.appendChild(renderFooter());
    const backBtn = gameScreenRendered.querySelector(`.back`);
    const questionArray = Array.from(gameScreenRendered.querySelectorAll(`[name*='question']`));

    const handler = () => {
      this.__checkAnswer(gameScreenRendered);
    };

    questionArray.forEach(function (element) {
      element.addEventListener(`change`, handler);
    });

    backBtn.addEventListener(`click`, () => this.__gameInstance.greetings);

    this.__gameScreenRendered = gameScreenRendered;
    return gameScreenRendered;
  }
}
