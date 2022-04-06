import { isTesting, macroCondition, getOwnConfig } from '@embroider/macros';

let config;

if (macroCondition(isTesting())) {
  config = getOwnConfig().testConfig;
} else {
  config = getOwnConfig().config;
}

export default config;
