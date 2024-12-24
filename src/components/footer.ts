import createElement from '../creating/create_element';
import createLink from '../creating/create_link';

function createFooter(): HTMLElement {
  const footer = createElement({ tag: 'footer', classes: ['footer'] });
  const wrapper = createElement({
    tag: 'div',
    classes: ['wrapper'],
    parent: footer,
  });
  createElement({
    tag: 'p',
    classes: ['footer-year'],
    text: '© 2025',
    parent: wrapper,
  });
  createLink({
    href: 'https://github.com/Ihar-Batura',
    classes: ['footer-link'],
    target: '_blank',
    text: 'Ihar Batura',
    parent: wrapper,
  });

  return footer;
}

export default createFooter;
