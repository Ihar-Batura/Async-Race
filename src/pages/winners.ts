import createElement from '../creating/create_element';
import createPageNavigation from '../components/navigation';
import createTableHead from '../components/table_head';

function createWinnersPage() {
  const winners = createElement({
    tag: 'div',
    classes: ['wrapper'],
  });
  const winnersAmount = createElement({
    tag: 'h3',
    text: '',
    classes: ['winners__cars-amount'],
  });
  const navigation = createPageNavigation();
  const WinnersTable = createElement({
    tag: 'table',
    classes: ['winners-table'],
  });

  const tableHead = createTableHead();
  WinnersTable.append(tableHead);

  createElement({
    tag: 'tbody',
    classes: ['table-body'],
    parent: WinnersTable,
  });

  winners.append(winnersAmount, navigation, WinnersTable);

  return winners;
}

export default createWinnersPage;
