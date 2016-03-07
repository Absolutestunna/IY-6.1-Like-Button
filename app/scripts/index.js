var Like = require('./models/button');
var $ = require('jquery');
//imporat button.js

var realButton = new Like();

console.log(realButton)
//click event and manipulate the button methods
$(".likes").on('click', function(){
  realButton.refresh();
  // console.log(realButton.defaults.likes);
})
