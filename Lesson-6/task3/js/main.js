// 3) * Добавить в галерею функцию перехода к следующему изображению. По сторонам от большой
//  картинки должны быть стрелки “вперед” и “назад”, по нажатию на которые происходит замена 
//  изображения на следующее или предыдущее.

var buttonLeft = document.getElementsByClassName("slider-left")[0];
var buttonRight = document.getElementsByClassName("slider-right")[0];

//присваиваем кнопке Left событие click
buttonLeft.addEventListener("click", func);

//присваиваем кнопке Right событие click
buttonRight.addEventListener("click", func);

var left = 0;

function func(event) {
    var slider = document.querySelector("div.slider");
    //если нажали кнопку с классом "slider-left"  выполнить условие
    if (event.target.className == "slider-left") {

        left = left + 640;
        if (left > 0) left = -1920;
        slider.style.left = left + "px";
        //если нажали кнопку с классом "slider-right"  выполнить условие
    } else if (event.target.className == "slider-right") {

        left = left -  640;
        if (left < -2300) left = 0;
        slider.style.left = left + "px";
    }
}
