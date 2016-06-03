export function findConfigName(entries) {
  return Object.keys(entries).filter((entry) => {
    return entry.match(/^[^/]+\/config\/environment$/);
  })[0];
}

export default window.requirejs(findConfigName(window.requirejs.entries)).default;
