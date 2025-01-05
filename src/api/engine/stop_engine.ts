async function stopCarEngine(id: string) {
  const url: string = `http://127.0.0.1:3000/engine?id=${id}&status=stopped`;
  try {
    const result = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await result.json();
    return data.velocity;
  } catch (error) {
    console.log('Error', error);
  }
}

export default stopCarEngine;
