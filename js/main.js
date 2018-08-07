  const greeting = document.getElementById(`greeting`);
  const rules = document.getElementById(`rules`);
  const intro = document.getElementById(`intro`);
  const game1 = document.getElementById(`game-1`);
  const game2 = document.getElementById(`game-2`);
  const game3 = document.getElementById(`game-3`);
  const stats = document.getElementById(`stats`);
  const modalError = document.getElementById(`modal-error`);
  const modalConfirm = document.getElementById(`modal-confirm`);
  const arrowsBtn = document.querySelectorAll(`.arrows__btn`);

  const arrayScreen = [rules, greeting, intro, game1, game2, game3, stats, modalError, modalConfirm];

  const mainElement = document.querySelector(`#main`);
  mainElement.appendChild(game3.content);

  const showScreen = element => {
   mainElement.innerHTML = ``;
   mainElement.appendChild(element.content.cloneNode(true));
  };

  let current = 0;
  const selectScreenNumber = (index) => {
   index = index < 0 ? arrayScreen.length - 1 : index;
   index = index >= arrayScreen.length ? 0 : index;
   current = index;
   showScreen(arrayScreen[current]);
  }

  selectScreenNumber(0);

  document.addEventListener(`keydown`, (evt) => {
    switch (evt.keyCode) {
      case 37:
      selectScreenNumber(current + 1);
      break;
      case 39:
      selectScreenNumber(current - 1);
      break;
    }
  });

  arrowsBtn[0].onclick = () => {
    selectScreenNumber(current - 1)
  };

  arrowsBtn[1].onclick = () => {
    selectScreenNumber(current + 1)
  };
