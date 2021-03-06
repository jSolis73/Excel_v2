export function getState(name, key, defaultValue = '') {
  const state = localStorage.getItem(name)
    ? JSON.parse(localStorage.getItem(name))
    : {};

  return state[key] ? state[key] : defaultValue;
}

export function saveState(name, key, value) {
  const state = localStorage.getItem(name)
    ? JSON.parse(localStorage.getItem(name))
    : {};
  state[key] = value;
  localStorage.setItem(name, JSON.stringify(state));
}
