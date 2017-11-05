const constGlobalRequire = require('const-global-require');
let letGlobalRequire = require('let-global-require');
var varGlobalRequire = require('var-global-require');
require('static-require');

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
