import createElement from '../creating/create_element';
import createButton from '../creating/create_btn';
import nextPage from '../functional/buttons/click_next_page';
import prevPage from '../functional/buttons/click_prev_page';

function createPageNavigation() {
  const navigation = createElement({ tag: 'div', classes: ['navigation'] });
  createButton({
    text: 'Prev',
    classes: ['btn', 'navigation-btn', 'prev-btn'],
    id: 'btn-prev',
    disabled: true,
    onClick: () => prevPage(),
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
    disabled: true,
    id: 'btn-next',
    onClick: () => nextPage(),
    parent: navigation,
  });

  return navigation;
}

export default createPageNavigation;
