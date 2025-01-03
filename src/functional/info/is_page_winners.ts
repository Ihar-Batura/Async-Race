function isPageWinners(): boolean {
  const btnWinners: HTMLElement | null = document.querySelector('.winners-btn');
  if (btnWinners) {
    if (btnWinners.classList.value.includes('active')) {
      return true;
    }
  }
  return false;
}

export default isPageWinners;
