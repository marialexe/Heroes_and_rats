//difficulty level, urgency level, reward, can be marked as completed
var Task = function(difficulty, urgency, reward, status) {

  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.progress = 0;

  this.status = function(){
    switch (this.progress) {
      case 50: 
        return "incomplete";
      case 100:
        return "completed";
      default:
        return "not started";
    }
  }

}

module.exports = Task;