export default class Selection {
  constructor() {
    this.cells = [];
  }

  add(cell) {
    cell.el.classList.add('table__selected');
    this.cells.push(cell);
  }

  clear() {
    this.cells.forEach(c => c.el.classList.remove('table__selected'));
    this.cells = [];
  }

  has(id) {
    return !!this.cells.find(c => c.id === id);
  }

  remove(id, el) {
    this.cells = this.cells.filter(c => c.id !== id);
    el.classList.remove('table__selected');
  }
}
