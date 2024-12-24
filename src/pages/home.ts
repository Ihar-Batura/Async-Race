import createHeader from '../components/header';
import createFooter from '../components/footer';

function createHomePage() {
  const body: HTMLBodyElement | null = document.querySelector('body');

  if (body) {
    const header = createHeader();
    const footer = createFooter();
    body.append(header, footer);
  }
}

export default createHomePage;
