function whatPageNumber(): string {
  const pageNumber: HTMLDivElement | null =
    document.querySelector('.page-number');
  if (pageNumber) {
    return pageNumber.innerText;
  }
  return '1';
}

export default whatPageNumber;
