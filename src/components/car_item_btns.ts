import createElement from '../creating/create_element';
import createButton from '../creating/create_btn';

function createCarItemBtns() {
  const carItemBtnsContainer = createElement({
    tag: 'div',
    classes: ['car-item__btns-container'],
  });
  createButton({
    classes: ['car-item__btn', 'car-item__btn-start'],
    parent: carItemBtnsContainer,
  });
  createButton({
    classes: ['car-item__btn', 'car-item__btn-return'],
    parent: carItemBtnsContainer,
  });
  createButton({
    classes: ['car-item__btn', 'car-item__btn-change'],
    parent: carItemBtnsContainer,
  });
  createButton({
    classes: ['car-item__btn', 'car-item__btn-delete'],
    parent: carItemBtnsContainer,
  });

  return carItemBtnsContainer;
}

export default createCarItemBtns;
