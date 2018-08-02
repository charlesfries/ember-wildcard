import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  wildcard: service(),

  init() {
    this._super(...arguments);

    this.set('actual', 'https://www.google.com/search?client=safari&rls=en&q=3ygrlhefgf&ie=UTF-8&oe=UTF-8');
    this.set('expected', 'https://www.google.com/search?client=safari&rls=en&q=**********&ie=UTF-8&oe=UTF-8');

    let actual = this.get('actual');
    let expected = this.get('expected');

    let isMatch = this.get('wildcard').match(actual, expected);

    this.set('isMatch', isMatch);

  },

  actions: {
    
  }
});
