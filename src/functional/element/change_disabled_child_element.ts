function changeDisabledChildElement(
  parentId: string,
  className: string,
  action: boolean
): void {
  const parent: HTMLElement | null = document.getElementById(`${parentId}`);
  if (parent) {
    const childElement: HTMLElement | null = parent.querySelector(
      `.${className}`
    );
    if (childElement) {
      if (action === true) {
        childElement.setAttribute('disabled', 'true');
      } else {
        childElement.removeAttribute('disabled');
      }
    }
  }
}

export default changeDisabledChildElement;
