export default function resizeCells() {
  document.onmousedown = function clickDown(e) {
    const div = e.target.parentNode;
    const divValue = div.textContent;
    const currentWidth = div.offsetWidth;
    const currentHeight = div.offsetHeight;
    const firstPointX = e.clientX;
    const firstPointY = e.clientY;
    if (e.target.className === 'resizeX') {
      function onMouseMove(event) {
        div.parentNode.style.cursor = 'col-resize';
        const secondPointX = event.clientX;
        const newWidth = secondPointX - firstPointX;
        div.style.width = `${currentWidth + newWidth}px`;
        const rows = document.getElementsByClassName('tr');
        for (let i = 1; i < rows.length; i++) {
          function resize() {
            document.getElementById(`${divValue + i}`).style.width = div.style.width;
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
    } else if (e.target.className === 'resizeY') {
      function onMouseMove(event) {
        div.style.cursor = 'row-resize';
        const secondPointY = event.clientY;
        const newHeight = secondPointY - firstPointY;
        div.parentNode.style.height = `${currentHeight + newHeight}px`;
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
