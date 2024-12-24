import createElement from '../creating/create_element';
import createControlContainer from '../components/garage_control_container';

function createGarage() {
  const garage = createElement({
    tag: 'div',
    classes: ['wrapper'],
  });
  const control = createControlContainer();

  garage.append(control);

  return garage;
}

export default createGarage;
