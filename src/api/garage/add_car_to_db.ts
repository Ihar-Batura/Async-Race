async function addCarToDB(carName: string, carColor: string) {
  const url: string = 'http://127.0.0.1:3000/garage';
  const data = { name: carName, color: carColor };
  try {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.log('Error', error);
  }
}

export default addCarToDB;
