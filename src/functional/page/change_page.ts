import createGaragePage from '../../pages/garage';

function changePage(pageName: string): void {
  const main: HTMLElement | null = document.querySelector('.main');
  if (main) {
    if (pageName === 'garage') {
      const garagePage = createGaragePage();
      main.append(garagePage);
    }
  }
}
export default changePage;
