import { getOwnConfig, importSync } from '@embroider/macros';

let configModulePath = `${getOwnConfig().modulePrefix}/config/environment`;

export default importSync(configModulePath).default;
