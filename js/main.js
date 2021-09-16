let answers = ["Yes", 
"No", 
"Maybe so", 
"Definitely",
"The Force", 
"Expecto Patronus", 
"Who can know?", 
"Sure", 
"I guess?",
"Nah", 
"Meh",
"HAHA", 
"You're Batman",
"What?", 
"Who are you?", 
"How about later?", 
"Don't want to know",
"Cannot predict now", ];

window.onload = function() {
let eight = document.getElementById("eight");
let answer = document.getElementById("answer");
let ball = document.getElementById("ball");
let question = document.getElementById("question");

button.addEventListener("click", function() {
if (question.value.length < 1) {
alert('Enter a question!');
} else {
eight.innerText = "";
let num = Math.floor(Math.random() * Math.floor(answers.length));
answer.innerText = answers[num];
}
});
};