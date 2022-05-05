const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const quizQuestions = [
    {
        question: "Nadja is current studying which type of cancer:",
        answers: {
          a: "Ovarian",
          b: "Breast",
          c: "Endometrial",
          d: "Prostate"
        },
        correctAnswer: "c"
      },
      {
        question: "Nadja works at which research institute:",
        answers: {
          a: "Translation Research Institute",
          b: "QIMR Berghofer Medical Research Institute",
          c: "Centre for Genomics and Personalised Health",
          d: "Center for Children's Health Research"
        },
        correctAnswer: "a"
      },
      {
        question: "Nadja completed which dual undergraduate degree:",
        answers: {
          a: "Bachelor of Business and Science",
          b: "Bachelor of Science and Engineering",
          c: "Bachelor of Business and Biomedical Science",
          d: "Bachelor of Law and Biomedical Science"
        },
        correctAnswer: "d"
      },
      {
        question: "Nadja hopes to work in which field:",
        answers: {
          a: "Research",
          b: "Patents",
          c: "Public Health",
          d: "Pharmaceuticals"
        },
        correctAnswer: "b"
      }
];
function buildQuiz(){
    // variable to store the HTML output
const output = [];
for(i=0; i<quizQuestions.length; i++){
  // variable to store the list of possible answers
  const answers = [];
  // for each available answer to this question add a html radio button
for(letter in quizQuestions[i].answers){
    answers.push(
        '<label>'
        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
        + letter + ': '
        + quizQuestions[i].answers[letter]
        + '</label>'
        );
    }
    // add this question and its answers to the output
output.push(
    '<div class="question">' + quizQuestions[i].question + '</div>'
    + '<div class="answers">' + answers.join('') + '</div>'
    );
}
// combine our output list into one string of HTML and put it on the page
quizContainer.innerHTML = output.join('');
}
function showResults(){
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
    // keep track of user's answers
    var numCorrect = 0;
    // for each question...
for(i=0; i<quizQuestions.length; i++){
    
    // find selected answer
    userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
    // if answer is correct
if(userAnswer===quizQuestions[i].correctAnswer){
    // add to the number of correct answers
    numCorrect++;
            
    // color the answers green
    answerContainers[i].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
      else{
      // color the answers red
          answerContainers[i].style.color = 'red';
      }
    }
     // show number of correct answers out of total
     if (numCorrect === 0) { 
        resultsContainer.innerHTML = "That wasn't your best effort - you didn't get a single answer correct.";
      }
      if (numCorrect === 1) { 
          resultsContainer.innerHTML = "There's room for improvement there! You only got one correct answer.";
        }
        if (numCorrect === 2) { 
          resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that.";
        }
        if (numCorrect === 3) { 
          resultsContainer.innerHTML = "Congratulations! You got a good score of 3 out of 4 for your responses. You know Nadja pretty well!";
        }
        if (numCorrect === 4) { 
          resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Nadja so well!";
        }
}
//load quiz
buildQuiz();
submitButton.onclick = function() {
    showResults();
  }