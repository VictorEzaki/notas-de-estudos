function Off() {
    const overlay = document.getElementsByClassName('overlay')[0];
    if (overlay) {
        overlay.style.display = 'none';
    }
    initializeGame();
}


const boardRegions = document.querySelectorAll('#board-game span')
let vBoard = []
let turnPlayer = ''

function updateTitle() {
    const playerInput = document.getElementById(turnPlayer)
    const turn = document.getElementById('turn-player')
    turn.innerText = playerInput.value
    if (turnPlayer === 'player-1') {
        turn.classList.remove('player-2-color')
        turn.classList.add('player-1-color')
    } else{
        turn.classList.remove('player-1-color')
        turn.classList.add('player-2-color')
    }
}

function initializeGame() {
    vBoard = [['', '', ''], ['', '', ''], ['', '', '']]
    turnPlayer = 'player-1'
    document.querySelector('h2').innerHTML = 'Vez de: <span id="turn-player"></span>'
    updateTitle()

    boardRegions.forEach(function (element) {
        element.classList.remove('win')
        element.innerText = ''
        element.addEventListener('click', handleBoardClick)
    })
}

function getWinRegions() {
    const winRegions = []
    if (vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][0] === vBoard[0][2])
        winRegions.push("0.0", "0.1", "0.2")
      if (vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] === vBoard[1][2])
        winRegions.push("1.0", "1.1", "1.2")
      if (vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][0] === vBoard[2][2])
        winRegions.push("2.0", "2.1", "2.2")
      if (vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[0][0] === vBoard[2][0])
        winRegions.push("0.0", "1.0", "2.0")
      if (vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] === vBoard[2][1])
        winRegions.push("0.1", "1.1", "2.1")
      if (vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[0][2] === vBoard[2][2])
        winRegions.push("0.2", "1.2", "2.2")
      if (vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] === vBoard[2][2])
        winRegions.push("0.0", "1.1", "2.2")
      if (vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[0][2] === vBoard[2][0])
        winRegions.push("0.2", "1.1", "2.0")
      return winRegions
}

function disableRegion(element) {
    element.style.cursor = 'default'
    element.removeEventListener('click', handleBoardClick)
}

function handleWin(regions) {
    regions.forEach(function (region) {
        document.querySelector('[data-region="' + region + '"]').classList.add('win')
    })
    const playerName = document.getElementById(turnPlayer).value
    const overlay = document.getElementById('winner')
    overlay.classList.add('overlay')
    const contentOverlay = document.getElementById('content-winner')
    contentOverlay.classList.add('content-overlay')
    const button = document.createElement('button')
    button.id = 'recomecar'
    button.innerText = 'Recomeçar!'
    contentOverlay.appendChild(button)
    button.addEventListener('click', function () {
        location.reload()
    })
    
    document.getElementById('player-name').innerText = playerName + ' VENCEU!'
}

function handleBoardClick(ev) {
    const span = ev.currentTarget
    const region = ev.currentTarget.dataset.region
    const rowColumnPair = region.split('.')
    const row = rowColumnPair[0]
    const column = rowColumnPair[1]
    if (turnPlayer === 'player-1') {
        span.innerText = 'X'
        span.style.color = 'blue'
        vBoard[row][column] = 'X'
    }else {
        span.innerText = 'O'
        span.style.color = 'red'
        vBoard[row][column] = 'O'
    }
    console.clear()
    console.table(vBoard)
    disableRegion(span)

    const winRegions = getWinRegions()
    if (winRegions.length > 0) {
        handleWin(winRegions)
    } else if(vBoard.flat().includes('')) {
        turnPlayer = turnPlayer === 'player-1' ? 'player-2' : 'player-1'
        updateTitle()
    } else {
        document.querySelector('h2').innerHTML = 'Empate'
    }
}