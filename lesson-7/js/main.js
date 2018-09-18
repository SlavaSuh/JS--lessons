var fieldSizeX = 20;
var fieldSizeY = 20;
var snake = [[10, 9], [10, 10], [10, 11]];
var score = 0;
var snakeTimer;
var obstacleTimer;
var direct = 0;
var direction = [
    [0,1], //вправо
    [1,0], // вверх
    [0,-1], //влево
    [-1,0]]; //вниз
var key = {
    'left' : 37,
    'up' : 38,
    'right' : 39,
    'down' : 40
};
//генерация игрового поля
generateGameField();

document.getElementsByClassName("start")[0].addEventListener("click", startGame);
document.getElementsByClassName("refresh")[0].addEventListener("click", refreshGame);

window.addEventListener('keydown', keyDown);

//Функция запуска игры
function startGame() {
    //запуск ф-ии инициализации змейки
    snakeInit();
    // запускаем функцию move каждые 200 млс
    snakeTimer = setInterval(move, 200);
    obstacleTimer = setInterval(createObstacle, 5000);
    setTimeout(createFood, 2000);

}

//ф-ия инициализации змейки
function snakeInit() {
    snake = this.snake;
    for (var i = 0; i < snake.length; i++) {
        var drawSnake = document.getElementsByClassName("cell-" +snake[i][0] + "-" +snake[i][1] )[0];
        //проверяем если нет класса snake-cell , то добавляем
        if (!drawSnake.getAttribute("class").split(" ").includes("snake-cell")){
            drawSnake.setAttribute("class", drawSnake.getAttribute("class") + " snake-cell");
        }

    }
}
//ф-ия движения
function move() {
    //находим голову змейки
    var snakeHead = snake[snake.length -1];
    // змейка по дефолту начинает ходить на право.
    var snakeHeadCell = snakeHead.map(function(val, ind){
        return val + direction[direct][ind];
    } );
    // console.log(snakeHeadCell);


    //ф-ия проверки, убираем границы поля.
    outOfRange(snakeHeadCell);

    addCelltSnakeOrFinishGame(snakeHeadCell);

    //находим и удаляем последний элемент в массиве
    var removedSnakeTail = snake.shift();

    //доб-ем новую клетку в качестве головы змейки
    snake.push(snakeHeadCell);
    //отрисовываем змейку еще раз , но уже с новыми координатами
    snakeInit(snake);
    // удаляем хвост
    document.getElementsByClassName("cell-" + removedSnakeTail[0] + "-" + removedSnakeTail[1])[0].className = "cell " + "cell-" + removedSnakeTail[0] + "-" + removedSnakeTail[1];
}

//ф-ия увеличения змейки и счета при подборе еды, и проверка на врезание змейки самой в себя и в препятствие.
function addCelltSnakeOrFinishGame(snakeHeadCell) {
    var shc = document.getElementsByClassName("cell-" + snakeHeadCell[0] + "-" + snakeHeadCell[1])[0];
    if (shc.getAttribute("class").split(" ").includes("food-cell")) {

        score += 1;
        document.getElementsByClassName("score")[0].innerHTML = "Счет : " + score;

        createFood();
        this.snake.push(snakeHeadCell);
    }
    if (shc.getAttribute("class").split(" ").includes("snake-cell")) {
        finishGame();
    }
    if (shc.getAttribute("class").split(" ").includes("obstacle-cell")) {
        finishGame();
    }
}
//ф-ия проверки на границы поля.
function outOfRange(snakeHeadCell) {
    //если  значение ро оси Y == 21 , то... и тд...
   if (snakeHeadCell[0] == 21) {
       snakeHeadCell[0] = 1;
   } else if (snakeHeadCell[0] == 0){
       snakeHeadCell[0] = 20;
   } else if (snakeHeadCell[1] == 21) {
       snakeHeadCell[1] = 1;
   } else if (snakeHeadCell[1] == 0) {
       snakeHeadCell[1] = 20;
   }
}

function createFood() {
    var foodCreated = false;

    while (!foodCreated) {
        var y = Math.floor(Math.random() * fieldSizeY);
        var x = Math.floor(Math.random() * fieldSizeX);
        var foodCell = document.getElementsByClassName("cell-" + y + "-" + x)[0];
        if (!foodCell.getAttribute("class").split(" ").includes("snake-cell") &&
            !foodCell.getAttribute("class").split(" ").includes("obstacle-cell")) {

            foodCell.setAttribute("class", foodCell.getAttribute("class") + " food-cell");
        } else {
            createFood();
        }
        foodCreated = true;
    }

}

function createObstacle() {
    var obstacleCreated = false;

    while (!obstacleCreated) {
        var obstY = Math.floor(Math.random() * fieldSizeY);
        var obstX = Math.floor(Math.random() * fieldSizeX);
        var obstacleCell = document.getElementsByClassName("cell-" + obstY + "-" + obstX)[0];
        if (!obstacleCell.getAttribute("class").split(" ").includes("snake-cell") &&
            !obstacleCell.getAttribute("class").split(" ").includes("food-cell")) {

            obstacleCell.setAttribute("class", obstacleCell.getAttribute("class") + " obstacle-cell");
        } else {
            createObstacle();
        }
        obstacleCreated = true;
    }
}

//ф-ия создания игрового поля
function generateGameField() {
    var snakeField = document.getElementsByClassName("snake-field")[0];
    var snakeTable = document.createElement("table");
    snakeTable.setAttribute("class", "snake-table");
    for (var i = fieldSizeY; i > 0 ; --i) {
        var tr = document.createElement("tr");
        tr.setAttribute("class", "row row-" + i);

        for (var j = 1; j <= fieldSizeX; j++) {
            var td = document.createElement("td");
            td.setAttribute("class", "cell cell-" + i + "-" + j);
            tr.appendChild(td);
        }
        tr.appendChild(td);
        snakeTable.appendChild(tr);
    }
    snakeField.appendChild(snakeTable);
}

//Обработчик нажатой кнопки
function keyDown(event){
    switch (event.keyCode) {
        case key.left: //стрелка влево
            if (direct != 0){
                direct = 2;
            }
            break;
        case key.right: //стрелка вправо
            if (direct != 2){
                direct = 0;
            }
            break;
        case key.up: //стрелка вверх
            if (direct != 3){
                direct = 1;
            }
            break;
        case key.down: //стрелка вниз
            if (direct != 1){
                direct = 3;
            }
            break;
        default :
            return;
    }
}

function refreshGame() {
    window.location.reload();
}

function finishGame() {
    clearInterval(snakeTimer);
    clearInterval(obstacleTimer);
    alert("Вы проиграли!!! " + " Ваш счет : " + score);
}