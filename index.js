var fs = require('fs');
var ac = {};

ac.import = function(callback){ // saving import fct as a property of ac{}
  var filename = __dirname + '/words.txt';
  // fs.readFile(myFile, ['utf8'], callback)
  fs.readFile(filename, 'utf8', function(err, data){
    if (err){
      console.log(err);
      console.log(data);
    }
    ac.words = data.split('\n'); // stores array of words in ac{}
    callback(ac.words); // call callback function on ac.words
  });
}

module.exports = ac;// exporting ac object to use elsewhere
