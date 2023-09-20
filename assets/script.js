var button = document.getElementById ("myButton");
var quizIntro = document.querySelector(".quiz-intro")
var mainElement= document.querySelector("main")
var time = document.getElementById("timer");
var AnswerResponse= document.getElementById("AnswersResponse");
var answerChoice1 = document.getElementById("Answer1");
var answerChoice2 = document.getElementById("Answer2");
var answerChoice3 = document.getElementById("Answer3");
var answerChoice4 = document.getElementById("Answer4");
var correctAnswer = document.getElementById("correctAnswer");
var alertButton = document.getElementById("alertButton");



button.addEventListener ("click",startQuiz)
function startQuiz(){
//start quiz will prompt first question
console.log(quizIntro)
quizIntro.classList.add("display-none");
mainElement.classList.remove("display-none")

}





var questions = [
  {
    question: 'Commonly used data types DO NOT include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    answer: 'alerts',
  },


  {
    question: 'The condition in an if/else statement is enclosed within _. :',
    choices: ['Quotes', 'curly brackets', 'Parentheses', 'Square brackets'],
    answer: 'curly brackets',
  },



  {
    question: 'Array in Javascript can be used to store:',
    choices: ['numbers & strings', 'Other arrays', 'Booleans', 'All the above:'],
    answer: 'alerts',
  },



  {
    question: 'String values must be enclosed within __ when being assigned to variables.:',
    choices: ['Commas', 'curly brackets', 'quotes', 'parentheses'],
    answer: 'alerts',
  },




  {
   question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['Javascript', 'terminal/bash', 'for loops', 'console log'],
    answer: 'console log',
  },


]




  







