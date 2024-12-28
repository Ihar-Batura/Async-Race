function cleanPage(): void {
  const page: HTMLDivElement | null = document.querySelector('.main');
  if (page) {
    page.innerHTML = '';
  }
}

export default cleanPage;
