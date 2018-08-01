// 2.​ ​ Начиная с этого урока, мы начинаем работать с функционалом интернет-магазина.
// Предположим, что у нас есть сущность корзины. Нужно реализовать функционал подсчета
// стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в
// массиве.
// 2.1. Организуйте такой массив для хранения товаров в корзине
// 2.2. Организуйте функцию countBasketPrice, которая будет считать стоимость корзины.


var basketArray = ["Asus", "Benq", "Sonicmaster", "Mitsubishi"]; // Массив для хранения товаров корзины
var sumOfProduct = 0; // Переменная для сохранения суммы товаров
var ul = "<ul>"; // 
function countBasketPrice(arr) {
    for (var i = 0; i < arr.length; i ++) { // Цикл для переборки товаров
        var priceOfProduct = arr[i];  
        var per = (priceOfProduct = Math.floor(Math.random() * (7000 - 1000)) + 1000);
        ul += "<li>" +"Марка : " + arr[i] + " стоимость -- " +  per +  " рублей</li>";
        sumOfProduct += per; // Сумма товаров
    }
    ul += "</ul>";
    document.write(ul);
    document.write("Общая стоимость товара составляет : " + sumOfProduct + " рублей.");
    
}
countBasketPrice(basketArray);
