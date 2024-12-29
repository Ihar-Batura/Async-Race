import updateGaragePage from '../../functional/page/update_garage_page';

async function deleteCarFromDB(id: string) {
  const url: string = `http://127.0.0.1:3000/garage/${id}`;
  try {
    await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    updateGaragePage();
  } catch (error) {
    console.log('Error', error);
  }
}

export default deleteCarFromDB;
