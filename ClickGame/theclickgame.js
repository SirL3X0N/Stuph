clickNumber = 0
var startTime, endTime
seconds = 0

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function end() {
    endTime = new Date()
    timeDiff = endTime - startTime
    timeDiff /= 1000
    a = timeDiff * 100
    b = Math.round(a)
    seconds = b / 100
}

function targetHit() {
    if (clickNumber === 0) {
        startTime = new Date();
    }
    clickNumber++
    X = getRandomInt(90)
    Y = getRandomInt(90)
    console.log(clickNumber)
    document.getElementById('the2ShootTarget').style.top = (X + 5) + '%'
    document.getElementById('the2ShootTarget').style.left = (Y + 5) + '%'
    if (clickNumber == 20) {
        endgame()
    }
}

function endgame() {
    end()
    document.getElementById('the2ShootTarget').style.display = "none"
    document.getElementById('endScreen').style.display = 'block'
    document.getElementById('timeDisplayer').innerHTML = 'Time = ' + (seconds) + ' seconds'
}
