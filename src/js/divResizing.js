export default function resizeDiv() {
  document.onmousedown = function (e) {
    if (e.target.className === 'resizeX') {
      const div = e.target.parentNode;
      const currentWidth = div.offsetWidth;
      const shiftX = e.clientX;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      function onMouseMove(e) {
				div.style.position = 'static';
        const shiftX2 = e.clientX;
        const newWidth = shiftX2 - shiftX;
        div.style.width = `${currentWidth + newWidth}px`;
      }
      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }
    }
  };
}
