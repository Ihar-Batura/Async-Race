import deleteCarFromDB from '../../api/garage/delete_car';
import deleteWinnerFromDB from '../../api/winners/delete_winner';

function clickBtnDeleteCar(): void {
  const deleteBtnsList: NodeListOf<Element> = document.querySelectorAll(
    '.car-item__btn-delete'
  );

  if (deleteBtnsList.length > 0) {
    deleteBtnsList.forEach((btn) => {
      btn.addEventListener('click', function (event: Event) {
        if (event) {
          if (event.target) {
            const parent = (event.target as HTMLButtonElement).offsetParent;
            const parentId: string = (parent as HTMLDivElement).id;
            deleteCarFromDB(parentId);
            deleteWinnerFromDB(parentId);
          }
        }
      });
    });
  }
}

export default clickBtnDeleteCar;
