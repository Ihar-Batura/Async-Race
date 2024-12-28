import changeInputValue from '../input/change_input_value';
import convertRgbToHex from './convert_rgb_to_hex';

function fillUpdateCarInputsInfo(id: string): void {
  const carParentContainer: HTMLElement | null = document.getElementById(
    `${id}`
  );

  if (carParentContainer) {
    const carNameElement: HTMLElement | null =
      carParentContainer.querySelector('.car-name');

    const carElement: HTMLElement | null =
      carParentContainer.querySelector('.car');

    if (carElement && carNameElement) {
      const name: string = carNameElement.innerText;
      const color: string = carElement.style.color;
      const carColor = color.includes('rgb') ? convertRgbToHex(color) : color;

      changeInputValue('update-car-name', name);
      changeInputValue('update-car-color', carColor);
    }
  }
}

export default fillUpdateCarInputsInfo;
