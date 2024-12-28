import whatPageNumber from '../info/what_page_number';
import getGarageData from '../../api/garage/get_data';
import addCarsToGaragePageFromDB from '../car/add_cars_to_garage_page_from_db';
import showSumCarsInGarage from '../info/show_sum_cars_in_garage';
import addListenersBtnsOnGaragePage from '../buttons/add_listeners_btns_on_ garage_page';

async function updateGaragePage() {
  const pageNumber = whatPageNumber();
  const garageThisPageData = await getGarageData(
    `/garage?_page=${pageNumber}&_limit=7`
  );
  addCarsToGaragePageFromDB(garageThisPageData);
  const garageData = await getGarageData('/garage');
  showSumCarsInGarage(garageData.length);
  addListenersBtnsOnGaragePage();
}

export default updateGaragePage;
