import createElement from '../creating/create_element';
import createCarsControl from './garage_create_update_car';

function createControlContainer(): HTMLElement {
  const controlContainer = createElement({
    tag: 'div',
    classes: ['garage-control'],
  });
  const createCar = createCarsControl({
    placeholderText: 'Car name',
    disabled: false,
    text: 'Create car',
  });
  const updateCar = createCarsControl({
    placeholderText: 'Car name',
    disabled: true,
    text: 'Create car',
  });
  controlContainer.append(createCar, updateCar);

  return controlContainer;
}

export default createControlContainer;
