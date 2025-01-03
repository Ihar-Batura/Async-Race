import cleanPage from '../page/clean_page';
import changePage from '../page/change_page';
import updateWinnersPage from '../page/update_winners_page';

function clickBtnWinners(): void {
  const btnWinners: HTMLButtonElement | null =
    document.querySelector('.winners-btn');
  const btnGarage: HTMLButtonElement | null =
    document.querySelector('.garage-btn');

  if (btnWinners && btnGarage) {
    btnWinners.classList.add('active');
    btnGarage.classList.remove('active');
  }

  cleanPage();
  changePage('winners');
  updateWinnersPage('id');
}

export default clickBtnWinners;
