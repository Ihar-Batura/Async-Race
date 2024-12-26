function isValidInput(id: string): void {
  const input: HTMLInputElement | null = document.querySelector(`#${id}`);
  const btnId =
    id.split('-')[0] === 'create' ? 'create-car-btn' : 'update-car-btn';
  const btn: HTMLElement | null = document.querySelector(`#${btnId}`);

  if (input && btn) {
    const inputLength: number = input.value.length;
    console.log(inputLength);

    if (inputLength > 0) {
      btn.removeAttribute('disabled');
    } else {
      btn.setAttribute('disabled', 'true');
    }
  }
}

export default isValidInput;
