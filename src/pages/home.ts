import createHeader from '../components/header';
import createMain from '../components/main';
import createFooter from '../components/footer';
import getGarageData from '../api/garage/get_data';
import showSumCarsInGarage from '../functional/info/show_sum_cars_in_garage';
import addCarsToGaragePageFromDB from '../functional/car/add_cars_to_garage_page_from_db';
import addListenersBtnsOnGaragePage from '../functional/buttons/add_listeners_btns_on_ garage_page';

async function createHomePage() {
  const body: HTMLBodyElement | null = document.querySelector('body');

  if (body) {
    const header = createHeader();
    const main = createMain();
    const footer = createFooter();
    body.append(header, main, footer);
  }
  const garageData = await getGarageData('/garage');
  showSumCarsInGarage(garageData.length);
  const garageDataFirstPage = await getGarageData('/garage?_page=1&_limit=7');
  addCarsToGaragePageFromDB(garageDataFirstPage);
  addListenersBtnsOnGaragePage();
}

export default createHomePage;
