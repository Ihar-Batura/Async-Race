import createElement from '../creating/create_element';
import createCarItemBtns from './car_item_btns';
import createCar from '../creating/create_car';

interface ICarItem {
  name: string;
  color: string;
  id: string;
}

function createCarItem({ name, color, id }: ICarItem): HTMLElement {
  const carContainer = createElement({
    tag: 'div',
    classes: ['car-container'],
    id: id,
  });
  const carManageBtns = createCarItemBtns();
  createElement({
    tag: 'p',
    text: name,
    classes: ['car-name'],
    parent: carManageBtns,
  });
  const car = createCar(color);

  createElement({
    tag: 'div',
    classes: ['finish-img'],
    parent: carContainer,
  });

  carContainer.append(carManageBtns, car);

  return carContainer;
}

export default createCarItem;
