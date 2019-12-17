import Controller from '@ember/controller';
import config from 'ember-get-config';

export default class ApplicationController extends Controller {
  foo = config.foo
}
