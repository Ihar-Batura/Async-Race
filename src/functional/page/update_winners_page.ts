import whatPageNumber from '../info/what_page_number';
import getWinnersData from '../../api/winners/get_data';
import showSumWinners from '../info/show_sum_winners';
import addWinnersRowToTable from '../winners/add_winners_row_to_table';
import cleanTableBody from '../winners/clean_table_body';
import stateBtnsPrevAndNext from '../buttons/state_btns_prev_and_next';
import clickSortOnWins from '../winners/click_sort_wins';
import clickSortOnTime from '../winners/click_sort_time';

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
  stateBtnsPrevAndNext();
  clickSortOnWins();
  clickSortOnTime();
}

export default updateWinnersPage;
