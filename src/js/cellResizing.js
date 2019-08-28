import { saveState } from './localStorage';

export default function resizeCells() {
  document.addEventListener('mousedown', (event) => {
    const { resize } = event.target.dataset;
    if (!resize) {
      return;
    }

    let $columns;
    const $parent = event.target.closest('[data-type="resizable"]');
    const { offsetWidth, offsetHeight } = $parent;

    if (resize === 'column') {
      $columns = document.querySelectorAll(`[data-col="${$parent.id}"]`);
    }

    document.onmousemove = (e) => {
      if (resize === 'column') {
        const delta = e.clientX - event.clientX;
        const width = offsetWidth + delta;
        $parent.style.width = `${width}px`;
        $columns.forEach(col => col.style.width = `${width}px`);
        saveState('col-state', $parent.id, width);
      } else if (resize === 'row') {
        const delta = e.clientY - event.clientY;
        const height = offsetHeight + delta;
        $parent.style.height = `${height}px`;
        saveState('row-state', $parent.id, height);
      }
    };
    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  });
}
