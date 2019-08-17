export default function getData() {
  window.onload = function () {
    if (localStorage) {
      const parseObj = JSON.parse(localStorage.getItem('storage'));
      for (let a = 0; a < Object.keys(parseObj.tdTh).length; a++) {
        document.getElementById(`${Object.keys(parseObj.tdTh)[a]}`).style.width = parseObj.tdTh[Object.keys(parseObj.tdTh)[a]];
      }
      for (let b = 0; b < Object.keys(parseObj.td).length; b++) {
        document.getElementById(`${Object.keys(parseObj.td)[b]}`).style.width = parseObj.td[Object.keys(parseObj.td)[b]];
      }
      for (let c = 0; c < Object.keys(parseObj.tr).length; c++) {
        document.getElementById(`${Object.keys(parseObj.tr)[c]}`).style.height = parseObj.tr[Object.keys(parseObj.tr)[c]];
      }
    }
  };
}
