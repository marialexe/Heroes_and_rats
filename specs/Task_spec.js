var Task = require('../Task.js');
var assert = require('assert');

describe('task', function(){
  var task1;
  var task2;

  beforeEach(function() {
    task1 = new Task(4, 3, 10, "completed");
    task2 = new Task(2, 3, 20, "not started");
  })

  it("should have a difficulty", function(){
    assert.strictEqual(4,task1.difficulty);
  }),

  it("should have an urgency", function(){
    assert.strictEqual(3,task1.urgency);
  }),

  it("should have a reward", function(){
    assert.strictEqual(10, task1.reward);
  }),

  it("should have a status", function(){
    task1.progress = 100;
    assert.strictEqual("completed", task1.status());
  })
})