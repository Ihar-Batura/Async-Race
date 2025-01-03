import createElement from './create_element';

function createTdElement(innerHTML: string): HTMLElement {
  const tdElement = createElement({
    tag: 'td',
    classes: ['table-cell'],
  });

  tdElement.innerHTML = innerHTML;

  return tdElement;
}
export default createTdElement;
