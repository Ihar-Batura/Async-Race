function cleanInputValue(id: string): void {
  const input: HTMLElement | null = document.getElementById(`${id}`);
  if (input) {
    (input as HTMLInputElement).value = '';
  }
}

export default cleanInputValue;
