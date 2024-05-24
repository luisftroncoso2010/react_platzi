//Tomamos todos los elementos HTML
const board = document.getElementById('board')
const scoreBoard = document.getElementById('scoreBoard')
const starButton = document.getElementById('start')
const gameOverSign = document.getElementById('gameOver')


// Game setttings
const boardSize = 10
const gameSpeed = 700 // Velocidad (100 Milisegundos)
const squareTypes = {
    emptySquare: 0,
    snakeSquare: 1,
    foodSquare: 2
}

// Direcciones por teclado y como se moverá
const directions = {
    ArrowUp: -10,
    ArrowDown: 10,
    ArrowRight: 1,
    ArrowLeft: -1
}

// Variables del juego
// Array save:  Se Guardaran los valores que esta ocupando
let snake  
// Puntaje del usuario
let score  
// Cada ves que se apriete una tecla se esta guardando para saber a donde va
let direction
// Array para guardar la informacion del tablero
let boardSquares
/* Aca se llena para generar la comidad de la serpiente
en lugares vacios, aca se guarda */
let emptySquares
/* Aca se guarda el intervalo del movimineto de la serviente*/
let moveInterval

const drawSnake = () => {
    snake.forEach( square => drawSquare(square, 'snakeSquare'));
}

/*
Rellena cada caudrado del tablero
@params
square: poscion del cuadrado
type: tipo de cuadrado (emptySquare, snakeSquare foodSquare)
*/
const drawSquare = (square, type) => {
    const [row, colum ] = square.split('')
    boardSquares[row][colum] = squareTypes[type]
    const squareElement = document.getElementById(square)
    squareElement.setAttribute('class', `square ${type}`)

    if(type === 'emptySquare'){
        emptySquares.push(square)
    }else{
        if(emptySquares.indexOf(square) !== -1){
            emptySquares.splice(emptySquares.indexOf(square), 1)
        }
    }
}

// Funcion par mover la serpiente cada 1000 mili segundos
const moveSnake = () => {
    const newSquare = String(
        Number(snake[snake.length - 1 ]) + directions[direction])
            .padStart(2, '0')
    const [row, column] = newSquare.split('')

    if(newSquare < 0 ||
        newSquare > boardSize * boardSize ||
        (direction === 'ArrowRight' && column === 0) ||
        (direction === 'ArrowLeft' && column == 9 ||
        boardSquares[row][column] === squareTypes.snakeSquare) ) {
        gameOver()
    } else {
        snake.push(newSquare)    
        if(boardSquares[row][column] === squareTypes.foodSquare){
            addFood()
        }else{
            const emptySquare = snake.shift()
            drawSquare(emptySquare, 'emptySquare')
        }
        drawSnake()
    }    
}

const addFood = () =>{
    score++
    updateScore()
    createRandomFood()
}

// Muetra el Game over 
const gameOver = () => {
    gameOverSign.style.display = 'block'
    clearInterval(moveInterval)
    starButton.disabled = false
}


// Setemos la la funcon
const setDirection = newDirection => {
    direction = newDirection
}


// Funcion para la presion de la flechas del teclado
const directionEvent = key => {
    switch (key.code) {
        case 'ArrowUp':
            direction != 'ArrowUp' && setDirection(key.code)
            break
        case 'ArrowDown':
            direction != 'ArrowUp' && setDirection(key.code)
            break
        case 'ArrowLeft':
            direction != 'ArrowRight' && setDirection(key.code)
            break
        case 'ArrowRight':
            direction != 'ArrowLeft' && setDirection(key.code)
            break        
    }
}

const createRandomFood = () => {
    // Piuntamos un alimento
    const randomEmptySquare = emptySquares[Math.floor(Math.random() * emptySquares.length)]
    drawSquare(randomEmptySquare, 'foodSquare')
}

const updateScore = () => {
    // Setemos el score Board (Lago de la serpiente)
    scoreBoard.innerText = score
}

// Creamos el tablero
const createBoard = () => {
    boardSquares.forEach((row, rowIndex) => {
        row.forEach((colums, columnIndex) => {
            const squareValue = `${rowIndex}${columnIndex}`
            const squareElement = document.createElement('div')
            squareElement.setAttribute('class', 'square emptySquare')
            squareElement.setAttribute('id', squareValue)
            board.appendChild(squareElement)
            emptySquares.push(squareValue)
        })        
    });
}

const setGame = () => {
    snake = ['00', '01', '02', '03']
    score = snake.length
    direction = 'ArrowRight'
    boardSquares = Array.from(Array(boardSize), () => new Array(boardSize).fill(squareTypes.emptySquare))
    console.log(boardSquares);
    board.innerHTML = ''
    emptySquares = []
    // Aca se Crea el tablero
    createBoard()
}

const startGame = () => {
    setGame()
    gameOverSign.style.display = 'none'
    // Se bloque el boton mientras se juega
    starButton.disabled = true
    drawSnake()
    updateScore()  
    // Aca se crea una comida (Food)
    createRandomFood()
    document.addEventListener('keydown', directionEvent)
    moveInterval = setInterval( () => moveSnake(), gameSpeed)
}

// Bton star para empezar el evento
starButton.addEventListener('click', startGame)