// name, health, favourite food, talk saying their name, collection of tasks
var Food = require('./Food.js');
var Test = require('./Task.js');
var _ = require('lodash');

var Hero = function(name, health, favourite_food) {
  this.name = name;
  this.health = health;
  this.favourite_food = favourite_food;
  this.talk = function() {
    return "My name is " + this.name
  }
  this.tasks = [];
  this.belly = [];
}

Hero.prototype = {
  eat: function(food) {
    this.belly.push(food.namefood);
    
    if (food === this.favourite_food) {
      this.health *= 1.5;
    } else {
       this.health += food.replenishment;
      }
  },

  sortTasksByDifficulty: function() {
      console.log(this.tasks);
      _.sortBy(this.tasks,['difficulty']);
      console.log(this.tasks);
  }

  // sortTasksByUrgency: function() {
  //     _.sortBy(this.tasks,['urgency']);
  // }

  // sortTasksByStatus: function() {
  //     _.sortBy(this.tasks,['status']);
  // }

  viewCompletedTasks: function() {
    var completedTasks = [];
    this.tasks.forEach(function(task) {
      if (task.status === "completed") {
        completedTasks.push(task);
      }
    return completedTasks;
    })
  }
}

module.exports = Hero;


