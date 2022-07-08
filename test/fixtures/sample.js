const _constGlobalRequire = {
    initialized: false
};
const _letGlobalRequire = {
    initialized: false
};
const _varGlobalRequire = {
    initialized: false
};
const _constWrappedRequire = {
    initialized: false
};
const _letWrappedRequire = {
    initialized: false
};
const _nonglobalRequire = {
    initialized: false
};
const _imports = {
    get constGlobalRequire() {
        if (!_constGlobalRequire.initialized) {
            _constGlobalRequire.value = require("const-global-require");
            _constGlobalRequire.initialized = true;
        }

        return _constGlobalRequire.value;
    },

    get letGlobalRequire() {
        if (!_letGlobalRequire.initialized) {
            _letGlobalRequire.value = require("let-global-require");
            _letGlobalRequire.initialized = true;
        }

        return _letGlobalRequire.value;
    },

    set letGlobalRequire(value) {
        if (!_letGlobalRequire.initialized) {
            require("let-global-require");

            _letGlobalRequire.initialized = true;
        }

        _letGlobalRequire.value = value;
    },

    get varGlobalRequire() {
        if (!_varGlobalRequire.initialized) {
            _varGlobalRequire.value = require("var-global-require");
            _varGlobalRequire.initialized = true;
        }

        return _varGlobalRequire.value;
    },

    set varGlobalRequire(value) {
        if (!_varGlobalRequire.initialized) {
            require("var-global-require");

            _varGlobalRequire.initialized = true;
        }

        _varGlobalRequire.value = value;
    },

    get constWrappedRequire() {
        if (!_constWrappedRequire.initialized) {
            _constWrappedRequire.value = noop(require("const-wrapped-require"));
            _constWrappedRequire.initialized = true;
        }

        return _constWrappedRequire.value;
    },

    get letWrappedRequire() {
        if (!_letWrappedRequire.initialized) {
            _letWrappedRequire.value = noop(require("let-wrapped-require"));
            _letWrappedRequire.initialized = true;
        }

        return _letWrappedRequire.value;
    },

    set letWrappedRequire(value) {
        if (!_letWrappedRequire.initialized) {
            noop(require("let-wrapped-require"));
            _letWrappedRequire.initialized = true;
        }

        _letWrappedRequire.value = value;
    },

    get nonglobalRequire() {
        if (!_nonglobalRequire.initialized) {
            _nonglobalRequire.value = require("nonglobal-require");
            _nonglobalRequire.initialized = true;
        }

        return _nonglobalRequire.value;
    }

};

require('static-require');

const constWrappedRequireWithArgs = noop(require('const-wrapped-require'), 'data');
const obj = {
    letGlobalRequire: () => {
        function varGlobalRequire() {
            _imports.constGlobalRequire.prop = 5;
            _imports.letGlobalRequire = {};
            const varGlobalRequire = {
                foo: '13'
            };

            try {
                obj.constGlobalRequire = _imports.varGlobalRequire;
            } catch (letGlobalRequire) {}
        }

        class constGlobalRequire {
            letGlobalRequire() {}

        }
    },

    varGlobalRequire() {}

};
