import createElement from '../creating/create_element';
import createButton from '../creating/create_btn';
import createOneHundredRandomCars from '../functional/car/create_one_hundred_cars';

function createControlBtns(): HTMLElement {
  const btnsContainer = createElement({
    tag: 'div',
    classes: ['cars-control__btns-container'],
  });
  createButton({
    classes: ['btn', 'cars-control__btn', 'btn-color__green'],
    text: 'Race',
    parent: btnsContainer,
  });
  createButton({
    classes: ['btn', 'cars-control__btn', 'btn-color__red'],
    text: 'Reset',
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
