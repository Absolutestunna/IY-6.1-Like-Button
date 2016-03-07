var $ = require('jquery');
var Backbone = require('backbone');
var counter = 0

var Likes = Backbone.Model.extend({
  defaults: {
    likes: 0,
  },
   refresh: function(){
     counter = this.get("likes") + 1;
     this.set('likes', counter);
     console.log(counter)
     $(".likes").html('<p>'+this.get('likes')+ this.toJSON() + "</p>")
   },
   toJSON: function(){
     if (counter > 1){
       return " likes";
     }else {
       return " like";
     }
   }
})

module.exports = Likes;
