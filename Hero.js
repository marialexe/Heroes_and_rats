// name, health, favourite food, talk saying their name, collection of tasks
var Hero = function(name, health, favourite_food) {
  this.name = name;
  this.health = health;
  this.favourite_food = favourite_food;
  this.talk = function() {
    return "My name is " + this.name
  }
  this.tasks = [];
}

module.exports = Hero;