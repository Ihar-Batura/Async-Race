import createTableBodyRow from '../../components/table_body_row';
import getGarageData from '../../api/garage/get_data';

interface IArrWinners {
  id: number;
  wins: number;
  time: number;
}

async function addWinnersRowToTable(
  pageNumber: string,
  arrWinners: IArrWinners[]
) {
  const tableBody: HTMLElement | null = document.querySelector('.table-body');
  const startRowNumber: number =
    +pageNumber > 1 ? (+pageNumber - 1) * 10 + 1 : +pageNumber;

  for (let i = 0; i < arrWinners.length; i += 1) {
    const carId: number = arrWinners[i].id;
    const carInfo = await getGarageData(`/garage/${carId}`);

    const rowNumber: number = startRowNumber + i;
    const wins: number = arrWinners[i].wins;
    const time: number = arrWinners[i].time;
    const carColor: string = carInfo.color;
    const carName: string = carInfo.name;

    const newRow = createTableBodyRow(
      `${rowNumber}`,
      `${carColor}`,
      `${carName}`,
      `${wins}`,
      `${time}`
    );

    if (tableBody) {
      tableBody.append(newRow);
    }
  }
}

export default addWinnersRowToTable;
