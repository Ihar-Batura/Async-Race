interface ILink {
  href: string;
  classes?: string[];
  id?: string;
  text?: string;
  target?: string;
  parent?: HTMLElement;
}

function createLink({
  href,
  classes,
  id,
  text,
  target,
  parent,
}: ILink): HTMLAnchorElement {
  const link = document.createElement('a');
  link.href = href;

  if (classes) {
    link.classList.add(...classes);
  }
  if (id) {
    link.id = id;
  }
  if (text) {
    link.textContent = text;
  }
  if (target) {
    link.setAttribute('target', target);
  }
  if (parent) {
    parent.append(link);
  }

  return link;
}

export default createLink;
