import createElement from '../creating/create_element';
import createControlContainer from '../components/garage_control_container';
import createPageNavigation from '../components/navigation';

function createGaragePage() {
  const garage = createElement({
    tag: 'div',
    classes: ['wrapper'],
  });
  const control = createControlContainer();
  const carsAmount = createElement({
    tag: 'h3',
    text: '',
    classes: ['garage__cars-amount'],
  });
  const navigation = createPageNavigation();
  const box = createElement({ tag: 'div', classes: ['garage-box'] });

  garage.append(control, carsAmount, navigation, box);

  return garage;
}

export default createGaragePage;
