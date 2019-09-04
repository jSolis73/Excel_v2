/* eslint-disable no-tabs */
export default function createIcons() {
  const icons = ['left', 'center', 'right'];
  const menu = document.querySelector('.button-menu');
  for (let i = 0; i < icons.length; i++) {
    const button = `
      <input
        type="image"
				src="./src/imgs/${icons[i]}.png"
        class="button-menu__icon"
        data-value="${icons[i]}"
			/>
		`;
    menu.innerHTML += button;
  }
}
