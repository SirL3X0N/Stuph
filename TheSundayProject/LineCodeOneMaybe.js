let mytime = [0, 0, 0]

function timesetthang() {
    let timeElapsed = Date.now()
    let today = new Date(timeElapsed)
    toconvert = today.toISOString()
    mytime[2] = toconvert.substring(20, 23)
    mytime[1] = toconvert.substring(17, 19)
    mytime[0] = toconvert.substring(14, 16)
    myseconds = (mytime[0] * 60 + mytime[1]) + '.' + mytime[2]
    return (myseconds)
}
// theDay = theDateToday.substr(0, 3)

// if (theDay == 'Sun') {
//     console.log("It's Sunday Mother Fucker")
// } else {
//     console.log("It's not sunday")
// }
timesetthang()
const tstart = myseconds

setTimeout(() => {
    timesetthang()
    const tend = myseconds
    console.log(tstart)
    console.log(tend)
    console.log(tend - tstart)
}, 5000)
