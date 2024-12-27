import getInputValue from '../input/get_input_value';
import addCarToDB from '../../api/garage/add_car_to_db';

function createNewCar(id: string) {
  const carName = getInputValue(id + 'name');
  const carColor = getInputValue(id + 'color');
  if (carName.length > 0) {
    addCarToDB(carName, carColor);
  }
}

export default createNewCar;