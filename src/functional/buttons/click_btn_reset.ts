import changeDisabledElementById from '../element/change_disabled_element_by_id';
import changeDisabledChildElement from '../element/change_disabled_child_element';
import returnCarOnStart from '../car/return_car_on_start';

function clickBtnReset() {
  changeDisabledElementById('btn-reset', true);
  changeDisabledElementById('btn-race', false);

  const carsList: NodeListOf<Element> =
    document.querySelectorAll('.car-container');

  if (carsList.length > 0) {
    carsList.forEach((car) => {
      returnCarOnStart(car.id);
      changeDisabledChildElement(car.id, 'car-item__btn-start', false);
      changeDisabledChildElement(car.id, 'car-item__btn-return', true);
    });
  }
}

export default clickBtnReset;
