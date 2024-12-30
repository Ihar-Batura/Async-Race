import startCarEngine from '../../api/engine/start_engine';

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
          }
        }
      });
    });
  }
}

export default clickBtnStartOneCar;
