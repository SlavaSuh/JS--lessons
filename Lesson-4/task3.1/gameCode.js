//3) * На базе игры, созданной на уроке, реализовать игру «Кто хочет стать миллионером?»

var event, ok, score = 0;

do {
    ok = false;
    // Выводим первый вопрос с вариантами ответа, запрашивая ответ и сохраняем в event
    event = prompt(questions[0].q +"\n" + questions[0].qa1 + questions[0].qa2 + questions[0].qa3 + questions[0].qa4 + "\n  -1 Выход");
    // Если ответ = -1 , выходим из игры.(По условию).
    if (event == -1) {
        break;
    }else {
    //Иначе проверяем  ответ (принадлежит ли диапазону от 1 до 4, и является ли числом)
        ok = isAnswer(event);
    }
    // Цикл выполняется до тех пор пока не будет введено число удовлетворяющее условие.
}while(!ok)
// Если ответ правильный выполняем  if
if (event == questions[0].qra) {
    // Добавляем 500 руб к счетчику
    score += 500;
    //Запускаем цикл перебирающий вопросы
    for (var i = 1; i < questions.length; i++) {
        do {
            ok = false;
            // Выводим  вопрос с вариантами ответа, запрашивая ответ и сохраняем в event
            event = prompt(questions[i].q +"\n" + questions[i].qa1 + questions[i].qa2 + questions[i].qa3 + questions[i].qa4 + "\n Поздравляем у  вас " + score + "рублей \n" +  "\n  -1 Выход");
            if (event == -1) {
                break;
            }else {
                ok = isAnswer(event);
            }

        }while(!ok)
        if (event == questions[i].qra) {
            // Если ответ правильный присваеваем переменной score функцию "scoreCounter(score)", которая
            // увеличивает число рублей
            score = scoreCounter(score);
            // Если дан правильный ответ на последний вопрос выводим поздравление.
            if (i == 11) {
                alert("Вы выйграли 1 000000 рублей !!! \n  \nПоздравляем!!!")
            }
        // Иначе ... Сообщение о поражении
        }else{
            alert("Вы проиграли, но в следующий раз вам повезет больше!!!\n" + "Спасибо за игру!");
            break;
        }
    }
} else {
    alert("Мне жаль, но вы проиграли !!!\n" + "Спасибо за игру!");
}

//------------------------------------------
function isAnswer(event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > 4) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}

//------------------------------------------
function scoreCounter(score) {
    switch (score) {
        case 500:
            return score = 1000;
        case 1000:
            return score = 2000;
        case 2000:
            return score = 3000;
        case 3000:
            return score = 5000;
        case 5000:
            return score = 10000;
        case 10000:
            return score = 15000;
        case 15000:
            return score = 25000;
        case 25000:
            return score = 50000;
        case 50000:
            return score = 100000;
        case 100000:
            return score = 200000;
        case 200000:
            return score = 400000;
        case 400000:
            return score = 1000000;
    }
}
