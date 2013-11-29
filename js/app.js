(function(){
  // Model
  var Task = Backbone.Model.extend({
    defaults:{
      title: 'do something!',
      completed: false
    },
    validate : function(attrs){
      if(_.isEmpty(attrs.title)){
        return 'Title must not be empty!';
      }
    },
    toggle : function(){
      this.set('completed', !this.get('completed'));
    }
  });
  var task1 = new Task({
    title: 'do it!!',
    completed: true
  });
  console.log(task1.toJSON());
  task1.toggle();
  console.log(task1.toJSON());
  var task2 = new Task();
  task2.set('title', 'new Title');
  var title = task2.get('title');
  console.log(title);
  console.log(task2.toJSON());
  task2.set({title: ''}, {validate: true});
  console.log(task2.toJSON());
})();
