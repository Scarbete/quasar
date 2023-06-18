const box = document.querySelector('.box')

let x = 0
let y = 0

function moveBox () {
    if (x <= 446 && y <= 0) {
        x++
        box.style.left = `${x}px`
        setTimeout(moveBox, 0)
    }
    else if (x >= 446 && y <= 446) {
        y++
        box.style.top = `${y}px`
        setTimeout(moveBox, 0)
    }
    else if (x > 0 && y >= 446) {
        x--
        box.style.left = `${x}px`
        setTimeout(moveBox, 0)
    }
    else if (x <= 0 && y >= 0) {
        y--
        box.style.top = `${y}px`
        setTimeout(moveBox, 0)
    }
}

// moveBox()


const startBtn = document.querySelector('#start'),
    stopBtn = document.querySelector('#stop'),
    clearBtn = document.querySelector('#clear'),
    resumeBtn = document.querySelector('#resume'),
    count = document.querySelector('#count')

let counter = 0
let interval;

const start = () => {
    interval = setInterval(() => {
        counter++
        count.innerHTML = counter
    }, 500)
}

const stop = () => {
    clearInterval(interval)
}

const clear = () => {
    stop()
    counter = 0
    count.innerHTML = counter
}

startBtn.onclick = () => start()
stopBtn.onclick = () => stop()
clearBtn.onclick = () => clear()
resumeBtn.onclick = () => start()