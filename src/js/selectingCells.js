import Selection from './classes/selection';

export default function selectCells() {
  const selection = new Selection();
  const table = document.getElementById('table');

  table.onclick = function (event) {
    const el = event.target;
    const { id } = el;
    if (!event.target.classList.contains('table__td')) return;
    if (event.ctrlKey) {
      if (selection.has(id)) {
        selection.remove(id, el);
      } else {
        selection.add({ id, el });
      }
    } else {
      selection.clear();
      selection.add({ id, el });
    }
  };
  return selection;
}
