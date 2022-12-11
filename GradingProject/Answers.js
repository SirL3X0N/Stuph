var correctAnswers=0
const totalAnswers=6

function calculatePercent(correctAnswers,testResults){
    testResults=(correctAnswers/totalAnswers)
    return testResults
}

Answer_1 = 21
Answer_2 = 86400
Answer_3 = 1.77
Answer_4 = 5.83
Answer_5 = 'Mine'
Answer_6 = 'Diet Coke'

if (Answer_1 == 21){
    correctAnswers = correctAnswers+1
} 
if (Answer_2 == 86400){
    correctAnswers = correctAnswers+1
} 
if (Answer_3 == 1.77){
    correctAnswers = correctAnswers+1
} 
if (Answer_4 == 5.83){
    correctAnswers = correctAnswers+1
} 
if (Answer_5 == 'Mine'){
    correctAnswers = correctAnswers+1
} 
if (Answer_6 == 'Diet Coke'){
    correctAnswers = correctAnswers+1
} 

yourPecentGrade = calculatePercent(correctAnswers,totalAnswers)
console.log (yourPecentGrade*100)
