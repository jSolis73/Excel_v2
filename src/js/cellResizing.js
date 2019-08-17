export default function resizeCells() {
  const data = {
    tdTh: {},
    td: {},
    tr: {},
  };
  document.onmousedown = function clickDown(e) {
    const div = e.target.parentNode;
    const divValue = div.textContent;
    const currentWidth = div.offsetWidth;
    const currentHeight = div.offsetHeight;
    const firstPointX = e.clientX;
    const firstPointY = e.clientY;
    if (e.target.className === 'table__tr__td-th__resizeX') {
      function onMouseMove(event) {
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
      }
      function onMouseUp() {
        div.parentNode.style.cursor = 'default';
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      }
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    } else if (e.target.className === 'table__tr__tr-th__resizeY') {
      function onMouseMove(event) {
        div.style.cursor = 'row-resize';
        const secondPointY = event.clientY;
        const newHeight = secondPointY - firstPointY;
        div.parentNode.style.height = `${currentHeight + newHeight}px`;
        data.tr[`${div.parentNode.id}`] = `${currentHeight + newHeight}px`;
        localStorage.setItem('storage', JSON.stringify(data));
      }
      function onMouseUp() {
        div.style.cursor = 'default';
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      }
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }
  };
}
