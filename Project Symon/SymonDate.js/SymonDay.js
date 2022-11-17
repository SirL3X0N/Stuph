const timeElapsed = Date.now();
const today = new Date(timeElapsed);
theDateToday = today.toDateString();
console.log (theDateToday)


function whatDayIsIt(theDayToday){
    theDay = theDateToday.substr(0,3)
    return theDay
}

function whatMonthisit(theDateToday){
    theMonth = theDateToday.substr(4,3)
    return theMonth
}

function whatDayOfTheMonthIsIt(theDateToday){
    theDayOfTheMonth = theDateToday.substr(8,2)
    return theDayOfTheMonth
}

function whatYearIsIt(theDateToday){
    theYear = theDateToday.substr(11,4)
    return theYear
}

