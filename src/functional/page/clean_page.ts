import getGarageData from '../../api/garage/get_data';
function cleanPage(): void {
  const page: HTMLDivElement | null = document.querySelector('.main');
  if (page) {
    page.innerHTML = '';
    getGarageData();
  }
}

export default cleanPage;
