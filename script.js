// Sample data
const questions = [
    {
    text: "Which language is primarily used for web app development?",
    options: ["C#", "Python", "JavaScript", "Swift"],
    correct: 2
},
{
    text: "Which of the following is a relational database management system?",
    options: ["Oracle", "Scala", "Perl", "Java"],
    correct: 0
},
{
    text: "In which language is memory management provided by JVM?",
    options: ["Java", "C", "C++", "Python"],
    correct: 0
},
{
    text: "What does HTML stand for?",
    options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
    correct: 2
},
{
    text: "Which of the following is not a valid variable name in Python?",
    options: ["_myVar", "myVar2", "2myVar", "my_var"],
    correct: 2
},
{
    text: "Which of the following is not an object-oriented programming language?",
    options: ["Java", "C#", "Scala", "C"],
    correct: 3
},
{
    text: "Which tool is used to ensure code quality in JavaScript?",
    options: ["JSLint", "TypeScript", "Babel", "Webpack"],
    correct: 0
},
{
    text: "In which data structure, elements are added at one end and removed from the other?",
    options: ["Array", "Stack", "Queue", "LinkedList"],
    correct: 2
},
{
    text: "What is the primary use of the Git command 'clone'?",
    options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
    correct: 1
},
{
    text: "What does API stand for in the context of programming?",
    options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
    correct: 1
}
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('questions');
const answerListElement = document.getElementById('answer-list');
const submitButton = document.getElementById('submit');
const nextButton = document.getElementById('next');


function renderQuestion() {
    console.log(questionElement);
    const current = questions[currentQuestion];
    // questionElement.textContent = current.text;
    answerListElement.innerHTML = '';

    current.options.forEach((option, index) =>{
        const listItem = document.createElement('li');
        listItem.innerHTML = `<label><input type="radio" name="answer" value="${index}"> <span class="option">${option}</span></label>`; 
        answerListElement.appendChild(listItem);
    });

    nextButton.hidden=true;
    submitButton.hidden=false;
}

submitButton.addEventListener("click", () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert('Please select an answer!');
        return;
    }
    if (parseInt(selectedOption.value) === questions[currentQuestion].correct) {
        score++;
    }
    
    const correctAnswerIndex=questions[currentQuestion].correct;
    answerListElement.children[correctAnswerIndex].style.backgroundColor = 'lightgreen';

    submitButton.hidden = true;
    nextButton.hidden = false;
    // Write the JS code that you want to be executed each time the Submit button is clicked.
});

nextButton.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        renderQuestion();
    } else {
        alert(`Quiz finished! Your score is: ${score}/${questions.length}`);
        currentQuestion = 0;
        score = 0;
        renderQuestion();
        
    }
 
    // Write the JS code that you want to be executed each time the Next button is clicked.
});

renderQuestion();

