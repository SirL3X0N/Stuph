document.addEventListener('keydown', (event) => { keyImputed(event) })
X = 50
Y = 25

function keyImputed(event) {
    console.log(event)
    if (event.keyCode == 68) {
        console.log('Right')
        X = X + 0.5
    }
    if (event.keyCode == 65) {
        console.log('Left')
        X = X - 0.5
    }
    if (event.keyCode == 32) {
        for (let index = 0; index < 250; index++) {
            setTimeout(() => {
                Y = Y + 0.12
                document.getElementById('thePlayer').style.bottom = Y + '%'
            }, (index) * 0.5);
        }
        for (let dindex = 0; dindex < 500; dindex++) {
            setTimeout(() => {
                Y = Y + 0.01
                document.getElementById('thePlayer').style.bottom = Y + '%'
            }, ((dindex) * 0.5) + 100);
        }
    }
    document.getElementById('thePlayer').style.left = X + '%'
}

