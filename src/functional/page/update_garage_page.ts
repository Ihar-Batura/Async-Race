import whatPageNumber from '../info/what_page_number';
import getGarageData from '../../api/garage/get_data';
import addCarsToGaragePageFromDB from '../car/add_cars_to_garage_page_from_db';
import showSumCarsInGarage from '../info/show_sum_cars_in_garage';
import addListenersBtnsOnGaragePage from '../buttons/add_listeners_btns_on_ garage_page';
import stateBtnsPrevAndNext from '../buttons/state_btns_prev_and_next';

async function updateGaragePage() {
  const pageNumber = whatPageNumber();
  const garageThisPageData = await getGarageData(
    `/garage?_page=${pageNumber}&_limit=7`
  );

  const garageData = await getGarageData('/garage');
  const carsInGarage: number = garageData.length > 0 ? garageData.length : 0;
  addCarsToGaragePageFromDB(garageThisPageData);
  showSumCarsInGarage(carsInGarage);
  stateBtnsPrevAndNext();
  addListenersBtnsOnGaragePage();
}

export default updateGaragePage;
