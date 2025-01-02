async function deleteWinnerFromDB(id: string) {
  const url: string = `http://127.0.0.1:3000/winners/${id}`;
  try {
    await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.log('Error', error);
  }
}

export default deleteWinnerFromDB;
