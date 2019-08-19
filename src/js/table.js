export default function createTable(parent, rowCount, cellCount) {
  const elem = document.querySelector('#table');
  let trTh = '<div class="table__tr">';
  for (let i = 0; i < cellCount + 1; i++) {
    if (i === 0) {
      trTh += '<div class="table__tr__tr-th"></div>';
    } else {
      trTh += `<div class="table__tr__td-th" id=${String.fromCharCode('A'.charCodeAt(0) + i - 1)}>${String.fromCharCode('A'.charCodeAt(0) + i - 1)}<div class="table__tr__td-th__resizeX"></div></div>`;
    }
  }
  trTh += '</div>';
  elem.innerHTML += trTh;
  for (let j = 0; j < rowCount; j++) {
    let tr = `<div class="table__tr" id = ${j + 1}><div class="table__tr__tr-th">${j + 1}<div class="table__tr__tr-th__resizeY"></div></div>`;
    for (let k = 0; k < cellCount; k++) {
      tr += `<div class="table__tr__td" contenteditable="true" id="${String.fromCharCode('A'.charCodeAt(0) + k) + (j + 1)}"></div>`;
    }
    tr += '</div>';
    elem.innerHTML += tr;
  }
}
