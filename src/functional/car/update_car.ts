import getInputValue from '../input/get_input_value';
import updateCarInDB from '../../api/garage/update_car';
import changeDisabledUpdateCarElements from '../element/change_disabled_update_car_elements';
import updateGaragePage from '../page/update_garage_page';

function updateCar(): void {
  const newCarName = getInputValue('update-car-name');
  const newCarColor = getInputValue('update-car-color');
  const btnUpdateCar: HTMLElement | null =
    document.getElementById('update-car-btn');
  if (btnUpdateCar) {
    const carId: string = (btnUpdateCar as HTMLButtonElement).value;
    updateCarInDB(newCarName, newCarColor, carId);
    changeDisabledUpdateCarElements(true);
    updateGaragePage();
  }
}

export default updateCar;
