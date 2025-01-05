import changeDisabledElementById from '../element/change_disabled_element_by_id';
import changeDisabledChildElement from '../element/change_disabled_child_element';
import returnCarOnStart from '../car/return_car_on_start';
import deleteFasterCar from '../info/delete_faster_car';

function clickBtnReset() {
  changeDisabledElementById('btn-reset', true);
  changeDisabledElementById('btn-race', false);
  deleteFasterCar();

  const carsList: NodeListOf<Element> =
    document.querySelectorAll('.car-container');

  if (carsList.length > 0) {
    carsList.forEach((car) => {
      changeDisabledChildElement(car.id, 'car-item__btn-start', false);
      changeDisabledChildElement(car.id, 'car-item__btn-return', true);
    });
  }
}

export default clickBtnReset;
