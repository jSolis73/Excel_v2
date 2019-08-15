export default function resizeDiv() {
  document.onmousedown = function clickDown(e) {
    const div = e.target.parentNode;
    const currentWidth = div.offsetWidth;
    const shiftX = e.clientX;
    if (e.target.className === 'resizeX') {
      function onMouseMove(event) {
        div.parentNode.style.cursor = 'col-resize';
        const shiftX2 = event.clientX;
        const newWidth = shiftX2 - shiftX;
        div.style.width = `${currentWidth + newWidth}px`;
      }
      function onMouseUp() {
        div.parentNode.style.cursor = 'default';
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      }
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }
  };
}
