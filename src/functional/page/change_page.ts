import createGaragePage from '../../pages/garage';
import createWinnersPage from '../../pages/winners';

function changePage(pageName: string): void {
  const main: HTMLElement | null = document.querySelector('.main');
  if (main) {
    if (pageName === 'garage') {
      const garagePage = createGaragePage();
      main.append(garagePage);
    }
    if (pageName === 'winners') {
      const winnersPage = createWinnersPage();
      main.append(winnersPage);
    }
  }
}
export default changePage;
