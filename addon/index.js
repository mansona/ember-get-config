import find from './find';

export function findConfigName(entries) {
  return find.call(Object.keys(entries), (entry) => {
    return entry.match(/^[^/]+\/config\/environment$/);
  });
}

export default window.requirejs(findConfigName(window.requirejs.entries)).default;
