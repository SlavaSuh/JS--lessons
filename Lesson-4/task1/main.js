// 1) Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, 
// мы должны получить на выходе объект, в котором в соответствующих свойствах описаны
// единицы, десятки и сотни. Например, для числа 245 мы должны получить
// следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999,
// необходимо выдать соответствующее сообщение с помощью console.log и вернуть
// пустой объект.

var object = {};
function tNum(num) {
    if (num >= 999) {
        console.log("4islo previshaet 999");
        return object;
    } else {
        for (var i = 0; i < String(num).length; i++) {
            object.sotni = String(num).split("")[i];
            object.desiatki = String(num).split("")[i + 1];
            object.edinici = String(num).split("")[i + 2];
            break;
        }
        return object;
    }
}
console.log(tNum(389));
