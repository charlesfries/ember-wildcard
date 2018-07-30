ember-wildcard
==============================================================================

[Short description of the addon.]

```js
// app/routes/index.js

export default Ember.Object.extend({
  compare: Ember.inject.service(),

  afterModel: function(model) {
  
    this.get('compare').setSymbol('*');
  
    let url = model.url;
    let expected = 'https://www.google.com/search?client=safari&rls=en&q=**********&ie=UTF-8&oe=UTF-8';
    
    if (this.get('compare').wildcard(url, expected) {
      // strings match
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

[Longer description of how to use the addon in apps.]


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
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
