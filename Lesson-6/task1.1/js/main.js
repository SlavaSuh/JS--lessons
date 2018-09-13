// присваиваем переменной список из img 
var imagesList = document.querySelectorAll(".small-image img");

//присваиваем переменной img из big-image блока.
var bigImage = document.querySelectorAll(".big-image img")[0];

//добавляем событие error блоку с большой картинкой
bigImage.addEventListener("error", errorFunc);

// цикл для назначения событий по нажатию на картинку
for (var i = 0; i < imagesList.length; i++) {
    imagesList[i].addEventListener("click", func);
    // imagesList[i].addEventListener("error", errorFunc);
}
//функция отрабатывающая при нажатии на картинку
function func() {
    // создаем выражение для дальнейшей замены
    var re = /small/gi;

    // присваиваем переменной путь картинки на которорую нажали.
    var smallSrc = this.getAttribute("src");

    //присваиваем переменной src с заменной в пути "small" на "big".
    bigImage.src = smallSrc.replace(re, "big");
}

//функция отрабатывающая ошибку загрузки.
function errorFunc() {
    alert("Изображение не может быть загружено");
}
