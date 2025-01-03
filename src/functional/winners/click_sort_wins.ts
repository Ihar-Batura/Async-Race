import updateWinnersPage from '../page/update_winners_page';

export default function clickSortOnWins() {
  const btnSortWins = document.querySelector('.table-wins');

  if (btnSortWins) {
    btnSortWins.addEventListener('click', sortWins);
  }
}

function sortWins() {
  const btnSortWins = document.querySelector('.table-wins');
  if (btnSortWins) {
    if (!btnSortWins.classList.value.includes('sort')) {
      updateWinnersPage(`wins&_order=ASC`);
      btnSortWins.classList.add('sort');
    } else {
      updateWinnersPage(`wins&_order=DESC`);
      btnSortWins.classList.remove('sort');
    }
  }
}
