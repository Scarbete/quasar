const decreaseBTN = document.querySelector('.decrease'),
    increaseBTN = document.querySelector('.increase'),
    resetBTN = document.querySelector('.reset'),
    counter = document.querySelector('.count')

let count = 0

const sum = (value) => {
    count += value
    counter.textContent = count
    counter.style.color = count > 0 ? 'green' : count < 0 ? 'red' : 'gray'
}

decreaseBTN.onclick = () => sum(-1)
increaseBTN.onclick = () => sum(+1)
resetBTN.onclick = () => sum(-count)