import createElement from '../creating/create_element';

function createGarage() {
  const garage = createElement({
    tag: 'div',
    classes: ['wrapper'],
  });

  return garage;
}

export default createGarage;
