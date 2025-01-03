import createElement from '../../creating/create_element';
import saveWinnerResult from '../data/save_winner_result';

function showFasterCar(id: string, time: number) {
  const finishTime: number = +(time / 1000).toFixed(2);
  const carElement: HTMLElement | null = document.getElementById(`${id}`);
  const garageBox: HTMLElement | null = document.querySelector('.garage-box');
  const btnRace: HTMLElement | null = document.getElementById('btn-race');

  if (garageBox && carElement) {
    const carName: HTMLElement | null = (
      carElement as HTMLDivElement
    ).querySelector('.car-name');

    const winner: HTMLElement | null = document.getElementById('winner-car');

    if (btnRace && btnRace.hasAttribute('disabled')) {
      if (!winner && carName) {
        createElement({
          tag: 'div',
          id: 'winner-car',
          text: `Winner: ${carName.innerText} ${finishTime}s`,
          parent: garageBox,
        });
        saveWinnerResult(id, finishTime);
      }
    }
  }
}

export default showFasterCar;
