export default function createTable(parent, rowCount, ceilCount) {
  const elem = document.querySelector('#table');
  let trTh = '<div class="tr">';
  for (let i = 0; i < ceilCount + 1; i++) {
    const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    if (i === 0) {
      trTh += '<div class="trTh"></div>';
    } else {
      trTh += `<div class="tdTh">${arr[i - 1]}</div>`;
    }
  }
  trTh += '</div>';
  elem.innerHTML += trTh;
  for (let j = 0; j < rowCount; j++) {
    let tr = `<div class="tr"><div class="trTh">${j + 1}</div>`;
    for (let k = 0; k < ceilCount; k++) {
      tr += '<div class="td" contenteditable="true"></div>';
    }
    tr += '</div>';
    elem.innerHTML += tr;
  }
}
