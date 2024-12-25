import createElement from '../creating/create_element';
import createButton from '../creating/create_btn';

function createPageNavigation() {
  const navigation = createElement({ tag: 'div', classes: ['navigation'] });
  createButton({
    text: 'Prev',
    classes: ['btn', 'navigation-btn', 'prev-btn'],
    parent: navigation,
  });

  createElement({
    tag: 'div',
    text: '1',
    classes: ['page-number'],
    parent: navigation,
  });

  createButton({
    text: 'Next',
    classes: ['btn', 'navigation-btn', 'next-btn'],
    parent: navigation,
  });

  return navigation;
}

export default createPageNavigation;
