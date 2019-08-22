import { saveText } from './localStorage';

export default function saveContent() {
  document.onkeyup = (event) => {
    if (event.target.hasAttribute('data-text')) {
      const textPlace = event.target;
      const content = textPlace.textContent;
      saveText('text-state', textPlace.id, content);
    }
  };
}
