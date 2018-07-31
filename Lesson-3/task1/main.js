// 1) С помощью цикла while вывести все простые числа в промежутке от 0 до 100


//Сначала сделал с for.

// var count = 0;  // Счетчик делителей 
// var simpleNumbers = []; // создал пустой массив для простых чисел
// for (var i = 1; i <= 100; i++) { // запустил цикл от 1 до 100
//     for (var j = 1; j <= i; j++) {  // вложенный цикл проверяющий сколько делителей имеет число(без остатка)
//         if (i % j == 0) {
//             count += 1;
    //     }
    // }
    // if (count == 2) { // Если число имеет два делителя (1 и само себя), то по определению оно простое.
    //     simpleNumbers.push(i); // Добавляем число в массив простых чисел
//     }
//     count = 0; // сбрасываем счетчик 
// }

// document.write("Список простых чисел, от 1 до 100 : " + simpleNumbers);


var count = 0;  // Счетчик делителей 
var simpleNumbers = []; // создал пустой массив для простых чисел
var i = 1;
while (i <= 100) {  // запустил цикл от 1 до 100
    var j = 1;
    while (j <= i) {  // вложенный цикл проверяющий сколько делителей имеет число(без остатка)
        if (i % j == 0) {
            count += 1;
        };
        j++;
    };
    if (count == 2) { // Если число имеет два делителя (1 и само себя), то по определению оно простое.
        simpleNumbers.push(i); // Добавляем число в массив простых чисел
    };
    count = 0; // сбрасываем счетчик 
    i++;
};

document.write("Список простых чисел, от 1 до 100 : " + simpleNumbers);

