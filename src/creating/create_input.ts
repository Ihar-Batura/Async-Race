type TInputProps = {
  type: string;
  classes?: string[];
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  minLength?: string;
  value?: string;
  onInput?: () => void;
  parent?: HTMLElement;
};

function createInput({
  type,
  classes,
  id,
  placeholder,
  disabled,
  minLength,
  value,
  onInput,
  parent,
}: TInputProps): HTMLInputElement {
  const input = document.createElement('input');

  input.setAttribute('type', type);
  if (classes) {
    input.classList.add(...classes);
  }
  if (id) {
    input.setAttribute('id', id);
  }
  if (placeholder) {
    input.setAttribute('placeholder', placeholder);
  }
  if (disabled === true) {
    input.setAttribute('disabled', `${disabled}`);
  }
  if (value) {
    input.setAttribute('value', value);
  }
  if (minLength) {
    input.setAttribute('minlength', minLength);
  }
  if (onInput) {
    input.oninput = onInput;
  }
  if (parent) {
    parent.append(input);
  }

  return input;
}

export default createInput;
