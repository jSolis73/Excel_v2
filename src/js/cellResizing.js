export default function resizeCells() {
  let data = {
    tdTh: {},
    td: {},
    tr: {},
  };
  const stored = localStorage.getItem('data');
  if (stored) data = JSON.parse(stored);
  document.onmousedown = function clickDown(e) {
    const div = e.target.parentNode;
    const divValue = div.textContent;
    const currentWidth = div.offsetWidth;
    const currentHeight = div.offsetHeight;
    const firstPointX = e.clientX;
    const firstPointY = e.clientY;
    function onMouseMove(event) {
      if (e.target.className === 'table__tr__td-th__resizeX') {
        div.parentNode.style.cursor = 'col-resize';
        const secondPointX = event.clientX;
        const newWidth = secondPointX - firstPointX;
        div.style.width = `${currentWidth + newWidth}px`;
        data.tdTh[`${divValue}`] = div.style.width;
        const rows = document.getElementsByClassName('table__tr');
        for (let i = 1; i < rows.length; i++) {
          function resize() {
            document.getElementById(`${divValue + i}`).style.width = div.style.width;
            data.td[`${divValue + i}`] = div.style.width;
          }
          resize();
        }
      } else if (e.target.className === 'table__tr__tr-th__resizeY') {
        div.style.cursor = 'row-resize';
        div.style.cursor = 'default';
        const secondPointY = event.clientY;
        const newHeight = secondPointY - firstPointY;
        div.parentNode.style.height = `${currentHeight + newHeight}px`;
        data.tr[`${div.parentNode.id}`] = `${currentHeight + newHeight}px`;
      }
      localStorage.setItem('storage', JSON.stringify(data));
    }
    document.addEventListener('mousemove', onMouseMove);
    function onMouseUp() {
      div.parentNode.style.cursor = 'default';
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }
    document.addEventListener('mouseup', onMouseUp);
  };
}
