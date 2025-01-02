import changeDisabledUpdateCarElements from '../element/change_disabled_update_car_elements';
import saveCarIdInUpdateBtn from './save_car_id_in_update_btn';
import fillUpdateCarInputsInfo from '../info/fill_update_car_inputs_info';

function clickBtnSettingCar(): void {
  const settingBtnsList: NodeListOf<Element> = document.querySelectorAll(
    '.car-item__btn-change'
  );

  if (settingBtnsList.length > 0) {
    settingBtnsList.forEach((btn) => {
      btn.addEventListener('click', function (event: Event) {
        if (event) {
          if (event.target) {
            const parent = (event.target as HTMLButtonElement).offsetParent;
            const parentId: string = (parent as HTMLDivElement).id;

            changeDisabledUpdateCarElements(false);
            saveCarIdInUpdateBtn(parentId);
            fillUpdateCarInputsInfo(parentId);
          }
        }
      });
    });
  }
}

export default clickBtnSettingCar;
