//3) * На базе игры, созданной на уроке, реализовать игру «Кто хочет стать миллионером?»

var event, ok, score = 0;

do {//Выводим первый вопрос
    ok = false;
    event = +prompt(questions[0].q1 + questions[0].q1a1 + questions[0].q1a2 + questions[0].q1a3 + questions[0].q1a4 + '-1 - Выход из игры');
    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(questions[0].q1ra, event);
    }
} while (!ok);
switch (event) {
    case questions[0].q1ra:
        do {
            ok = false;
            score += 500;
            alert("Правильно!!!" + " У вас :  " + score + "  рублей");
            event = +prompt(questions[1].q2 + questions[1].q2a1 + questions[1].q2a2 + questions[1].q2a3 + questions[1].q2a4 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(questions[1].q2ra, event);
            }
        } while (!ok);
        switch (event) {
            case questions[1].q2ra:
                do {
                    ok = false;
                    score += 1000;
                    alert("Правильно!!!" + " У вас :  " + score + "  рублей");
                    event = +prompt(questions[2].q3 + questions[2].q3a1 + questions[2].q3a2 + questions[2].q3a3 + questions[2].q3a4 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(questions[2].q3ra, event);
                    }
                } while (!ok);
                switch(event) {
                    case questions[2].q3ra:
                        do {
                            ok = false;
                            score += 2000;
                            alert("Правильно!!!" + " У вас :  " + score + "  рублей");
                            event = +prompt(questions[3].q4 + questions[3].q4a1 + questions[3].q4a2 + questions[3].q4a3 + questions[3].q4a4 + '-1 - Выход из игры');
                            if (event == -1) {
                                break;
                            }
                            else {
                                ok = isAnswer(questions[3].q4ra, event);
                            }
                        } while (!ok);
                        switch (event) {
                            case questions[3].q4ra:
                                do {
                                    ok = false;
                                    score += 3000;
                                    alert("Правильно!!!" + " У вас :  " + score + "  рублей");
                                    event = +prompt(questions[4].q5 + questions[4].q5a1 + questions[4].q5a2 + questions[4].q5a3 + questions[4].q5a4 + '-1 - Выход из игры');
                                    if (event == -1) {
                                        break;
                                    }
                                    else {
                                        ok = isAnswer(questions[4].q5ra, event);
                                    }
                                } while (!ok);
                                switch (event) {
                                    case questions[4].q5ra:
                                        do {
                                            ok = false;
                                            score += 5000;
                                            alert("Правильно!!!" + " У вас :  " + score + "  рублей");
                                            event = +prompt(questions[5].q6 + questions[5].q6a1 + questions[5].q6a2 + questions[5].q6a3 + questions[5].q6a4 + '-1 - Выход из игры');
                                            if (event == -1) {
                                                break;
                                            }
                                            else {
                                                ok = isAnswer(questions[5].q6ra, event);
                                            }
                                        } while (!ok);
                                        switch (event) {
                                            case questions[5].q6ra:
                                                do {
                                                    ok = false;
                                                    score += 10000;
                                                    alert("Правильно!!!" + " У вас :  " + score + "  рублей");
                                                    event = +prompt(questions[6].q7 + questions[6].q7a1 + questions[6].q7a2 + questions[6].q7a3 + questions[6].q7a4 + '-1 - Выход из игры');
                                                    if (event == -1) {
                                                        break;
                                                    }
                                                    else {
                                                        ok = isAnswer(questions[6].q7ra, event);
                                                    }
                                                } while (!ok);
                                                switch (event) {
                                                    case questions[6].q7ra:
                                                        do {
                                                            ok = false;
                                                            score += 25000;
                                                            alert("Правильно!!!" + " У вас :  " + score + "  рублей");
                                                            event = +prompt(questions[7].q8 + questions[7].q8a1 + questions[7].q8a2 + questions[7].q8a3 + questions[7].q8a4 + '-1 - Выход из игры');
                                                            if (event == -1) {
                                                                break;
                                                            }
                                                            else {
                                                                ok = isAnswer(questions[7].q8ra, event);
                                                            }
                                                        } while (!ok);
                                                        switch (event) {
                                                            case questions[7].q8ra:
                                                                do {
                                                                    ok = false;
                                                                    score += 50000;
                                                                    alert("Правильно!!!" + " У вас :  " + score + "  рублей");
                                                                    event = +prompt(questions[7].q8 + questions[7].q8a1 + questions[7].q8a2 + questions[7].q8a3 + questions[7].q8a4 + '-1 - Выход из игры');
                                                                    if (event == -1) {
                                                                        break;
                                                                    }
                                                                    else {
                                                                        ok = isAnswer(questions[7].q8ra, event);
                                                                    }
                                                                } while (!ok);
                                                                switch (event) {
                                                                    case questions[7].q8ra:
                                                                        do {
                                                                            ok = false;
                                                                            score += 100000;
                                                                            alert("Правильно!!!" + " У вас :  " + score + "  рублей");
                                                                            event = +prompt(questions[8].q9 + questions[8].q9a1 + questions[8].q9a2 + questions[8].q9a3 + questions[8].q9a4 + '-1 - Выход из игры');
                                                                            if (event == -1) {
                                                                                break;
                                                                            }
                                                                            else {
                                                                                ok = isAnswer(questions[8].q9ra, event);
                                                                            }
                                                                        } while (!ok);
                                                                        switch (event) {
                                                                            case questions[8].q9ra:
                                                                                do {
                                                                                    ok = false;
                                                                                    score += 200000;
                                                                                    alert("Правильно!!!" + " У вас :  " + score + "  рублей");
                                                                                    event = +prompt(questions[9].q10 + questions[9].q10a1 + questions[9].q10a2 + questions[9].q10a3 + questions[9].q10a4 + '-1 - Выход из игры');
                                                                                    if (event == -1) {
                                                                                        break;
                                                                                    }
                                                                                    else {
                                                                                        ok = isAnswer(questions[9].q10ra, event);
                                                                                    }
                                                                                } while (!ok);
                                                                                switch (event) {
                                                                                    case questions[9].q10ra:
                                                                                        do {
                                                                                            ok = false;
                                                                                            score += 400000;
                                                                                            alert("Правильно!!!" + " У вас :  " + score + "  рублей");
                                                                                            event = +prompt(questions[10].q11 + questions[10].q11a1 + questions[10].q11a2 + questions[10].q11a3 + questions[10].q11a4 + '-1 - Выход из игры');
                                                                                            if (event == -1) {
                                                                                                break;
                                                                                            }
                                                                                            else {
                                                                                                ok = isAnswer(questions[10].q11ra, event);
                                                                                            }
                                                                                        } while (!ok);
                                                                                        switch (event) {
                                                                                            case questions[10].q11ra:
                                                                                                do {
                                                                                                    ok = false;
                                                                                                    score += 800000;
                                                                                                    alert("Правильно!!!" + " У вас :  " + score + "  рублей");
                                                                                                    event = +prompt(questions[11].q12 + questions[11].q12a1 + questions[11].q12a2 + questions[11].q12a3 + questions[11].q12a4 + '-1 - Выход из игры');
                                                                                                    if (event == -1) {
                                                                                                        break;
                                                                                                    }
                                                                                                    else {
                                                                                                        ok = isAnswer(questions[11].q12ra, event);
                                                                                                    }
                                                                                                } while (!ok);
                                                                                                switch (event) {
                                                                                                    case questions[11].q12ra:
                                                                                                        score += 800000;
                                                                                                        alert("Поздравляем вы выйграли!!!\n Теперь вы милионер!!!\n Вы выйграли  " + score +"  рублей");
                                                                                                }

                                                                                                break;
                                                                                            case -1: // Первое действие
                                                                                                break;
                                                                                            default:
                                                                                                alert('Увы вы проиграли!!!');
                                                                                        }

                                                                                        break;
                                                                                    case -1: // Первое действие
                                                                                        break;
                                                                                    default:
                                                                                        alert('Увы вы проиграли!!!');
                                                                                }

                                                                                break;
                                                                            case -1: // Первое действие
                                                                                break;
                                                                            default:
                                                                                alert('Увы вы проиграли!!!');
                                                                        }

                                                                        break;
                                                                    case -1: // Первое действие
                                                                        break;
                                                                    default:
                                                                        alert('Увы вы проиграли!!!');
                                                                }

                                                                break;
                                                            case -1: // Первое действие
                                                                break;
                                                            default:
                                                                alert('Увы вы проиграли!!!');
                                                        }

                                                        break;
                                                    case -1: // Первое действие
                                                        break;
                                                    default:
                                                        alert('Увы вы проиграли!!!');
                                                }

                                                break;
                                            case -1: // Первое действие
                                                break;
                                            default:
                                                alert('Увы вы проиграли!!!');
                                        }

                                        break;
                                    case -1: // Первое действие
                                        break;
                                    default:
                                        alert('Увы вы проиграли!!!');
                                }

                                break;
                            case -1: // Первое действие
                                break;
                            default:
                                alert('Увы вы проиграли!!!');
                        }

                        break;
                    case -1: // Первое действие
                        break;
                    default:
                        alert('Увы вы проиграли!!!');

                }



                break;
            case -1: // Второе действие
                break;
            default:
                alert('Вы ошиблись');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Увы вы проиграли!!!');
}
alert('Спасибо за игру');

//------------------------------------------
function isAnswer(q, event) {
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