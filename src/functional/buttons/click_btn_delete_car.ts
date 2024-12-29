import deleteCarFromDB from '../../api/garage/delete_car';

function clickBtnDeleteCar(): void {
  const settingBtnsList: NodeListOf<Element> = document.querySelectorAll(
    '.car-item__btn-delete'
  );

  if (settingBtnsList.length > 0) {
    settingBtnsList.forEach((btn) => {
      btn.addEventListener('click', function (event: Event) {
        if (event) {
          if (event.target) {
            const parent = (event.target as HTMLButtonElement).offsetParent;
            const parentId: string = (parent as HTMLDivElement).id;
            deleteCarFromDB(parentId);
          }
        }
      });
    });
  }
}

export default clickBtnDeleteCar;
