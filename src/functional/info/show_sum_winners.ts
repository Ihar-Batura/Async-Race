function showSumWinners(sumWinners: number): void {
  const winners: HTMLElement | null = document.querySelector(
    '.winners__cars-amount'
  );
  if (winners) {
    winners.innerText = `Winners ( ${sumWinners} )`;
  }
}

export default showSumWinners;
