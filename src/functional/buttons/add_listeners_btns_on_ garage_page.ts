import clickBtnStartOneCar from './click_btn_start_one_car';
import clickBtnReturnCar from './click_btn_return_car';
import clickBtnSettingCar from './click_btn_setting_car';
import clickBtnDeleteCar from './click_btn_delete_car';

function addListenersBtnsOnGaragePage(): void {
  clickBtnStartOneCar();
  clickBtnReturnCar();
  clickBtnSettingCar();
  clickBtnDeleteCar();
}

export default addListenersBtnsOnGaragePage;
