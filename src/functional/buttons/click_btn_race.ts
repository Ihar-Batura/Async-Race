import startCarEngine from '../../api/engine/start_engine';
import changeDisabledElementById from '../element/change_disabled_element_by_id';
import changeDisabledChildElement from '../element/change_disabled_child_element';

function clickBtnRace() {
  changeDisabledElementById('btn-race', true);

  const carsList: NodeListOf<Element> =
    document.querySelectorAll('.car-container');

  if (carsList.length > 0) {
    carsList.forEach((car) => {
      startCarEngine(car.id);
      changeDisabledChildElement(car.id, 'car-item__btn-start', true);
      changeDisabledChildElement(car.id, 'car-item__btn-return', false);
    });
  }

  changeDisabledElementById('btn-reset', false);
}

export default clickBtnRace;
