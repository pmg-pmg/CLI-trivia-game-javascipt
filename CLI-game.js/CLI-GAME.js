const readline = required('readline');
const rl = readline.createInterface({
    input: Process.stdin,
    output:process.stdout
});
const trivia=[{
question:"Who was the first president of Kenya?",
options:["A) Uhuru Kenyatta","B)Mwai KIbaki","C)Jomo Kenyatta"],
answer:2
},
{
    question:"Where was Nelson Mandela detained?",
    options:["A)Pretoria","B)Robben Island","C)Madagascar"],
    answer:1
},
{
    question:"What is the capital city of Tunisia?",
    options:["A)Nairobin","B)Lagos","Tunis" ],
    answer:2
},
{
    question:"In what state is Baltimore city?",
    options:["A)New York","B)Chicago","C)Maryland"],
    answer:2
}
]
let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let timer;
function beginGame(){
    console.log("\n Welcome to the trivia game")
};
function timer(){
    timer=setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(timer);
      endGame();
    };
})
}
function Answer(input) {
  const userAnswer = Number(input) - 1;
  const correctAnswer = questions[currentQuestion].answer;

  if (userAnswer === correctAnswer) {
    console.log(" Correct!");
    score++;
  } else {
    console.log("Try again!");
  };
}
const incorrectAnswers=answer.filter(answer=>!answer.isCorrect)