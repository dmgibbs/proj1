var funcs = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

funcs.getHTML(requestOptions,funcs.printHTML);