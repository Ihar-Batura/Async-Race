import createElement from '../creating/create_element';

function createMain(): HTMLElement {
  const main = createElement({ tag: 'main', classes: ['main'] });
  const wrapper = createElement({
    tag: 'div',
    classes: ['wrapper'],
    parent: main,
  });

  return main;
}

export default createMain;
