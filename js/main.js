//константы  для правой и левой клавиш
const RIGHT_ARROW_BTN = 39;
const LEFT_ARROW_BTN = 37;

//создаем массив экранов
const screens = Array.from(document.querySelectorAll(`template`)).map(it => it.content);

//показываем экран
const mainElement = document.querySelector(`#main`);

const showScreen = element => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element.cloneNode(true));
};

//листаем
let current = 0;
const selectScreenNumber = (index) => {
  index = index < 0 ? 0 : index;
  index = index >= screens.length ? screen.length - 1 : index;
  current = index;
  showScreen(screens[current]);
}

selectScreenNumber(1);

//добавляем htlm-стрелки
const block = document.createElement(`div`);

const createButtons = () => {
  block.className = "arrows__wrap";
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
  `
};

document.querySelector(`body`).appendChild(block);
createButtons();


//вешаем событие с клавиатуры на стрелки
document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case LEFT_ARROW_BTN:
    selectScreenNumber(current + 1);
    break;
    case RIGHT_ARROW_BTN:
    selectScreenNumber(current - 1);
    break;
  }
});

//вешаем событие с мыши на стрелки
const arrowsBtn = document.querySelectorAll(`.arrows__btn`);
arrowsBtn[0].addEventListener(`click`, (event) => {
  selectScreenNumber(current - 1);
});

arrowsBtn[1].addEventListener(`click`, (event) => {
  selectScreenNumber(current + 1);
});
