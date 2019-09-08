import { TdTh, Tr } from './classes/tableClasses';

export default function createTable(parent, cellCount, rowCount) {
  const elem = document.querySelector(parent);
  const tdTh = new TdTh();
  const tr = new Tr();
  elem.innerHTML = tdTh.addTdTh(cellCount) + tr.addCells(rowCount, cellCount);
}
