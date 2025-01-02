import createElement from '../../creating/create_element';

function showFasterCar(id: string, time: number) {
  const finishTime: number = +(time / 1000).toFixed(2);
  const carElement: HTMLElement | null = document.getElementById(`${id}`);
  const garageBox: HTMLElement | null = document.querySelector('.garage-box');

  if (garageBox && carElement) {
    const carName: HTMLElement | null = (
      carElement as HTMLDivElement
    ).querySelector('.car-name');

    const winner: HTMLElement | null = document.getElementById('winner-car');

    if (!winner && carName) {
      createElement({
        tag: 'div',
        id: 'winner-car',
        text: `Winner: ${carName.innerText} ${finishTime}s`,
        parent: garageBox,
      });
    }
  }
}

export default showFasterCar;
