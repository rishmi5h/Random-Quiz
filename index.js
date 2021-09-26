var readlineSync = require("readline-sync");
var score = 0;
console.log("Hello");
var userName = readlineSync.question("What is your Name? ");
console.log("Welcome "+ userName + " to the random quiz");
var questionAnswerList = [
  {question:"Who is president of the USA ? ",
  answer:"Joe Biden"},
   {question:"Capital of karnataka is ? ",
  answer:"Bangalore"},
   {question:"Full form of BSE is ? ",
  answer:"Bombay Stock Exchange"},
   {question:"2+2? ",
  answer:"22"},
   {question:"Color of tajmahal is? ",
  answer:"yellow"},
   {question:"",
  answer:""},

];

var highScore = {
  name:"Rishabh",
  score:5
};

function askQuestion(question, answer){
  var userAns = readlineSync.question(question);
  if(userAns === answer){
    console.log("You are right ");
    score++;
  }else{
    console.log("You are wrong ");
  }
  console.log("Your score is "+ score);
  console.log("-------");
};


for (var i=0; i<questionAnswerList.length-1; i++){
  askQuestion(questionAnswerList[i].question, questionAnswerList[i].answer);
}
console.log("Your final score is "+ score);
if(score === highScore.score){
  console.log("You have equalled highscore");
}

console.log("Thankyou for playing");