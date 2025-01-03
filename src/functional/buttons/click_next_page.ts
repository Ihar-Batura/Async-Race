import whatPageNumber from '../info/what_page_number';
import getGarageData from '../../api/garage/get_data';
import addCarsToGaragePageFromDB from '../car/add_cars_to_garage_page_from_db';
import addListenersBtnsOnGaragePage from './add_listeners_btns_on_ garage_page';
import stateBtnsPrevAndNext from './state_btns_prev_and_next';
import changePageNumber from '../info/change_page_number';
import changeDisabledElementById from '../element/change_disabled_element_by_id';
import isPageWinners from '../info/is_page_winners';
import updateWinnersPage from '../page/update_winners_page';

async function nextPage() {
  const pageWinners: boolean = isPageWinners();
  if (pageWinners) {
    const pageNumber = whatPageNumber();
    changePageNumber(pageNumber, '+');
    updateWinnersPage('id');
    stateBtnsPrevAndNext();
  } else {
    const pageNumber = whatPageNumber();
    const nextPageData = await getGarageData(
      `/garage?_page=${+pageNumber + 1}&_limit=7`
    );
    addCarsToGaragePageFromDB(nextPageData);
    addListenersBtnsOnGaragePage();
    changePageNumber(pageNumber, '+');
    stateBtnsPrevAndNext();
    changeDisabledElementById('btn-reset', true);
    changeDisabledElementById('btn-race', false);
  }
}

export default nextPage;
