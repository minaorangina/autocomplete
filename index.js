var fs = require('fs');
var ac = {};

ac.import = function(callback){ // saving import fct as a property of ac{}
  if(!callback || typeof callback !== 'function'){
    return new Error('callback argument MUST be a function');
  }
  var filename = __dirname + '/words.txt';
  fs.readFile(filename, 'utf8', function(err, data){ // fs.readFile(myFile, ['utf8'], callback)
    ac.words = data.split('\n'); // stores array of words in ac{}
    return callback(err, ac.words); // call callback function on ac.words
  });
}

ac.stats = function(word, callback){
  if (!ac.searches){
    ac.searches = {};
  }
  if (!ac.searches[word]){
    ac.searches[word] = [];
  }
  ac.searches[word].push(new Date().getTime());
  callback(null, ac.searches);
}

ac.findWord = function (word, callback){
  //var found = ac.words[ac.words.indexOf(word)];
  var found = [];
  for (var i = 0; i < ac.words.length; i++){
    if (ac.words[i].search(word) === 0){
      found.push(ac.words[i]);
    }
  }
  return callback(null,found);
}

// record timestamp at which a search was made


module.exports = ac;// exporting ac object to use elsewhere
