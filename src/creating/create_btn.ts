type TBtnProps = {
  classes?: string[];
  text?: string;
  id?: string;
  disabled?: boolean;
  onClick?: () => void;
  parent?: HTMLElement;
};

function createButton({
  classes,
  text,
  id,
  disabled,
  onClick,
  parent,
}: TBtnProps): HTMLElement {
  const button: HTMLButtonElement = document.createElement('button');

  if (classes) {
    button.classList.add(...classes);
  }
  if (text) {
    button.textContent = text;
  }
  if (id) {
    button.id = id;
  }
  if (disabled) {
    button.setAttribute('disabled', ' ');
  }
  if (onClick) {
    button.onclick = onClick;
  }
  if (parent) {
    parent.append(button);
  }

  return button;
}

export default createButton;
