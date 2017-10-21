import {getElementFromTemplate} from './get-element.js';
import {showScreen} from './show-screen.js';
import renderFooter from './footer.js';
import renderRules from "./rules";

const greetingsTemplate = `
  <div class="greeting central--blur">
    <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">
      <h3>Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!</h3>
      <p>Правила игры просты.<br>
        Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
        Задача кажется тривиальной, но не думай, что все так просто.<br>
        Фотореализм обманчив и коварен.<br>
        Помни, главное — смотреть очень внимательно.</p>
    </div>
    <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
  </div>
  `;

const prepareGreetingsScreen = () => {
  const greetings = getElementFromTemplate(greetingsTemplate);
  greetings.appendChild(renderFooter());
  return greetings;
};

const greetingsPrepared = prepareGreetingsScreen();

const renderGreetings = () => {
  const greetingsClone = greetingsPrepared.cloneNode(true);
  const nextBtn = greetingsClone.querySelector(`.greeting__continue`);

  if (nextBtn) {
    nextBtn.addEventListener(`click`, () => showScreen(renderRules()));
  }

  return greetingsClone;
};

export default renderGreetings;
