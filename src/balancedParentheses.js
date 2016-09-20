'use strict';

/*
 * balancedParentheses
 * 
 * Takes an input string and returns true or false depending on if the string
 * has balanced parentheses.
 * 
 * Eg:
 * 
 *   input: '(x + y)'
 *   returns: true
 * 
 *   input: '(x + y'
 *   returns: false
 * 
 *   input: 'foo bar baz'
 *   returns: false
 * 
 *   input: ''
 *   returns: false
 */
module.exports = (input) => {
    let stack = new Array();
    for (let token of input) {
        if (token === '(') {
            stack.push(token);
        } else if (token === ')') {
            if (stack.length === 0) {
                return false;
            } else {
                let left = stack.pop();
                if (token === ')' && left === '(') {
                    return true;
                }
            }
        }
    }
    return false;
};