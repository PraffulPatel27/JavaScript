const questions = [
    {
        'que': 'Which of the following is a Markup Language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'Javascript',
        'd': 'Java',
        'correct': 'a'
    },
    {
        'que': 'What year was Javascript launched?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': '1993',
        'correct': 'b'
    },
    {
        'que': 'What dose HTML stand for?',
        'a': 'Hyper Text Markup Language',
        'b': 'Hyper Text Makeup Language',
        'c': 'Hyper Text Marking Language',
        'd': 'Hyper Text Markup Language',
        'correct': 'a'
    },
    {
        'que': 'What dose CSS stand for?',
        'a': 'Cascading Style Sheet',
        'b': 'Cascading Style Sheet',
        'c': 'Cascading Style Sheet',
        'd': 'Cascading Style Sheet',
        'correct': 'a'
    },
]


let index = 0;
let total = questions.length;
let right = 0, wrong = 0;

const quesBox = document.getElementById("quesBox");
const optionsInput = document.querySelectorAll('.options');
const loadQuestion = () => {

    // If there are no more questions, end the quiz
    if (index === total) {
        // out of range
       return endQuiz();
    }

    // When next question is loaded, we want to reset the radio buttons
    reset ();

    const data = questions[index];
    // console.log(data);
    quesBox.innerText = ` ${index+1}) ${data.que}`;

    optionsInput[0].nextElementSibling.innerText = data.a;
    optionsInput[1].nextElementSibling.innerText = data.b;
    optionsInput[2].nextElementSibling.innerText = data.c;
    optionsInput[3].nextElementSibling.innerText = data.d;
     
}



// ******** Checking the answer ********
const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer ()

    // Anaswer is correct or not
    if (ans == data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    
    // If there are more questions, load them
    index++;
    // load next question
    loadQuestion();
    return;
}


const getAnswer = () => {
    let answer;
    optionsInput.forEach(
        (input) => {
            if (input.checked)
               answer = input.value;
        }
    )
    return answer; 
}

// ******** Resetting the radio buttons ********
const reset = () => {
    optionsInput.forEach(
        (input) => {

            // Resetting the radio buttons
            input.checked = false;
        }
    )
}



// ******** Ending the quiz ********
const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style= "text-align: center;">
    <h3> Thank you for playing the Quiz </h3>
    <h2> ${right} / ${total} are correct </h2> 
    `
}

// Initial call (because we want to load the first question when the page loads)
loadQuestion();

