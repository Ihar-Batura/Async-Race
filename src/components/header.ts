import createElement from '../creating/create_element';
import createButton from '../creating/create_btn';

function createHeader(): HTMLElement {
  const header = createElement({ tag: 'header', classes: ['header'] });
  const wrapper = createElement({
    tag: 'div',
    classes: ['wrapper'],
    parent: header,
  });
  createElement({
    tag: 'h1',
    classes: ['logo'],
    text: 'Async race',
    parent: wrapper,
  });
  const btnsContainer = createElement({
    tag: 'div',
    classes: ['btn-container'],
    parent: wrapper,
  });
  createButton({ classes: ['btn'], text: 'Garage', parent: btnsContainer });
  createButton({ classes: ['btn'], text: 'Winners', parent: btnsContainer });

  return header;
}

export default createHeader;
