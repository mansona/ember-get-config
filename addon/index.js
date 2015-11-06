export default function emberGetConfig() {
  const configName = Object.keys(window.requirejs.entries).filter((entry) => {
    return entry.match(/\/config\/environment/);
  })[0];

  return window.requirejs(configName).default;
}
