export default function createTable(parent, rowCount, ceilCount) {
  const elem = document.querySelector('#table');
  let trTh = '<div class="tr">';
  for (let i = 0; i < ceilCount + 1; i++) {
    if (i === 0) {
      trTh += '<div class="trTh"></div>';
    } else {
      trTh += `<div class="tdTh">${String.fromCharCode('A'.charCodeAt(0) + i - 1)}<div class="resizeX"></div></div>`;
    }
  }
  trTh += '</div>';
  elem.innerHTML += trTh;
  for (let j = 0; j < rowCount; j++) {
    let tr = `<div class="tr"><div class="trTh">${j + 1}</div>`;
    for (let k = 0; k < ceilCount; k++) {
      tr += `<div class="td" contenteditable="true" id="${String.fromCharCode('A'.charCodeAt(0) + k) + (j + 1)}"></div>`;
    }
    tr += '</div>';
    elem.innerHTML += tr;
  }
}
