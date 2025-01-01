import findRoadWidth from '../info/find_road_width';
import switchCarEngine from '../../api/engine/switch_engine_car';

async function makeCarMove(id: string, time: number) {
  const roadWidth: number = findRoadWidth();
  const carElementLength: number = 100;
  const carRoad: number = roadWidth - carElementLength;
  const oneCarStep = Math.round((carRoad / time) * 16.7);

  const carContainer: HTMLElement | null = document.getElementById(`${id}`);
  if (carContainer) {
    const car: HTMLDivElement | null = carContainer.querySelector('.car');
    if (car) {
      let isCarDrive: boolean | undefined = true;

      const animateCar = function () {
        const carPosition: number = +car.style.left.replace(/\D/g, '');
        if (carPosition < carRoad) {
          car.style.left = `${carPosition + oneCarStep}px`;
          if (isCarDrive === true) {
            requestAnimationFrame(animateCar);
          }
        }
      };

      requestAnimationFrame(animateCar);
      isCarDrive = await switchCarEngine(id);
    }
  }
}

export default makeCarMove;
