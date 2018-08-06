
// while https is built-in to Node, it is a module, so it must be required


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


function getHTML (options, callback) {
    /* Your code here */
  var https = require('https');
  /* Add your code here */
  var buffer =[];
  https.get(options, function (response) {
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');
    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      console.log('Chunk Received. Length:', data.length);
      buffer += data.toString();  // keep storing the data chunk that was received
    });

    response.on('end', function() {
      console.log('Response stream complete.');
      callback(buffer);//console.log(); // display the data received.
    });
  });  // end of https.get
}
  // end function

function printHTML (html) {
  console.log(html);
}

module.exports = {
  getHTML : getHTML,
  printHTML: printHTML
}


/*
function getHTML (options, callback) {
  var https = require('https');
   Add your code here
  var buffer =[];
  https.get(options, function (response) {
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');
    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      console.log('Chunk Received. Length:', data.length);
      buffer += data.toString();  // keep storing the data chunk that was received
    });

    response.on('end', function() {
      console.log('Response stream complete.');
      callback(buffer);//console.log(); // display the data received.
    });
  });  // end of https.get

  // end function

function printHTML (html) {
  console.log(html);
}

*/
getHTML(requestOptions,printHTML);



