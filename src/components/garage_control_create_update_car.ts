import createElement from '../creating/create_element';
import createInput from '../creating/create_input';
import createButton from '../creating/create_btn';
import isValidInput from '../functional/input/is_valid_input';
import createNewCar from '../functional/car/create_one_new_car';

interface ICarControl {
  placeholderText: string;
  disabled: boolean;
  text: string;
  id: string;
}

function createCarsControl({
  placeholderText,
  disabled,
  text,
  id,
}: ICarControl): HTMLElement {
  const carsControl = createElement({ tag: 'div', classes: ['cars-control'] });
  createInput({
    type: 'text',
    classes: ['cars-control__name'],
    id: id + 'name',
    placeholder: placeholderText,
    disabled: disabled,
    onInput: () => isValidInput(`${id}name`),
    parent: carsControl,
  });
  createInput({
    type: 'color',
    classes: ['cars-control__color'],
    id: id + 'color',
    disabled: disabled,
    value: '#4327D3',
    parent: carsControl,
  });
  createButton({
    text: text,
    classes: ['btn', 'cars-control__btn', 'btn-color__green'],
    id: id + 'btn',
    disabled: disabled,
    onClick: () => createNewCar(id),
    parent: carsControl,
  });

  return carsControl;
}

export default createCarsControl;
