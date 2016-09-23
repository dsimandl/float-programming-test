'use strict';

/*
 * deepFinder
 * 
 * Takes an input and a test function and returns any values
 * in the input *recursively* that pass the test.
 *
 * Eg:
 * 
 *   input: [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], { foo: 'aardvark' }, 'allegory' ]
 *   test: value => /^a/i.test( value )
 *   returns: [ 'ant', 'apple', 'aardvark', 'allegory' ]
 * 
 */ 
const deepFinder = ( input, test, matches=[] ) => {
    for(let val of input) {
        if(typeof val === 'string' && test(val)) {
            matches.push(val)
        }
        if(val.isArray) {
            deepFinder(val, test, matches);
        }
        if(typeof val === 'object') {
            for(let prop in val) {
                deepFinder([val[prop]], test, matches);
            }
        }
    }
    return matches;
};

module.exports = deepFinder;