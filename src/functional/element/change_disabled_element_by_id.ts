function changeDisabledElementById(id: string, action: boolean): void {
  const element: HTMLElement | null = document.getElementById(`${id}`);
  if (element) {
    if (action === true) {
      element.setAttribute('disabled', 'true');
    } else {
      element.removeAttribute('disabled');
    }
  }
}

export default changeDisabledElementById;
