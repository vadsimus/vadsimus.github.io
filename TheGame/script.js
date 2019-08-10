$(document).ready(function () {




    function remix(mix) { //Тасуем колоду
        var index, value;
        for (i = 0; i <= mix.length - 1; i++) {
            index = Math.floor(Math.random() * (mix.length - 1));
            value = mix[index];
            mix[index] = mix[i];
            mix[i] = value;
        }
        return mix;
    }

    function hide() { //Закрываем открытые карты после "второго" клика
        $('#game>div').each(function () {
            if ($(this).attr('data-state') === "1") //Все отмеченные карты с состоянием "1" открыты и их надо закрыть
            {
                $(this).attr('data-state', 0);

                $(this).children(".shirt").css("transform", 'rotateY(0deg)'); //Крутим рубашку и карту в исходное состояние
                $(this).children(".back").css("transform", 'rotateY(180deg)');

            }

        });

        wait_click = false; //Карты закрыты, можно вновь кликать
        first_click = true;
    }

    function del_card() { //Удаляем найденные пары карт с поля
        count_open_cards = 0;
        $('#game>div').each(function () {
            if ($(this).attr('data-state') === "2") //Найденные карты отмечены состоянием "2"
            {
                $(this).children(".back").css("transform", 'rotateY(180deg)'); //поворачиваем найденные карты без поворота рубашки
                count_open_cards++;
            }
            if (count_open_cards == 36) { //Когда последняя пара открылась - победа!
                alert('Супер!!! Всего ' + try_counter + ' промахов. Так мало! Поздравляю. Может еще разок?');
                location.reload();
            }
        });
    }

    function open(card) { //Открытие карты         
        $(card).children(".shirt").css("transform", 'rotateY(180deg)'); //Крутим, вертим
        $(card).children(".back").css("transform", 'rotateY(360deg)');
    }


    var array = new Array(36);
    for (i = 0; i < 36; i++) {
        array[i] = Math.ceil((i + 1) / 2); //Создаем массив в 36 элементов, в которм будут 18 пар чисел
    }

    remix(array); //Перемешиваем массив
    console.log(array);
    count = 0;
    try_counter = 0;
    tips=3;


    $('#game>div').each(function () {
        $(this).attr({
            'data-card': array[count],
            'data-state': 0
        });
        $(this).attr('data-state', 0);
        $(this).children(".shirt").css('backgroundImage', 'url(images/cards/shirt.jpg)');
        url_card = "images/cards/" + array[count] + ".jpg"; //Создаем URL картинки карты
        $(this).children(".back").css('backgroundImage', 'url(' + url_card + ')'); //Кладем картинку
        count++;
    });
    wait_click = false;
    first_click = true;
    prev_card = 0;
    var talk_fail = ['Еще разок', 'Мимо', 'Она где-то рядом', 'В следующий раз получится', 'Промах', 'Она беагет от тебя', 'Давай еще попробуем', 'Карт не так много, как может показаться', 'Мы найдем эту пару карт', 'Исчезай!!! Эх..', 'Не теряем надежду', 'Ты близок к успеху', 'Повнимательнее', 'Упс!!'];
    fail = 0;
    var talk_luck = ['Класс!!', 'Это прогресс!', 'Молодец!', 'Вот она где!', 'А вот и еще одна пара ушла', 'Супер', 'Вау, это великолепно', 'Долой карты с поля!!', 'Вот это память!!', 'Отлично!'];
    luck = 0;


    $('#game>div').click(function () {
        if (($(this).attr("data-state") === '0') && wait_click == false) { //проверка что карта в игре и что время после закрытия прошло

            if (first_click) { //Первый клик
                first_click = false;
                $('#talk').css("color", "#000");
                $("#talk").text("Открывай вторую карту");
                prev_card = $(this).attr('data-card');
                $(this).attr('data-state', 1);
                open(this);
            } else { //Второй клик
                first_click = true;
                if ($(this).attr('data-card') === prev_card) { //Проверяем не одинаковые ли карты
                    $('div[data-card=' + prev_card + ']').attr('data-state', 2); //Отмечаем одинаковые открытые катры
                    open(this);
                    $('#talk').css("color", "#373");
                    $("#talk").text(talk_luck[luck]); //Собщим пользователю как ему повезло
                    if (luck >= talk_luck.length - 1) {
                        luck = 0;
                    } else {
                        luck++
                    }
                    setTimeout(del_card, 1000); //Удаляем одинаковые открытые карты
                } else {

                    $(this).attr('data-state', 1); //Карты открыты, но разные.

                    fail = Math.floor(Math.random() * (talk_fail.length));
                    $('#talk').css("color", "#a33");
                    $("#talk").text(talk_fail[fail]); //Посочувствуем пользователю его неудаче
                    try_counter++;
                    $('#counter').text("попыток:" + try_counter);
                    open(this);
                    wait_click = true; //поднимаем флаг, чтоб исключить клики во время паузы
                    setTimeout(hide, 1000); //Закрываем открытые карты
                }
            }
        }
    });

    var all_cards = document.getElementById("show_all_cards");
    all_cards.addEventListener("click", function () {
        $('#game>div').each(function () {

            if ($(this).attr("data-state") !== '2') { //Открывать будем только те карты, что в игре
                open(this);
                $(this).attr('data-state', 1); //Открываем все карты, помечаем их открытыми и после паузы закрываем
                setTimeout(hide, 6000);
            }

        });
        all_cards.disabled = true; //Подсказка только одна!
        first_click = true;
    })

    var reset = document.getElementById("reset");
    reset.addEventListener("click", function () { //Все сначала
        location.reload();
    });

    var tip_btn = document.getElementById("tip");
    tip.addEventListener("click", function () {
        if (first_click) {
             $('#talk').css("color", "#f33");
            $("#talk").text("Открой сперва первую карту!");
        } else {
            $('#game>div').each(function () {

                if ($(this).attr("data-card") == prev_card) {
                    open(this);
                    $(this).attr('data-state', 1);

                    setTimeout(hide, 1000);
                }
            });
            tips--;
            $("#tip").text("Подсказок " + tips);
            if (tips == 0){tip_btn.disabled = true}
        }




    });

});
