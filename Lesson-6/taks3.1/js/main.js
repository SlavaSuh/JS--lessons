// 3) * Добавить в галерею функцию перехода к следующему изображению. По сторонам от большой
//  картинки должны быть стрелки “вперед” и “назад”, по нажатию на которые происходит замена 
//  изображения на следующее или предыдущее.

var buttonLeft = document.getElementsByClassName("slider-left")[0];
var buttonRight = document.getElementsByClassName("slider-right")[0];

//присваиваем кнопке Left событие click
buttonLeft.addEventListener("click", func);

//присваиваем кнопке Right событие click
buttonRight.addEventListener("click", func);

//создаем массив с ссылками на картинки
var imagesLink = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

//присваиваем переменной image  элемент с тэгом img
var image = document.querySelector("img");

//счетчик, для подстановки в качестве индекса для списка imagesLink;
var count = 0;

//устанавливаем первую картинку в слайдер (так как в HTML у тэга img отсутствует атрибут src с адресом )
image.src = "img/" + imagesLink[count];

// функция запускающаяся по нажатию на кнопку
function func() {
    // если нажимаем на кнопку с классом slider-right выполняем условие
    if (this.className === "slider-right") {
        //увеличиваем счетчик индекса на 1
        count++;
        //если дошли до конца, присваиваем опять первую image.
        if (count === imagesLink.length) count = 0;
        //устанавливаем значение атрибуту src
        image.src = "img/" + imagesLink[count];


        // если нажимаем на кнопку с классом slider-left выполняем условие
    } else if (this.className === "slider-left") {
        //в случае если image первая , сменится на последнюю .
        if (count === 0) {
            count = imagesLink.length -1;
            image.src = "img/" + imagesLink[count];
        // иначе устанавливаем значение атрибуту src в обратном порядке.
        } else {
            count--;
            image.src = "img/" + imagesLink[count];
        }
    }
}