export default function resizeDiv() {
  document.onmousedown = function (e) {
		if (e.which == 1) {
			if (e.target.className === 'resizeX') {
				const div = e.target.parentNode;
				const currentWidth = div.offsetWidth;
				const shiftX = e.clientX;
				document.addEventListener('mousemove', onMouseMove);
				document.addEventListener('mouseup', onMouseUp);
				function onMouseMove(e) {
					div.parentNode.style.cursor = 'col-resize';
					const shiftX2 = e.clientX;
					const newWidth = shiftX2 - shiftX;
					div.style.width = `${currentWidth + newWidth}px`;
				}
				function onMouseUp() {
					div.parentNode.style.cursor = 'default';
					document.removeEventListener('mousemove', onMouseMove);
					document.removeEventListener('mouseup', onMouseUp);
				}
			}
		}
  };
}
