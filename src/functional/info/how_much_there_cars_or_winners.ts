function howMatchThereCarsOrWinners(className: string): string {
  const element: HTMLElement | null = document.querySelector(`.${className}`);
  if (element) {
    const elementValue: string = element.innerText;
    const result = elementValue.replace(/\D/g, '');
    return result;
  }
  return '0';
}

export default howMatchThereCarsOrWinners;
