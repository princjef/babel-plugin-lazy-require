const foo = require('foo');
let bar = require('bar');
var baz = require('baz');
require('static-require');

function test() {
    foo.hello = 5;
    bar = 2;
    const a = {
        foo: '13'
    };
    a.foo;
}
