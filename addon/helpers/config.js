import { getOwner } from '@ember/application';
import Helper from '@ember/component/helper';
import { get } from '@ember/object';

export default class extends Helper {
  constructor() {
    super(...arguments);

    this.config = getOwner(this).resolveRegistration('config:environment');
  }

  compute([path]) {
    return get(this.config, path);
  }
}
