async function addNewWinnerToDB(id: number, wins: number, time: number) {
  const url: string = 'http://127.0.0.1:3000/winners';
  const data = { id: id, wins: wins, time: time };
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

export default addNewWinnerToDB;
