import createHeader from '../components/header';
import createMain from '../components/main';
import createFooter from '../components/footer';

function createHomePage() {
  const body: HTMLBodyElement | null = document.querySelector('body');

  if (body) {
    const header = createHeader();
    const main = createMain();
    const footer = createFooter();
    body.append(header, main, footer);
  }
}

export default createHomePage;
