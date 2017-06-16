var Hero = require('../Hero.js');
var assert = require('assert');

describe('hero', function() {

  var hero;

  beforeEach(function() {
    hero = new Hero("Batman", 100, "fish and chips");
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
  })

})
