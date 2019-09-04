import { saveState } from './localStorage';

export default function saveContent() {
  document.getElementById('table').oninput = (event) => {
    const textPlace = event.target;
    const content = textPlace.textContent;
    saveState('text-state', textPlace.id, content);
  };
}
