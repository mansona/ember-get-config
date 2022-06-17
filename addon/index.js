import { getOwnConfig, importSync } from '@embroider/macros';

let configModulePath = `${getOwnConfig().modulePrefix}/config/environment`;

let config = importSync(configModulePath);

// fix problem with fastboot config being wrapped in a second "default" object
export default config.default?.default ?? config.default;
