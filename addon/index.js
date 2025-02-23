/* global require */
import { getOwnConfig } from '@embroider/macros';
import loadConfigFromMeta from '@embroider/config-meta-loader';

export default loadConfigFromMeta(getOwnConfig().modulePrefix);
