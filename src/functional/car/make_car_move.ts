import findRoadWidth from '../info/find_road_width';

function makeCarMove(id: string, time: number) {
  const roadWidth: number = findRoadWidth();
  const carElementLength: number = 100;
  const carRoad: number = roadWidth - carElementLength;
  const oneCarStep = Math.round((carRoad / time) * 16.7);

  const carContainer: HTMLElement | null = document.getElementById(`${id}`);
  if (carContainer) {
    const car: HTMLDivElement | null = carContainer.querySelector('.car');
    if (car) {
      const animateCar = function () {
        const carPosition: number = +car.style.left.replace(/\D/g, '');
        if (carPosition < carRoad) {
          car.style.left = `${carPosition + oneCarStep}px`;
          requestAnimationFrame(animateCar);
        }
      };
      requestAnimationFrame(animateCar);
    }
  }
}

export default makeCarMove;
