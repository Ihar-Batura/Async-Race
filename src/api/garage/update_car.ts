async function updateCarInDB(carName: string, carColor: string, id: string) {
  const url: string = `http://127.0.0.1:3000/garage/${id}`;
  const data = { name: carName, color: carColor };
  try {
    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.log('Error', error);
  }
}

export default updateCarInDB;
