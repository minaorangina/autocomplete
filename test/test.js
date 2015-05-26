var assert = require('assert'); // using the node core module 'assert'
var ac = require('../'); //('../index[.js]')

assert.equal(typeof ac, 'object');
assert.equal(typeof ac.import, 'function');

console.log("#test: ac.import imports a list of words into memory");
ac.import(function (words) {
  console.log("words.txt had " + words.length + " words in it");
  assert.equal(words.length, 235887);
});

console.log("#test: attempt to invoke ac.import without a valid callback");
var error = ac.import('string');
assert.equal(error.message, 'callback argument MUST be a function');



ac.import(function(){
  console.log('#test: ac.findWord finds a string in words array');
  ac.findWord('awes', function (err, found){
    assert.equal(err, null);
    assert.equal(found.length, 4);
  });
})

//index.js
// ac.import is a function
// this function has a parameter
// this parameter is our callback function
// ac.import does some stuff
// at the end of ac.import, the callback is called
// the callback is called with the stuff ac.import did

//test.js
// when we call ac.import, it takes a function
// (this function plugs into callback)
// this function will automatically have:
// the stuff that was given to the callback (when we defined ac.import)
// here, parameter passed to the callback function here is a placeholder/reference to the actual stuff we were given by ac.import
