(function(){
  // Model
  var Task = Backbone.Model.extend({
    defaults:{
      title: 'do something!',
      completed: false
    },
  });
  var task = new Task();
})();
