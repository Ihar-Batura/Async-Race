import createElement from '../creating/create_element';

function createTableHead(): HTMLElement {
  const head: HTMLElement = createElement({
    tag: 'thead',
    classes: ['table-head'],
  });

  const tableRow = createElement({ tag: 'tr', classes: ['table-row'] });

  createElement({
    tag: 'th',
    classes: ['table-cell'],
    text: '№',
    parent: tableRow,
  });
  createElement({
    tag: 'th',
    classes: ['table-cell'],
    text: 'Color',
    parent: tableRow,
  });
  createElement({
    tag: 'th',
    classes: ['table-cell'],
    text: 'Name',
    parent: tableRow,
  });
  createElement({
    tag: 'th',
    classes: ['table-cell', 'table-wins'],
    text: 'Wins',
    parent: tableRow,
  });
  createElement({
    tag: 'th',
    classes: ['table-cell', 'table-record'],
    text: 'Record',
    parent: tableRow,
  });

  head.append(tableRow);

  return head;
}

export default createTableHead;
