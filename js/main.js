$(document).ready(function () {
    var currentFloor = 2;
    $(".home-image path").on('mouseover', function() {
        currentFloor = $(this).attr('data-floor');
        $(".counter").text(currentFloor);
    });
});