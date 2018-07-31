ember-wildcard
==============================================================================

```js
let isMatch = this.get('compare').wildcard('ID #9237720978', 'ID #**********'); // true
```

```js
// app/routes/index.js

export default Ember.Object.extend({
  wildcard: Ember.inject.service(),

  afterModel: function(model) {

    this.get('wildcard').setSymbol('*');

    let url = model.url;
    let expected = 'https://www.google.com/search?client=safari&rls=en&q=**********&ie=UTF-8&oe=UTF-8';

    if (this.get('wildcard').match(url, expected)) {
      // strings are equal
    }
  }
});
```

Installation
------------------------------------------------------------------------------

```
ember install ember-wildcard
```


Usage
------------------------------------------------------------------------------

ember-wildcard is an addon for comparing strings that contains arbitrary data, such at IDs or timestamps. This addon is especially useful when writing tests and comparing expected and actual output.


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone https://github.com/charlesfries/ember-wildcard`
* `cd ember-wildcard`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `npm test` – Runs `ember try:each` to test your addon against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
