import { getSelectCells } from './selectingCells';
import { saveState } from './localStorage';

export default function toAlign() {
  document.onclick = function (event) {
    const cells = getSelectCells();
    if (event.target.hasAttribute('data-value')) {
      const pos = event.target.getAttribute('data-value');
      cells.forEach((c) => {
        const textCell = document.getElementById(`${c}`);
        textCell.style.textAlign = `${pos}`;
        textCell.setAttribute('data-align', `${pos}`);
        saveState('text-align', c, pos);
      });
    }
  };
}
