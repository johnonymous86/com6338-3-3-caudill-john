var questionsArr = [
        
        {
        question: 'Javascript is the best language',
        answer: true
        },

        {question: 'The sun orbits the earth',
        answer: false},

        {question: 'Water is wet',
        answer: true},
        
        {question: 'All dogs are cats',
        answer: false},
        
        {question: 'All reptiles can fly',
        answer: false},

];

var numCorrect = question
function runQuiz() {
for (var i = 0; i < questionsArr.length; i++) {
    var ask = questionsArr.question
    var answer = confirm (ask)
    if (answer) {
        numCorrect++
    }
}
    if (numCorrect >= 1) {
        alert("Your score is 0%")
    }else {
        alert("Your score is 100%")
    }
};
 

