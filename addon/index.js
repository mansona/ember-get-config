import { isTesting, macroCondition, getOwnConfig } from '@embroider/macros';

export default macroCondition(isTesting())
  ? getOwnConfig().testConfig
  : getOwnConfig().config;
