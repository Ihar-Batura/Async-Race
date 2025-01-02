function deleteFasterCar(): void {
  const winner: HTMLElement | null = document.getElementById('winner-car');
  if (winner) {
    winner.remove();
  }
}

export default deleteFasterCar;
