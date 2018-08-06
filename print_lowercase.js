var utils = require ('./http_functions')

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6.html'
};



function print_lowercase(html){
   console.log(html.toLowerCase());
}


utils.getHTML(requestOptions,print_uppercase);