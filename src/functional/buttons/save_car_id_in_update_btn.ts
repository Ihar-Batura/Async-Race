function saveCarIdInUpdateBtn(id: string): void {
  const btn: HTMLElement | null = document.getElementById('update-car-btn');
  if (btn) {
    (btn as HTMLButtonElement).value = id;
  }
}

export default saveCarIdInUpdateBtn;
