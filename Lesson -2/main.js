//1) Дан код: 

// var a = 1, b = 1, c, d;
// c = ++a; alert(c); // 2
// c = 2 так как сначала добавляется 1 и лишь потом выполняется ретурн.
// d = b++; alert(d); // 1
// d = 1 так как сначала выполняется ретурн и лишь затем добавляется 1.
// c = (2+ ++a); alert(c); // 5
//по аналогии с первым случаем , только а = 2.
// d = (2+ b++); alert(d); // 4
//по аналогии с вторым случаем , только b = 2.
// alert(a); // 3  в конце а = 3, так как 2 раза добавили к а единицу.
// alert(b); // 3 в конце b = 3, так как 2 раза добавили к b единицу.


//2) Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);
alert(x); //5 


// 3) Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
// * если a и b положительные, вывести их разность;
// * если а и b отрицательные, вывести их произведение;
// * если а и b разных знаков, вывести их сумму;
// ноль можно считать положительным числом.



function taskThird(a = 14, b = -4) {
    if (a >= 0 && b >= 0) {
        return a - b;
    }
    else if (a < 0 && b < 0) {
        return a * b;
    }
    else if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
        return a + b
    }
}

alert(taskThird());


// 4) Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
var a = parseInt(prompt("Введите а :"));
if (a >= 0 && a <= 15) { 
    switch (a) {
        case 0:
            console.log("0");
        case 1:
            console.log("1");
        case 2:
            console.log("2");
        case 3:
            console.log("3");
        case 4:
            console.log("4");
        case 5:
            console.log("5");
        case 6:
            console.log("6");
        case 7:
            console.log("7");
        case 8:
            console.log("8");
        case 9:
            console.log("9");
        case 10:
            console.log("10");
        case 11:
            console.log("11");
        case 12:
            console.log("12");
        case 13:
            console.log("13");
        case 14:
            console.log("14");
        case 15:
            console.log("15");
    }
} else {
    alert("Данное число не входит в диапазон от 0 до 15");
}
// 5) Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
// Обязательно использовать оператор return.


function sum(x, y) {
    return x + y;
}
alert(sum(12, 13));

function raz(x, y) {
    return x - y;
}
alert(raz(17, 3));

function umn(x, y) {
    return x * y;
}
alert(umn(5, 5));

function del(x, y) {
    return x / y;
}
alert(del(9, 3));

// 6) Реализовать функцию с тремя параметрами: 
// function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, 
// operation – строка с названием операции. В зависимости от переданного значения
//  операции выполнить одну из арифметических операций (использовать функции из пункта 3) 
//  и вернуть полученное значение (использовать switch).

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return arg1 + arg2;
            break;
        case "-":
            return arg1 - arg2;
            break;
        case "*":
            return arg1 * arg2;
            break;
        case "/":
            return arg1 / arg2;
            break;
    }
}

alert(mathOperation(10, 5, "-"));

// 7) * Сравнить null и 0. Попробуйте объяснить результат.

alert(0 == null); //false . null равен либо самому себе , либо undefined.
//alert(null == null);// true
//alert(null == undefined); //true