function cleanTableBody(): void {
  const tableBody: HTMLElement | null = document.querySelector('.table-body');
  if (tableBody) {
    tableBody.innerHTML = '';
  }
}

export default cleanTableBody;
