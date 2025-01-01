async function switchCarEngine(id: string) {
  const url: string = `http://127.0.0.1:3000/engine?id=${id}&status=drive`;
  try {
    const result = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (result.status === 500) {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    console.log('Error', error);
  }
}

export default switchCarEngine;
