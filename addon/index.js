import find from './find';

const CONFIG_REGEX = /^[^/]+\/config\/environment$/;

export function findConfigName(entries) {
  return find.call(Object.keys(entries), (entry) => {
    return CONFIG_REGEX.test(entry);
  });
}

export default window.requirejs(findConfigName(window.requirejs.entries)).default;
