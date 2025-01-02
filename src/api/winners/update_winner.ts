async function updateWinnerInDB(id: number, wins: number, time: number) {
  const url: string = `http://127.0.0.1:3000/winners/${id}`;
  const data = { wins: wins, time: time };
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

export default updateWinnerInDB;
