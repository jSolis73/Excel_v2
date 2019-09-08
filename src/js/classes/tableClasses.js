import { getState } from '../localStorage';

export class TdTh {
  constructor() {
    this.trTh = '<div class="table__tr"><div class="table__tr-th"></div>';
    this.DEFAULT_WIDTH = 120;
    this.body = '';
  }

  addTdTh(tdCount) {
    for (let i = 1; i < tdCount + 1; i++) {
      const columnName = String.fromCharCode('A'.charCodeAt(0) + i - 1);
      const width = `${getState('col-state', columnName, this.DEFAULT_WIDTH)}px`;
      this.trTh += `
        <div 
          class="table__td-th"
          id=${columnName}
          data-type="resizable"
          style="width: ${width}"
        >
          ${columnName}
          <div 
            class="table__resizeX"
            data-resize="column"
          ></div>
        </div>
      `;
    }
    this.trTh += '</div>';
    return this.trTh;
  }
}

export class Td extends TdTh {
  addTd(cell, j) {
    for (let k = 0; k < cell; k++) {
      const col = String.fromCharCode('A'.charCodeAt(0) + k);
      const width = `${getState('col-state', col, this.DEFAULT_WIDTH)}px`;
      const text = `${getState('text-state', col + j)}`;
      const aligning = `${getState('text-align', col + j)}`;
      this.body += `
        <div
          class="table__td"
          contenteditable="true"
          data-col="${col}"
          id="${col + j}"
          style="width: ${width}; text-align: ${aligning}"
          data-type="text"
        >
          ${text}
        </div>
      `;
    }
    this.body += '</div>';
    return this.body;
  }
}

export class Tr extends Td {
  constructor() {
    super();
    this.DEFAULT_HEIGHT = 33;
  }

  addCells(rowCount, cellCount) {
    for (let j = 1; j <= rowCount; j++) {
      const height = `${getState('row-state', j, this.DEFAULT_HEIGHT)}px`;
      this.body += `
        <div
          class="table__tr"
          id=${j}
          data-type="resizable"
          style="height: ${height}"
        >
          <div class="table__tr-th">
            ${j}
            <div
              class="table__resizeY"
              data-resize="row"
            ></div>
          </div>
      `;
      this.addTd(cellCount, j);
      this.body += '</div>';
    }
    return this.body;
  }
}
