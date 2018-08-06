var utils = require ('./http_functions')

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6.html'
};



function print_reverse(html){
  // split, reverse array, join array elements
  var split = html.split("");
  var rev1 = split.reverse();
  var joinarray = rev1.join("");
  console.log(joinarray);
}


utils.getHTML(requestOptions,print_reverse);