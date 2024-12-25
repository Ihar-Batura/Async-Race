import createElement from '../creating/create_element';
import createButton from '../creating/create_btn';
import createCarItemBtns from './car_item_btns';

interface ICarItem {
  name: string;
  color: string;
  id: number;
}

function createCarItem({ name, color, id }: ICarItem): HTMLElement {
  const carContainer = createElement({
    tag: 'div',
    classes: ['car-container'],
  });
  const carManageBtns = createCarItemBtns();
  const carName = createElement({
    tag: 'p',
    text: name,
    classes: ['car-name'],
    parent: carManageBtns,
  });

  carContainer.append(carManageBtns);

  return carContainer;
}

export default createCarItem;
