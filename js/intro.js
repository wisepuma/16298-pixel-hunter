import {changeScreen, render} from './util';
import greeting from './greeting';

const template = `<section class="intro">
<button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
<p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</section>`;

const element = render(template);
const continueButton = element.querySelector(`button.intro__asterisk`);

// greeting показывается по нажатию на символ звёздочки

continueButton.addEventListener(`click`, () => {
  changeScreen(greeting);
});

export default element;
