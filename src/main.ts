import 'normalize.css';
import './css/style.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const collapsibles = document.querySelectorAll<HTMLDivElement>('.collapsible');

for (const item of Array.from(collapsibles)) {
  item.addEventListener('click', function () {
    this.classList.toggle('collapsible--expanded');
  });
}

const footerParagraph =
  document.querySelector<HTMLParagraphElement>('.footer__copyright')!;

footerParagraph.innerText = `© ${new Date().getFullYear()} Dr. Sabry`;
