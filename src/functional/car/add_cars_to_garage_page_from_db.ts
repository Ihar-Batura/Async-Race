import createCarItem from '../../components/car_item';

interface ICarsData {
  id: number;
  name: string;
  color: string;
}

function addCarsToGaragePageFromDB(arrCarsData: ICarsData[]): void {
  const garageBox: HTMLDivElement | null =
    document.querySelector('.garage-box');
  if (garageBox) {
    arrCarsData.forEach((carData) => {
      const car = createCarItem({
        id: `${carData.id}`,
        name: carData.name,
        color: carData.color,
      });
      garageBox.append(car);
    });
  }
}

export default addCarsToGaragePageFromDB;
