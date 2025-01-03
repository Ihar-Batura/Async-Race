import whatPageNumber from '../info/what_page_number';
import getWinnersData from '../../api/winners/get_data';
import showSumWinners from '../info/show_sum_winners';
import addWinnersRowToTable from '../winners/add_winners_row_to_table';
import cleanTableBody from '../winners/clean_table_body';

async function updateWinnersPage(sort: string) {
  cleanTableBody();
  const pageNumber = whatPageNumber();
  const winnersPageData = await getWinnersData(
    `/winners?_page=${pageNumber}&_limit=10&_sort=${sort}`
  );

  const winnersData = await getWinnersData('/winners');
  const winnersValue: number = winnersData.length > 0 ? winnersData.length : 0;
  showSumWinners(winnersValue);
  addWinnersRowToTable(pageNumber, winnersPageData);
}

export default updateWinnersPage;
