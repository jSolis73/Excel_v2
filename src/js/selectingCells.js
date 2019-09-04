let cells;
export function selectCells() {
  const table = document.getElementById('table');
  function cancelSelection() {
    cells.forEach(c => document.getElementById(`${c}`).classList.remove('table__selected'));
  }

  table.onclick = function (event) {
    if (!event.target.classList.contains('table__td')) return;
    if (cells !== undefined && cells.length > 0) cancelSelection();
    cells = [];
    cells.push(event.target.id);
    event.target.classList.add('table__selected');
  };

  table.onkeydown = function (e) {
    if (e.ctrlKey) {
      table.onclick = function (ev) {
        if (ev.target.classList.contains('table__td')) {
          const cell = ev.target.id;
          cells.push(cell);
          if (ev.target.classList.contains('table__selected')) {
            const el = ev.target;
            const position = cells.indexOf(`${el.id}`);
            if (position) cells.splice(position, 1);
            el.classList.remove('table__selected');
            return cells;
          }
          cells.forEach(c => document.getElementById(`${c}`).classList.add('table__selected'));
        }
      };
    }
  };

  table.onkeyup = function () {
    table.onclick = function (eve) {
      if (!eve.target.classList.contains('table__td')) return;
      cancelSelection();
      cells = [];
      cells.push(eve.target.id);
      eve.target.classList.add('table__selected');
    };
  };
}

export function getSelectCells() {
  const cellsAr = cells;
  return cellsAr;
}
