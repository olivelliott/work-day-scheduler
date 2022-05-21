var saveBtnEl = $('.saveBtn');

$('#currentDay').text(moment().format('dddd MMMM Do YYYY, h:mm a'));

function checkTimeStatus() {
    var hour = moment().hour();
    $('.time-block').each(function() {
        var timeBlockHour = parseInt($(this).attr('id'));
        if (timeBlockHour > hour) {
            $(this).addClass('future');
        } else if (timeBlockHour === hour) {
            $(this).removeClass('future');
            $(this).removeClass('past');
            $(this).addClass('present');
        } else {
            $(this).removeClass('present');
            $(this).removeClass('future');
            $(this).addClass('past');
        }
    })
};

var loadTasks = function() {
    $('.hour').each(function() {
        var currHour = $(this).text();
        var currPlan = localStorage.getItem(currHour);
        if(currPlan !== null) {
            $(this).siblings('.plan').val(currPlan);
        }
    });
}

$(saveBtnEl).on('click', function () {
    var time = $(this).siblings('.hour').text();
    var plan = $(this).siblings('.plan').val();
    localStorage.setItem(time, plan);
});

checkTimeStatus();
setInterval(checkTimeStatus(), (1000 * 60) * 5);
loadTasks();


