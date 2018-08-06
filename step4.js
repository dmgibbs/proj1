
// while https is built-in to Node, it is a module, so it must be required


  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

var https = require('https');


function getHTML (options, callback) {

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

}  // end function

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions,printHTML);


/*
function getAndPrintHTML (options) {
// the host can be thought of as the domain name you want to read from,
// and the path is the resource - '/' is the root path, but if you wanted to read a
// particular resource (like '/login/index.html'), that would be defined in the path


  var buffer =[];


  // notice that https.get takes a callback with one parameter -
  // response, which is a Stream that represents the HTTP response
  https.get(options, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      console.log('Chunk Received. Length:', data.length);
      buffer += data.toString();  // keep storing the data chunk that was received
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
      console.log(buffer); // display the data received.
    });

  });

}

getAndPrintHTML(requestOptions); */
