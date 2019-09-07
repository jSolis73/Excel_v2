import Selection from './selection';

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
    // cells.push(event.target.id);
    // event.target.classList.add('table__selected');
  };

  // table.onkeydown = function (e) {
  //   if (e.ctrlKey) {
  //     table.onclick = function (ev) {
  //       console.log('onkeydown')
  //       if (ev.target.classList.contains('table__td')) {
  //         const cell = ev.target.id;
  //         cells.push(cell);
  //         if (ev.target.classList.contains('table__selected')) {
  //           const el = ev.target;
  //           const position = cells.indexOf(`${el.id}`);
  //           if (position) cells.splice(position, 1);
  //           el.classList.remove('table__selected');
  //           return cells;
  //         }
  //         cells.forEach(c => document.getElementById(`${c}`).classList.add('table__selected'));
  //       }
  //     };
  //   }
  // };

  // table.onkeyup = function () {
  //   table.onclick = function (eve) {
  //     if (!eve.target.classList.contains('table__td')) return;
  //     selection.clear();
  //     cells.push(eve.target.id);
  //     eve.target.classList.add('table__selected');
  //   };
  // };
  return selection;
}
