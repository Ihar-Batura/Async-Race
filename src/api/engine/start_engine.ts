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
    const time: number = Math.trunc(data.distance / data.velocity);

    switchCarEngine(id, time);
  } catch (error) {
    console.log('Error', error);
  }
}

export default startCarEngine;
