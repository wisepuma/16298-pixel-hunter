
// константы  для правой и левой клавиш
const RIGHT_ARROW_BTN = 39;
const LEFT_ARROW_BTN = 37;

// константа для стрелок
const block = document.createElement(`div`);

// константа для приветственного экрана
const LOAD_SCREEN = 0;

// создаем массив экранов
const screens = Array.from(document.querySelectorAll(`template`)).map((it) => it.content);

// показываем экран
const mainElement = document.querySelector(`#main`);

const showScreen = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element.cloneNode(true));
};

// листаем слайды
let currentScreen = 0;
const selectScreenNumber = (current) => {
  if (current < 0) {
    current = screens.length - 1;
  } else if (current >= screens.length - 1) {
    current = 0;
  }
  currentScreen = current;
  showScreen(screens[currentScreen]);

};

selectScreenNumber(LOAD_SCREEN);

// добавляем htlm-стрелки и вешаем событие с мыши

const createButtons = () => {
  block.className = `arrows__wrap`;
  block.innerHTML = `
    <style>
      .arrows__wrap {
        position: absolute;
        top: 95px;
        left: 50%;
        margin-left: -56px;
      }
      .arrows__btn {
        background: none;
        border: 2px solid black;
        padding: 5px 20px;
      }
    </style>
    <button class="arrows__btn"><-</button>
    <button class="arrows__btn">-></button>
  `;
  const arrowsBtn = block.querySelectorAll(`.arrows__btn`);
  arrowsBtn[0].addEventListener(`click`, () => {
    selectScreenNumber(currentScreen - 1);
  });

  arrowsBtn[1].addEventListener(`click`, () => {
    selectScreenNumber(currentScreen + 1);
  });
};

document.querySelector(`body`).appendChild(block);
createButtons();

// вешаем событие с клавиатуры на стрелки
document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case LEFT_ARROW_BTN:
      selectScreenNumber(currentScreen - 1);
      break;
    case RIGHT_ARROW_BTN:
      selectScreenNumber(currentScreen + 1);
      break;
  }
});

