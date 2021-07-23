const constGlobalRequire = require('const-global-require');
let letGlobalRequire = require('let-global-require');
var varGlobalRequire = require('var-global-require');
require('static-require');
const constWrappedRequire = noop(require('const-wrapped-require'));
const constWrappedRequireWithArgs = noop(require('const-wrapped-require'), 'data');

const obj = {
    letGlobalRequire: () => {
        function varGlobalRequire() {
            const nonglobalRequire = require('nonglobal-require');

            constGlobalRequire.prop = 5;
            letGlobalRequire = {};
            const varGlobalRequire = {
                foo: '13'
            };
            try {
                obj.constGlobalRequire = varGlobalRequire;
            } catch (letGlobalRequire) { }
        }

        class constGlobalRequire {
            letGlobalRequire() { }
        }
    },
    varGlobalRequire() { }
}
