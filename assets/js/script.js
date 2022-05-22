var saveBtnEl = $('.saveBtn');

$('#currentDay').text(moment().format('dddd MMMM Do YYYY, h:mm a'));

function checkTimeStatus() {
    var currentHour = moment().hour();
    $('.time-block').each(function() {
        var timeBlockHour = parseInt($(this).attr('id').split("-")[1]);
        if (timeBlockHour < currentHour) {
            $(this).addClass('future');
        } else if (timeBlockHour === currentHour) {
            $(this).addClass('present');
        } else {
            $(this).addClass('past');
        }
    })
};

checkTimeStatus();
setInterval(checkTimeStatus(), (1000 * 60) * 5);


var loadTasks = function() {
    $('.hour').each(function() {
        var currentHour = $(this).text();
        var currentTask = localStorage.getItem(currentHour);
        if(currentTask !== null) {
            $(this).siblings('.plan').val(currentTask);
        }
    });
}

$(saveBtnEl).on('click', function () {
    var time = $(this).siblings('.hour').text();
    var plan = $(this).siblings('.plan').val();
    localStorage.setItem(time, plan);
});

loadTasks();


