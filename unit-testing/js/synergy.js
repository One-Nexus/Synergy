import synergy from '../../src/js/synergy.js';

const assert = require('assert');
const jsdom  = require('jsdom-global')();

function createModule(id, tag = 'div') {
    var stub = document.createElement(tag);
    stub.innerHTML = createModuleMarkup(id);
    document.body.appendChild(stub);
    return document.getElementById(id);
}

function resetModule(element, module = 'module') {
    element.className = module;
    element.id = module;
    element.innerHTML = '';
    element.removeAttribute('data-module');
}

function createModuleMarkup(module = 'module') {
    return `<div class="${module}" id="${module}"></div>`;
}

describe('Synergy function', function() {
    it('should exist', function() {
        assert.equal(typeof synergy, 'function');
    });
    it('should expose method APIs', function() {
        assert.equal(typeof synergy().component, 'function');
        assert.equal(typeof synergy().modifier, 'function');
        assert.equal(typeof synergy().foo, 'undefined');
    });
});

describe('Stubbed DOM module', function() {

    var stub = createModule('stub');

    beforeEach('The application should continue to run given null/nonexistant params', function() {
        synergy(); // no module
        synergy('qux'); // no existant module
    });

    afterEach(function() {
        resetModule(stub);
    });

    it('should not be a component', function() {
        assert.equal(synergy(stub).component(), false);
    });

    it('should not be a modifier', function() {
        assert.equal(synergy(stub).modifier(), false);
    });
    
    describe('when initialised via string', function() {
        beforeEach(function() {
            synergy('module');
        });
        it('receives correct data-attribute', function() {
            assert.equal(stub.getAttribute('data-module'), 'module');
        });
    });
    
    describe('when initialised via HTMLElement', function() {
        beforeEach(function() {
            synergy(stub);
        });
        it('receives correct data-attribute', function() {
            assert.equal(stub.getAttribute('data-module'), 'module');
        });
    });
    
    describe('when initialised via HTMLElement with custom block name', function() {
        beforeEach(function() {
            synergy([stub, 'baz']);
        });
        it('receives correct data-attribute', function() {
            assert.equal(stub.getAttribute('data-module'), 'baz');
        });
    });

    describe('when initialised via NodeList (and required custom block name)', function() {
        beforeEach(function() {
            synergy([document.querySelectorAll('.module'), 'module']);
        });
        it('receives correct data-attribute', function() {
            assert.equal(stub.getAttribute('data-module'), 'module');
        });
    });

    describe('when initialised via NodeList and passing a callback', function() {
        beforeEach(function() {
            synergy([document.querySelectorAll('.module'), 'qux'], function(el) {
                el.classList = 'qux';
            });
        });
        it('receives correct data-attribute', function() {
            assert.equal(stub.getAttribute('data-module'), 'qux');
        });
        it('runs callback', function() {
            assert.equal(stub.classList, 'qux');
        });
    });

    describe('when initialised with default configuration', function() {
        var defaults = { 
            module: {name: 'module', foo: 'bar'}
        };

        beforeEach(function() {
            synergy('module', function(el, options) {
                el.id = options.foo;
            }, defaults);
        });

        it('ID is set to the specified value', function() {
            assert.equal(stub.id, defaults.module.foo);
        });

        describe('and custom configuration', function() {
            var custom = { 
                name: 'myModule', foo: 'foo', qux: 2
            };

            beforeEach(function() {
                synergy('module', function(el, options) {
                    el.id = options.foo;
                }, defaults, custom);
            });

            it('ID is set to the specified value', function() {
                assert.equal(stub.id, custom.foo);
            });
        });
    });

    describe('setting a component', function() {
        beforeEach(function() {
            synergy(stub).component('foo', 'set');
        });

        it('returns the correct component', function() {
            assert.equal(synergy(stub).component('foo'), true);
            assert.equal(synergy(stub).component().length, 1);
        });

        it('identifies null component', function() {
            assert.equal(synergy(stub).component('bar'), false);
        });

        describe('and setting a modifier', function() {
            beforeEach(function() {
                synergy(stub).modifier('foo', 'set');
            });

            it('returns the correct modifier', function() {
                assert.equal(synergy(stub).modifier('foo'), true);
            });

            it('identifies null modifier', function() {
                assert.equal(synergy(stub).modifier('bar'), false);
            });
        });

        describe('and setting multiple modifiers', function() {
            beforeEach(function() {
                synergy(stub).modifier('foo', 'set');
                synergy(stub).modifier('bar-qux', 'set');
            });
            
            it('returns the correct modifiers', function() {
                assert.equal(synergy(stub).modifier('foo'), true);
                assert.equal(synergy(stub).modifier('bar'), true);
                assert.equal(synergy(stub).modifier('qux'), true);
                assert.equal(synergy(stub).modifier().length, 3);
            });

            it('identifies null modifier', function() {
                assert.equal(synergy(stub).modifier('fizz'), false);
            });
        });
    });

    describe('finding a nested component', function() {
        beforeEach(function() {
            stub.innerHTML = createModuleMarkup();
            stub.childNodes[0].removeAttribute('id');
            synergy(stub.childNodes[0]).component('nested', 'set');
        });

        it('finds existing component', function() {
            assert.equal(synergy(stub).component('nested')[0].classList.contains('module_nested'), true);
            assert.equal(synergy(stub).component('nested')[0].classList.contains('module_foo'), false);
        });
    });

    describe('setting a modifier', function() {
        beforeEach(function() {
            synergy(stub).modifier('foo', 'set');
        });

        it('returns the correct modifier', function() {
            assert.equal(synergy(stub).modifier('foo'), true);
            assert.equal(synergy(stub).modifier().length, 1);
        });

        it('identifies null modifier', function() {
            assert.equal(synergy(stub).modifier('bar'), false);
        });
    });

    describe('setting multiple modifiers', function() {
        beforeEach(function() {
            synergy(stub).modifier('foo', 'set');
            synergy(stub).modifier('bar-qux', 'set');
        });
        
        it('returns the correct modifiers', function() {
            assert.equal(synergy(stub).modifier('foo'), true);
            assert.equal(synergy(stub).modifier('bar'), true);
            assert.equal(synergy(stub).modifier('qux'), true);
            assert.equal(synergy(stub).modifier().length, 3);
        });

        it('identifies null modifier', function() {
            assert.equal(synergy(stub).modifier('fizz'), false);
            assert.equal(synergy(stub).modifier('foo-fizz'), false);
        });
    });

    describe('creating a complete plugin', function() {
        beforeEach(function() {
        });

        it('returns expected behaviour');
    });
});