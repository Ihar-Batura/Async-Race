import getWinnersData from '../../api/winners/get_data';
import addNewWinnerToDB from '../../api/winners/add_new_winner_to_db';
import updateWinnerInDB from '../../api/winners/update_winner';

async function saveWinnerResult(id: string, finishTime: number) {
  const getWinnerFromDB = await getWinnersData(`/winners/${id}`);
  if (Object.keys(getWinnerFromDB).length === 0) {
    addNewWinnerToDB(+id, 1, finishTime);
  } else {
    const newTime: number =
      getWinnerFromDB.time > finishTime ? getWinnerFromDB.time : finishTime;

    const newWins: number = getWinnerFromDB.wins + 1;
    updateWinnerInDB(+id, newWins, newTime);
  }
}

export default saveWinnerResult;
