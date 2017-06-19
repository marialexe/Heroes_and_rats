var Hero = require('../Hero.js');
var assert = require('assert');
var Food = require('../Food.js');
var Task = require('../Task.js');

describe('hero', function() {

  var hero;
  var pizza;
  var task1;
  var task2;
  var task3;

  beforeEach(function() {
    hero = new Hero("Batman", 100, "fish and chips");
    pizza = new Food("pizza", 20);
    task1 = new Task(3, 6, 20, "completed");
    task2 = new Task(7, 3, 5, "incomplete");
    task3 = new Task(4, 2, 30, "not started");
  })

  it("should have a name", function() {
    assert.strictEqual("Batman", hero.name);
  }),

  it("should have a health value", function() {
    assert.strictEqual(100, hero.health);
  }),

  it("should have a favourite_food", function() {
    assert.strictEqual("fish and chips", hero.favourite_food);
  }),

  it("should be able to say it's own name", function(){
    assert.strictEqual("My name is Batman", hero.talk());
  }),

  it("should have the collection of tasks initially empty", function() {
    assert.strictEqual(0,hero.tasks.length);
  }),

  it("should replenish the health levels when eating", function() {
    hero.eat(pizza);
    assert.strictEqual(120, hero.health);
    assert.strictEqual(1, hero.belly.length);
  })

  it("should replenish by 1.5 health value when eating the favourite food", function(){
    hero.eat("fish and chips");
    assert.strictEqual(150, hero.health);
  })

  // it("should sort the hero tasks by difficulty", function(){
  //   hero.tasks.push(task1);
  //   hero.tasks.push(task2);
  //   hero.tasks.push(task3);
  //   assert.deepEqual([task1, task3, task2], hero.sortTasksByDifficulty());
  // })

  it("should list the completed tasks", function(){
    assert.deepEqual( [Task {
    difficulty: 3,
    urgency: 6,
    reward: 20,
    progress: 0,
    status: [Function] }],hero.viewCompletedTasks());
  })

  if()

})
