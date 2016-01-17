var fs = require('fs');

var ScreenShot = function() {

  this.writeScreenShot = function(data, filename){

    var stream = fs.createWriteStream(filename);
    stream.write(new Buffer(data, 'base64'));
    stream.end();

  }
};


module.exports = ScreenShot;