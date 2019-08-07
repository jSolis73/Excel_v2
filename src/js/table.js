export const elem = document.querySelector('#table');

export function createTable(parent, row, column) {
  const table = document.createElement('table');

  for (let i = 0; i < row; i++) {
    const tr = document.createElement('tr');

    for (let j = 0; j < column; j++) {
      const td = document.createElement('td');
      const input = document.createElement('input');
      input.classList.add('ceil');
      td.appendChild(input);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  parent.appendChild(table);
}
