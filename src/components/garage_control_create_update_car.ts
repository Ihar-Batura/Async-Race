import createElement from '../creating/create_element';
import createInput from '../creating/create_input';
import createButton from '../creating/create_btn';

interface ICarControl {
  placeholderText: string;
  disabled: boolean;
  text: string;
}

function createCarsControl({
  placeholderText,
  disabled,
  text,
}: ICarControl): HTMLElement {
  const carsControl = createElement({ tag: 'div', classes: ['cars-control'] });
  createInput({
    type: 'text',
    classes: ['cars-control__name'],
    placeholder: placeholderText,
    disabled: disabled,
    parent: carsControl,
  });
  createInput({
    type: 'color',
    classes: ['cars-control__color'],
    disabled: disabled,
    value: '#4327D3',
    parent: carsControl,
  });
  createButton({
    text: text,
    classes: ['btn', 'cars-control__btn', 'btn-color__green'],
    disabled: disabled,
    parent: carsControl,
  });

  return carsControl;
}

export default createCarsControl;
