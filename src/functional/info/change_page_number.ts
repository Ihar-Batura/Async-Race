function changePageNumber(number: string, action: string): void {
  const pageNumberElement: HTMLDivElement | null =
    document.querySelector('.page-number');
  if (pageNumberElement) {
    if (action === '+') {
      pageNumberElement.innerText = `${+number + 1}`;
    } else {
      pageNumberElement.innerText = `${+number - 1}`;
    }
  }
}

export default changePageNumber;
