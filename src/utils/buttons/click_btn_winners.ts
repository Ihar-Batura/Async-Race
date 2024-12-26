import cleanPage from '../page/clean_page';

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
}

export default clickBtnWinners;
