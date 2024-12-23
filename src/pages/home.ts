import createHeader from '../components/header';

function createHomePage() {
  const body: HTMLBodyElement | null = document.querySelector('body');

  if (body) {
    const header = createHeader();
    body.append(header);
  }
}

export default createHomePage;
