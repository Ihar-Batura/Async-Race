import changeDisabledChildElement from '../element/change_disabled_child_element';

function clickBtnReturnCar(): void {
  const returnBtnsList: NodeListOf<Element> = document.querySelectorAll(
    '.car-item__btn-return'
  );

  if (returnBtnsList.length > 0) {
    returnBtnsList.forEach((btn) => {
      btn.addEventListener('click', function (event: Event) {
        if (event) {
          if (event.target) {
            const parent = (event.target as HTMLButtonElement).offsetParent;
            const parentId: string = (parent as HTMLDivElement).id;

            btn.setAttribute('disabled', 'true');
            changeDisabledChildElement(parentId, 'car-item__btn-start', false);
          }
        }
      });
    });
  }
}

export default clickBtnReturnCar;
