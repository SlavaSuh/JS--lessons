// 2) Реализовать модуль корзины. Создать блок товаров и блок корзины. 
// У каждого товара есть кнопка «Купить», при нажатии на которую происходит 
// добавление имени и цены товара в блок корзины. Корзина должна уметь считать 
// общую сумму заказа. 


//получаем кнопки
var buttons = document.getElementsByTagName("button");

//присваиваем каждой кнопке событие click
for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", func);
}

var sum = 0;
function func() {
    //получаем элемент с классом cart.
    var cart = document.getElementsByClassName("cart")[0];
    //добавляем display : block; отобраажаем элемент(по умолчанию display: none;)
    cart.style.display = "flex";
    cart.style.justifyContent = "space-around";
    cart.style.alignItems = "start";
    //получаем элемент с классом item.
    var items = document.getElementsByClassName("items")[0];
    
    var sumOfItems = document.getElementsByClassName("sum-of-items")[0];
    //В переменной currentItem сохраняем название товара(при клике на кнопку)
    var currentItem = this.parentNode.firstElementChild.innerHTML;
    //В переменной currentPrice coхраняем цену товара(при клике на кнопку)
    var currentPrice = this.parentNode.children[1].innerText;
    
    sum += (+currentPrice);
    items.innerHTML += "<p>" +  currentItem + " " + "Цена : " +   currentPrice + " рублей " + "</p>";
    sumOfItems.innerHTML = "К оплате : " +  sum + " рублей";
}
