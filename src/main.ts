import 'normalize.css';
import './css/style.scss';

const collapsibles = document.querySelectorAll<HTMLDivElement>('.collapsible');

for (const item of Array.from(collapsibles)) {
  item.addEventListener('click', function () {
    this.classList.toggle('collapsible--expanded');
  });
}
