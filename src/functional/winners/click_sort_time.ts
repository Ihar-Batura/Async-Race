import updateWinnersPage from '../page/update_winners_page';

export default function clickSortOnTime() {
  const btnSortTime = document.querySelector('.table-record');

  if (btnSortTime) {
    btnSortTime.addEventListener('click', sortWins);
  }
}

function sortWins() {
  const btnSortTime = document.querySelector('.table-record');
  if (btnSortTime) {
    if (!btnSortTime.classList.value.includes('sort')) {
      updateWinnersPage(`time&_order=ASC`);
      btnSortTime.classList.add('sort');
    } else {
      updateWinnersPage(`time&_order=DESC`);
      btnSortTime.classList.remove('sort');
    }
  }
}
