function showSumCarsInGarage(sumCars: number): void {
  const carsInGarage: HTMLElement | null = document.querySelector(
    '.garage__cars-amount'
  );
  if (carsInGarage) {
    carsInGarage.innerText = `Cars in the garage (${sumCars})`;
  }
}

export default showSumCarsInGarage;
