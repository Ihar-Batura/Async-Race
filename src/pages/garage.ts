import createElement from '../creating/create_element';
import createControlContainer from '../components/garage_control_container';

function createGaragePage() {
  const garage = createElement({
    tag: 'div',
    classes: ['wrapper'],
  });
  const control = createControlContainer();
  const carsAmount = createElement({
    tag: 'h3',
    text: 'Garage (0)',
    classes: ['garage__cars-amount'],
  });
  const garagePage = createElement({
    tag: 'h4',
    text: 'Page #1',
    classes: ['garage__cars-page'],
  });

  garage.append(control, carsAmount, garagePage);

  return garage;
}

export default createGaragePage;
