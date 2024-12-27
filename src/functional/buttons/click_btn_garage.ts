import cleanPage from '../page/clean_page';

function clickBtnGarage(): void {
  const btnWinners: HTMLButtonElement | null =
    document.querySelector('.winners-btn');
  const btnGarage: HTMLButtonElement | null =
    document.querySelector('.garage-btn');

  if (btnWinners && btnGarage) {
    btnWinners.classList.remove('active');
    btnGarage.classList.add('active');
  }

  cleanPage();
}

export default clickBtnGarage;
