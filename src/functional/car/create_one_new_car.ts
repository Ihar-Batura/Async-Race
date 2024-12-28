import getInputValue from '../input/get_input_value';
import addCarToDB from '../../api/garage/add_car_to_db';
import cleanInputValue from '../input/clean_input_value';
import updateGaragePage from '../page/update_garage_page';

function createNewCar(id: string) {
  const carName = getInputValue(id + 'name');
  const carColor = getInputValue(id + 'color');
  if (carName.length > 0) {
    addCarToDB(carName, carColor);
    cleanInputValue(id + 'name');
    updateGaragePage();
  }
}

export default createNewCar;
