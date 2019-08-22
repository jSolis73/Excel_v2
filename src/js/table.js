import { getState, getText } from './localStorage';

const DEFAULT_HEIGHT = 33;
const DEFAULT_WIDTH = 120;

export default function createTable(parent, rowCount, cellCount) {
  const elem = document.querySelector(parent);
  let trTh = '<div class="table__tr"><div class="table__tr-th"></div>';
  let body = '';

  for (let i = 1; i < cellCount + 1; i++) {
    const columnName = String.fromCharCode('A'.charCodeAt(0) + i - 1);
    const width = `${getState('col-state', columnName, DEFAULT_WIDTH)}px`;
    trTh += `
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
  trTh += '</div>';

  for (let j = 1; j < rowCount; j++) {
    const height = `${getState('row-state', j, DEFAULT_HEIGHT)}px`;
    body += `
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
    for (let k = 0; k < cellCount; k++) {
      const col = String.fromCharCode('A'.charCodeAt(0) + k);
      const width = `${getState('col-state', col, DEFAULT_WIDTH)}px`;
      const text = `${getText('text-state', col + j)}`;
      body += `
        <div
          class="table__td"
          contenteditable="true"
          data-col="${col}"
          id="${col + j}"
          style="width: ${width}"
          data-text="text"
        >
          ${text}
        </div>
      `;
    }
    body += '</div>';
  }
  elem.innerHTML = trTh + body;
}
