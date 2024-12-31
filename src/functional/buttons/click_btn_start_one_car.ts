import startCarEngine from '../../api/engine/start_engine';
import changeDisabledChildElement from '../element/change_disabled_child_element';

function clickBtnStartOneCar(): void {
  const startBtnsList: NodeListOf<Element> = document.querySelectorAll(
    '.car-item__btn-start'
  );

  if (startBtnsList.length > 0) {
    startBtnsList.forEach((btn) => {
      btn.addEventListener('click', function (event: Event) {
        if (event) {
          if (event.target) {
            const parent = (event.target as HTMLButtonElement).offsetParent;
            const parentId: string = (parent as HTMLDivElement).id;
            startCarEngine(parentId);

            btn.setAttribute('disabled', 'true');
            changeDisabledChildElement(parentId, 'car-item__btn-return', false);
          }
        }
      });
    });
  }
}

export default clickBtnStartOneCar;
