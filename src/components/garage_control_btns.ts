import createElement from '../creating/create_element';
import createButton from '../creating/create_btn';

function createControlBtns(): HTMLElement {
  const btnsContainer = createElement({
    tag: 'div',
    classes: ['cars-control__btns-container'],
  });
  createButton({
    classes: ['btn', 'cars-control__btn'],
    text: 'Race',
    parent: btnsContainer,
  });
  createButton({
    classes: ['btn', 'cars-control__btn'],
    text: 'Reset',
    parent: btnsContainer,
  });
  createButton({
    classes: ['btn', 'cars-control__btn'],
    text: 'Generate 100 random cars',
    parent: btnsContainer,
  });

  return btnsContainer;
}

export default createControlBtns;
