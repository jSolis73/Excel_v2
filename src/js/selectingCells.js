export default function selectCells() {
  let cells;
  const table = document.getElementById('table');
  function cancelSelection() {
		cells.forEach(c => document.getElementById(`${c}`).classList.remove('table__selected'));
	}
	
  table.onclick = function (event) {
    if (cells !== undefined && cells.length > 0) cancelSelection();
    cells = [];
    cells.push(event.target.id);
    event.target.classList.add('table__selected');
  };
  table.onkeydown = function (e) {
    if (e.ctrlKey) {
      table.onclick = function (ev) {
        const cell = ev.target.id;
        cells.push(cell);
        cells.forEach(c => document.getElementById(`${c}`).classList.add('table__selected'));
      };
    }
  };
  table.onkeyup = function () {
    table.onclick = function (eve) {
      cancelSelection();
      cells = [];
      cells.push(eve.target.id);
    };
  };
}
