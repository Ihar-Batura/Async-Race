import whatPageNumber from '../info/what_page_number';
import changeDisabledElementById from '../element/change_disabled_element_by_id';
import howMatchThereCarsOrWinners from '../info/how_much_there_cars_or_winners';
import isPageWinners from '../info/is_page_winners';

function stateBtnsPrevAndNext() {
  const page: string = whatPageNumber();
  const pageWinners: boolean = isPageWinners();
  let pages;
  let pagesAmount;

  if (pageWinners) {
    const pagesWinners: string = howMatchThereCarsOrWinners(
      'winners__cars-amount'
    );
    const pagesWinnersAmount: number = Math.ceil(+pagesWinners / 10);
    pages = pageWinners;
    pagesAmount = pagesWinnersAmount;
  } else {
    const pagesGarage: string = howMatchThereCarsOrWinners(
      'garage__cars-amount'
    );
    const pagesGarageAmount: number = Math.ceil(+pagesGarage / 7);
    pages = pagesGarage;
    pagesAmount = pagesGarageAmount;
  }

  if (page === '1') {
    changeDisabledElementById('btn-prev', true);
  }
  if (page !== '1') {
    changeDisabledElementById('btn-prev', false);
  }
  if (+page < pagesAmount) {
    changeDisabledElementById('btn-next', false);
  }
  if (+page === pagesAmount) {
    changeDisabledElementById('btn-next', true);
  }
}

export default stateBtnsPrevAndNext;
