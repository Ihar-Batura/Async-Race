import getInputValue from '../input/get_input_value';
import addCarToDB from '../../api/garage/add_car_to_db';
import whatPageNumber from '../info/what_page_number';
import getGarageData from '../../api/garage/get_data';
import addCarsToGaragePageFromDB from './add_cars_to_garage_page_from_db';
import showSumCarsInGarage from '../info/show_sum_cars_in_garage';
import cleanInputValue from '../input/clean_input_value';

async function createNewCar(id: string) {
  const carName = getInputValue(id + 'name');
  const carColor = getInputValue(id + 'color');
  if (carName.length > 0) {
    addCarToDB(carName, carColor);
    const pageNumber = whatPageNumber();
    const garageThisPageData = await getGarageData(
      `/garage?_page=${pageNumber}&_limit=7`
    );
    addCarsToGaragePageFromDB(garageThisPageData);
    const garageData = await getGarageData('/garage');
    showSumCarsInGarage(garageData.length);
    cleanInputValue(id + 'name');
  }
}

export default createNewCar;
