function cleanPage(): void {
  const page: HTMLDivElement | null = document.querySelector('.main .wrapper');
  if (page) {
    page.innerHTML = '';
  }
}

export default cleanPage;
