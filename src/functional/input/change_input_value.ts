function changeInputValue(id: string, value: string): void {
  const input: HTMLElement | null = document.getElementById(`${id}`);
  if (input) {
    (input as HTMLInputElement).value = value;
  }
}

export default changeInputValue;
