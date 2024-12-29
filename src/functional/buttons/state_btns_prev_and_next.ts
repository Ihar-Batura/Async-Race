import whatPageNumber from '../info/what_page_number';
import changeDisabledElementById from '../element/change_disabled_element_by_id';
import howMatchThereCarsOrWinners from '../info/how_much_there_cars_or_winners';

function stateBtnsPrevAndNext() {
  const page: string = whatPageNumber();
  const pages: string = howMatchThereCarsOrWinners('garage__cars-amount');
  const pagesAmount: number = Math.ceil(+pages / 7);

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
