//print_uppercase.js
var utils = require ('./http_functions')

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6.html'
};



function print_uppercase(html){
   console.log(html.toUpperCase());
}


utils.getHTML(requestOptions,print_uppercase);
