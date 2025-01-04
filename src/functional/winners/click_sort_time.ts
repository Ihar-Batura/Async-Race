import updateWinnersPage from '../page/update_winners_page';

export default function clickSortOnTime() {
  const btnSortTime = document.querySelector('.table-record');

  if (btnSortTime) {
    btnSortTime.addEventListener('click', sortWins);
  }
}

function sortWins() {
  const btnSortTime = document.querySelector('.table-record');
  const btnSortWins = document.querySelector('.table-wins');

  if (btnSortTime && btnSortWins) {
    if (!btnSortTime.classList.value.includes('sort-time__asd')) {
      updateWinnersPage(`time&_order=ASC`);
      btnSortTime.classList.add('sort-time__asd');
      btnSortTime.classList.remove('sort-time__desc');
      btnSortWins.classList.remove('sort-wins__asd');
      btnSortWins.classList.remove('sort-wins__desc');
    } else {
      updateWinnersPage(`time&_order=DESC`);
      btnSortTime.classList.add('sort-time__desc');
      btnSortTime.classList.remove('sort-time__asd');
      btnSortWins.classList.remove('sort-wins__asd');
      btnSortWins.classList.remove('sort-wins__desc');
    }
  }
}
