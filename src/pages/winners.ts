import createElement from '../creating/create_element';
import createPageNavigation from '../components/navigation';
import getGarageData from '../api/garage/get_data';

function createWinnersPage() {
  const winners = createElement({
    tag: 'div',
    classes: ['wrapper'],
  });
  const winnersAmount = createElement({
    tag: 'h3',
    text: 'Winners ( 0 )',
    classes: ['winners__cars-amount'],
  });
  const navigation = createPageNavigation();
  const container = createElement({
    tag: 'div',
    classes: ['winners-container'],
  });
  //getGarageData('/garage');

  winners.append(winnersAmount, navigation, container);

  return winners;
}

export default createWinnersPage;
