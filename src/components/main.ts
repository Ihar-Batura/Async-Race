import createElement from '../creating/create_element';
import createGaragePage from '../pages/garage';

function createMain(): HTMLElement {
  const main = createElement({ tag: 'main', classes: ['main'] });
  const garage = createGaragePage();
  main.append(garage);

  return main;
}

export default createMain;
