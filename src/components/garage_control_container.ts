import createElement from '../creating/create_element';
import createCarsControl from './garage_create_update_car';
import createControlBtns from './garage_control_btns';

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
    placeholderText: 'Change car name',
    disabled: true,
    text: 'Update car',
  });
  const btnsContainer = createControlBtns();
  controlContainer.append(createCar, updateCar, btnsContainer);

  return controlContainer;
}

export default createControlContainer;
