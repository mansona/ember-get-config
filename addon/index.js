/* global require */
import { getOwnConfig } from '@embroider/macros';

let configModulePath = `${getOwnConfig().modulePrefix}/config/environment`;

export default require(configModulePath).default;
