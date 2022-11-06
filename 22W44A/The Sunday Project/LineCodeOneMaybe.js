const timeElapsed = Date.now();
const today = new Date(timeElapsed);
theDateToday = today.toDateString();
theDay = theDateToday.substr(0,3)

if (theDay=='Sun'){
    console.log ("It's Sunday Bitches")
}   else{
    console.log ("It's not sunday")
}