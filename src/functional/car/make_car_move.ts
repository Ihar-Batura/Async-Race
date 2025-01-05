import findRoadWidth from '../info/find_road_width';
import switchCarEngine from '../../api/engine/switch_engine_car';
import showFasterCar from '../info/show_faster_car';
import stopCarEngine from '../../api/engine/stop_engine';
import returnCarOnStart from './return_car_on_start';

async function makeCarMove(id: string, time: number) {
  const roadWidth: number = findRoadWidth();
  const carElementLength: number = 100;
  const carRoad: number = roadWidth - carElementLength;
  let oneCarStep = Math.round((carRoad / time) * 16.7);
  let isCarDrive: boolean | undefined = true;
  const carContainer: HTMLElement | null = document.getElementById(`${id}`);

  if (carContainer) {
    const car: HTMLDivElement | null = carContainer.querySelector('.car');
    const btnStopCar: HTMLButtonElement | null = carContainer.querySelector(
      '.car-item__btn-return'
    );
    const btnReset: HTMLElement | null = document.getElementById('btn-reset');

    if (btnStopCar && btnReset) {
      btnStopCar.addEventListener('click', stopAndReturnCar);
      btnReset.addEventListener('click', stopAndReturnCar);

      async function stopAndReturnCar() {
        const isCarStop = await stopCarEngine(id);
        if (isCarStop !== undefined) {
          if (isCarStop === 0) {
            isCarDrive = false;
            returnCarOnStart(id);
          }
        }
      }
    }

    if (car) {
      const animateCar = function () {
        const carPosition: number = +car.style.left.replace(/\D/g, '');
        if (carPosition < carRoad) {
          car.style.left = `${carPosition + oneCarStep}px`;
          if (isCarDrive === true) {
            requestAnimationFrame(animateCar);
          }
        }
        if (carPosition >= carRoad) {
          showFasterCar(id, time);
        }
      };

      requestAnimationFrame(animateCar);
      isCarDrive = await switchCarEngine(id);
    }
  }
}

export default makeCarMove;
