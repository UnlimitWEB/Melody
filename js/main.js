$(document).ready(function () {
    var currentFloor = 2; // переменная, где хранится текущий этаж
    var floorPath = $(".home-image path"); /* замена вместо длинной конструкции. Каждый отдельный этаж в svg*/ 
    var counterUp = $(".counter-up"); /* кнопка увеличения этажа */
    var counterDown = $(".counter-down");   /* кнопка уменшения этажа */
    var modal = $(".modal");
    var modalCloseButton = $(".modal-close-button");
    var viewFlatsButton = $(".view-flats");
    const menuButton = $(".menu-button");
    const navbarPanel = $(".navbar-panel");
    
    menuButton.on('click', () => {
        navbarPanel.toggle('fast');
    });

    // функция при наведении мышкой на этаж
    floorPath.on('mouseover', function() {
        floorPath.removeClass("current-floor"); // удаляем активный класс у этажей 
        currentFloor = $(this).attr('data-floor'); // получаем значение текущего этажа
        $(".counter").text(currentFloor); // записываем значение этажа в счётчик на странице справа
    });

    floorPath.on("click", toggleModal); /* при клике на этаж вызвать окно */
    modalCloseButton.on("click", toggleModal); /* при клике на кнопку закрыть - закрывает окно */
    viewFlatsButton.on("click", toggleModal);

    // отслеживаем клик по кнопке вверх
    counterUp.on("click", function() {
        // проверяем значение этажа - не должно быть больше 18
        if (currentFloor < 18) {
            currentFloor++; // прибавляем этаж
            usCurrentFloor = currentFloor.toLocaleString("en-US", {  minimumIntegerDigits: 2, useGrouping: false }); // форматируем переменную с этажом, чтобы было 01, а не 1
            $(".counter").text(usCurrentFloor); // записываем значение этажа в счётчик на странице справа
            floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж синим
        }
    });
    
    counterDown.on("click", function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString("en-US", {  minimumIntegerDigits: 2,
                useGrouping: false });
                $(".counter").text(usCurrentFloor);
                floorPath.removeClass("current-floor");
                $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });
    function toggleModal() { /* функнция открыть и закрыть окно */
        modal.toggleClass("is-open");
    }
});