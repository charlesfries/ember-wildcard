import Service from '@ember/service';

export default Service.extend({
  symbol: null,

  init() {
    this._super(...arguments);
    this.set('symbol', '*');
  },

  setSymbol(symbol) {
    if (typeof symbol !== 'string') return;
    this.set('symbol', symbol);
  },

  match(actual, expect) {
    if (actual.length !== expect.length) return false;
    let a = '';
    let e = '';
    for (let i = 0; i < expect.length; i++) {
      if (expect[i] !== this.get('symbol')) {
        a += actual[i];
        e += expect[i];
      }
    }
    return a === e;
  },

  // match(opening, closing, actual, expect) {
  //   if (actual.length !== expect.length) return false;
  //   let a = '';
  //   let e = '';
  //   for (let i = 0; i < expect.length; i++) {
  //     if (expect[i] !== this.get('symbol')) {
  //       a += actual[i];
  //       e += expect[i];
  //     }
  //   }
  //   return a === e;
  // }
});
