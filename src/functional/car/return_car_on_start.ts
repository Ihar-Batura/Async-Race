function returnCarOnStart(id: string) {
  const parentContainer: HTMLElement | null = document.getElementById(`${id}`);
  if (parentContainer) {
    const car: HTMLDivElement | null = parentContainer.querySelector('.car');
    if (car) {
      car.style.left = '0px';
    }
  }
}

export default returnCarOnStart;
