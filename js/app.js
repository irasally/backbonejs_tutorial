(function(){
  // Model
  var Task = Backbone.Model.extend({
    defaults:{
      title: 'do something!',
      completed: false
    }
  });
  var task1 = new Task({
    title: 'do it!!',
    completed: true
  });
  console.log(task1);
  var task2 = new Task();
  task2.set('title', 'new Title');
  var title = task2.get('title');
  console.log(title);
})();
