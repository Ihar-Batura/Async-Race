import updateWinnersPage from '../page/update_winners_page';

export default function clickSortOnWins() {
  const btnSortWins = document.querySelector('.table-wins');

  if (btnSortWins) {
    btnSortWins.addEventListener('click', sortWins);
  }
}

function sortWins() {
  const btnSortWins = document.querySelector('.table-wins');
  const btnSortTime = document.querySelector('.table-record');

  if (btnSortWins && btnSortTime) {
    if (!btnSortWins.classList.value.includes('sort-wins__asd')) {
      updateWinnersPage(`wins&_order=ASC`);
      btnSortWins.classList.add('sort-wins__asd');
      btnSortWins.classList.remove('sort-wins__desc');
      btnSortTime.classList.remove('sort-time__asd');
      btnSortTime.classList.remove('sort-time__desc');
    } else {
      updateWinnersPage(`wins&_order=DESC`);
      btnSortWins.classList.add('sort-wins__desc');
      btnSortWins.classList.remove('sort-wins__asd');
      btnSortTime.classList.remove('sort-time__asd');
      btnSortTime.classList.remove('sort-time__desc');
    }
  }
}
