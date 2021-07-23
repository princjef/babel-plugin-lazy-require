[![Build Status](https://travis-ci.org/mhassan1/babel-plugin-lazy-require.svg?branch=master)](https://travis-ci.org/mhassan1/babel-plugin-lazy-require)
# babel-plugin-lazy-require

Transform global require statements that run on module load to lazily evaluated
statements that get evaluted when first accessed later on in the file.

This is particularly useful when you have modules that are only needed under
certain conditions and when startup time and/or memory footprint are important.

## Usage

To install:

```
npm install --save-dev babel-cli@6 babel-plugin-lazy-require
```

To run:

```
babel <your-code> --plugins babel-plugin-lazy-require
```

## Example

**Input**

```js
// Module is imported here
const someModule = require('some-module');

function myCode() { 
    // Module is only actually used here
    someModule.doSomething();
}
```

**Output**

```js
const _someModule = {
    initialized: false
};

const _imports = {
    get someModule() {
        if (!_someModule.initialized) {
            _someModule.value = require('some-module');
            _someModule.initialized = true;
        }
        return _someModule.value;
    }
}

function myCode() {
    // Module is imported and used here
    _imports.someModule.doSomething();
}
```

## How It Works

The following imports will be transformed:
```js
// assignment
const someModule = require('some-module')
let someModule = require('some-module')
var someModule = require('some-module')

// one layer of wrapping
// this is useful for wrappers like `_interopRequireWildcard` from Babel `preset-env`
const someWrappedModule = wrap(require('some-module'))
```

The following imports will not be transformed:
```js
// no assignment so no way to lazy-load
require('some-module')

// one layer of wrapping with multiple parameters is not allowed
const someWrappedModule = wrap(require('some-module'), 'data')

// multiple wrapping layers is not allowed
const someWrappedModule = wrap(wrap(require('some-module')))
```
