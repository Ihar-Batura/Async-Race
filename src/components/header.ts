import createElement from '../creating/create_element';
import createButton from '../creating/create_btn';
import clickBtnWinners from '../functional/buttons/click_btn_winners';
import clickBtnGarage from '../functional/buttons/click_btn_garage';

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
  createButton({
    classes: ['btn', 'garage-btn', 'active'],
    text: 'Garage',
    onClick: () => clickBtnGarage(),
    parent: btnsContainer,
  });
  createButton({
    classes: ['btn', 'winners-btn'],
    text: 'Winners',
    onClick: () => clickBtnWinners(),
    parent: btnsContainer,
  });

  return header;
}

export default createHeader;
