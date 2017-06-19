var Food = require('../Food.js');
var assert = require('assert');

describe('food', function() {
  var food;

  beforeEach(function() {
    food = new Food("pizza",20);
  })

  it("should have a name", function(){
    assert.strictEqual("pizza",food.namefood);
  }),

  it("should have a replenishment value", function() {
    assert.strictEqual(20, food.replenishment);
  })
})