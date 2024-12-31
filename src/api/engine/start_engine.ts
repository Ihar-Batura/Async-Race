import makeCarMove from '../../functional/car/make_car_move';
import switchCarEngine from './switch_engine_car';

async function startCarEngine(id: string) {
  const url: string = `http://127.0.0.1:3000/engine?id=${id}&status=started`;
  try {
    const result = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await result.json();
    const carTime: number = Math.trunc(data.distance / data.velocity);
    const time: number = +(carTime / 1000).toFixed(2);
    console.log('time', time);

    makeCarMove(id, carTime);
    switchCarEngine(id);
  } catch (error) {
    console.log('Error', error);
  }
}

export default startCarEngine;
