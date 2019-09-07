import { saveState } from './localStorage';
import selectCells from './selectingCells';

export default function toAlign() {
  const cellsAr = selectCells();
  document.onclick = function (event) {
    if (event.target.hasAttribute('data-value')) {
      const pos = event.target.getAttribute('data-value');
      cellsAr.cells.forEach(c => {
        c.el.style.textAlign = `${pos}`;
        c.el.setAttribute('data-align', `${pos}`);
        saveState('text-align', c.id, pos);
      });
    }
  };
}
