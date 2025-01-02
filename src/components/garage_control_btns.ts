import createElement from '../creating/create_element';
import createButton from '../creating/create_btn';
import createOneHundredRandomCars from '../functional/car/create_one_hundred_cars';
import clickBtnRace from '../functional/buttons/click_btn_race';
import clickBtnReset from '../functional/buttons/click_btn_reset';

function createControlBtns(): HTMLElement {
  const btnsContainer = createElement({
    tag: 'div',
    classes: ['cars-control__btns-container'],
  });
  createButton({
    classes: ['btn', 'cars-control__btn', 'btn-color__green'],
    id: 'btn-race',
    text: 'Race',
    onClick: () => clickBtnRace(),
    parent: btnsContainer,
  });
  createButton({
    classes: ['btn', 'cars-control__btn', 'btn-color__red'],
    id: 'btn-reset',
    text: 'Reset',
    disabled: true,
    onClick: () => clickBtnReset(),
    parent: btnsContainer,
  });
  createButton({
    classes: ['btn', 'cars-control__btn', 'btn-color__green'],
    id: 'btn-random-cars',
    text: 'Generate 100 random cars',
    onClick: () => createOneHundredRandomCars(),
    parent: btnsContainer,
  });

  return btnsContainer;
}

export default createControlBtns;
