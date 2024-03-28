const questions = [
    {
        question: "What is My Name ?",
answers: [
        { text: "Satyam Gupta", correct: true},
        { text: "Rohit", correct: false},
        { text: "Vaibhav", correct: false},
        { text: "Shiva", correct: false},
]

},
{
    question: "How much time did it take me to create this?",
answers: [
        { text: "7 hours", correct: false},
        { text: "1 hours", correct: false},
        { text: "4 hours", correct: true},
        { text: "3 hours", correct: false},
]

},
{
    question: "What was the last movie i watched ?",
answers: [
        { text: "Artical 370", correct: true},
        { text: "Yodha", correct: false},
        { text: "Shaitan", correct: false},
        { text: "Me gira hoya banda jama nich baliye", correct: false},
]

},
{
    question: "What going to be my next project ?",
answers: [
        { text: "Chatgpt Clone", correct: false},
        { text: "Music App", correct: false},
        { text: "Ecommerce Website", correct: false},
        { text: "Weather App", correct: true},
]

},
{
    question: "What was the best thing that happened to me last 1 month?",
answers: [
        { text: "Learned new skill", correct: true},
        { text: "went on a trip with friends", correct: false},
        { text: "Achieved a personal goal", correct: false},
        { text: "Received unexpected good news.", correct: false},
]

}];



const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0; 


function stratQuiz()
{
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    
    currentQuestion.answers.forEach(answer => {
        const  button = document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}
function resetState()
{
    nextButton.style.display = "none";
    while(answerButton.firstChild)
    {
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e)
{
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect)
    {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>
        {
            if (button.dataset.correct === "true")
            {
                button.classList.add("correct");
            }
            button.disabled = true
        });
        nextButton.style.display = "block"
}
stratQuiz();

function showScore()
{
    resetState();
    questionElement.innerHTML = `Your scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextbutton()
{
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length)
    {
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length)
        {
            handleNextbutton();
        }
        else{
            stratQuiz();
        }
})


