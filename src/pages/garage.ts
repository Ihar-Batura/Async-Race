import createElement from '../creating/create_element';
import createControlContainer from '../components/garage_control_container';
import createPageNavigation from '../components/navigation';
import createCarItem from '../components/car_item'; //// time

function createGaragePage() {
  const garage = createElement({
    tag: 'div',
    classes: ['wrapper'],
  });
  const control = createControlContainer();
  const carsAmount = createElement({
    tag: 'h3',
    text: 'Cars in the garage (0)',
    classes: ['garage__cars-amount'],
  });
  const navigation = createPageNavigation();
  const box = createElement({ tag: 'div', classes: ['garage-box'] });
  const carcontainer = createCarItem({ name: 'Tesla', color: 'red', id: '7' }); //////time
  const carcontainer2 = createCarItem({ name: 'BMW', color: 'green', id: '8' }); //////time
  box.append(carcontainer, carcontainer2); ///////time

  garage.append(control, carsAmount, navigation, box);

  return garage;
}

export default createGaragePage;
