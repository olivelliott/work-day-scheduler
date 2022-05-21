var saveBtnEl = $('.saveBtn');

$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

function checkTimeStatus() {
    var hour = moment().hours();
    $(".time-block").each(function() {
        var currHour = parseInt($(this).attr("id"));
        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

var loadTasks = function() {
    $(".hour").each(function() {
        var currHour = $(this).text();
        var currPlan = localStorage.getItem(currHour);
        if(currPlan !== null) {
            $(this).siblings(".plan").val(currPlan);
        }
    });
}

$(saveBtnEl).on('click', function () {
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();
    localStorage.setItem(time, plan);
});

checkTimeStatus();
// setInterval(checkTimeStatus(), (1000 * 60) * 5);
loadTasks();
































// var createSchedule = function() {
//         for (var i = 0; i < scheduleTimesEl.length; i++) {
//         var timeOfDay = $('<p>').addClass('time-block hour row mx-auto').text(scheduleTimesEl[i]);
//         var taskInputValue = $('<input>').addClass('taskInput row');
//         var saveButton = $('<button>').addClass('saveBtn').text('Save');
//         timeBlock.forEach(function (){
//             var timeBlock = $('<div>').addClass('scheduleRow');
//             timeBlock.append(timeOfDay, taskInputValue, saveButton);
//         })
//         // scheduleContainerEl.append(timeOfDay, taskInputValue, saveButton);
//         // scheduleContainerEl.append(scheduleTimeContainerEl);
//         }
// }

//  createSchedule();



// var taskLi = $('<li>').addClass('list-group-item');
// var taskSpan = $('<span>').addClass('badge badge-primary badge-pill').text(taskDate);
// var taskP = $('<p>').addClass('m-1').text(taskText);

// for (var i = 0; i < data.length; i++) {
//     // Create a list element
//     var listItem = document.createElement('li');

//     // Set the text of the list element to the JSON response's .html_url property
//     listItem.textContent = data[i].html_url;

//     // Append the li element to the id associated with the ul element.
//     repoList.appendChild(listItem);
//   }
// });
// }

//  * To dynamically create the task element
// var createScheduler = function() {
//     }
// }

    // var timeOfDay = $('<p>');
    // timeOfDay.addClass('card col-2 p-4 border-left-0').text('9am');
    // timeOfDay.appendTo(scheduler);


// var rowOneInputEl = $('#row-one');
// var rowOneSaveEl = $('#row-one-save');

// var createTask = function(taskText, taskList) {
//     var taskLi = $('<li>').addClass('list-group-item');
//     var taskInput = $('<input>').addClass('task-text-item').text(taskInput);
//     taskLi.append(taskInput);
//     $('list-' + taskList).append(taskLi);
// };

// function saveTasks () {
//     alert('bakld;h');
// }

// $('#row-one-save .btn').on('click', saveTasks);


//  When I click on the input field, I type my new value and save it by clicking the save button


// var createTask = function() {
//     // create elements that make up a task item
//     var taskInput = $('<input>').addClass('input-group-item').text('Hello');
//     // var taskP = $('<p>').addClass('taskItem').text('');
//     // taskInput.append(taskP);
//     rowOneEl.append(taskInput);
//   };


// var loadElements = function() {
//     toDoEl = JSON.parse(localStorage.getItem('toDoEl'));
//     if (!toDoEl) {
//       toDoEl = {
//         toDo: [],
//         inProgress: [],
//         inReview: [],
//         done: []
//       };
//     }
// };

// var saveTasks = function() {
//     localStorage.setItem('toDo', JSON.stringify(toDoEl));
//   };

// //   $('.row-one').on('click', function() {
// //     var text = $(this).text().trim();
// //     var textInput = $('<textarea>').addClass('form-control').val(text);
// //     $(this).replaceWith(textInput);
// //     textInput.trigger('focus');
// //   });

// $('.row-one').on('blur', 'textArea', function() {
//     var taskText = $('.row-one').val();
//     tasks.toDo.push(taskText);
//     saveTasks();
//     localStorage.setItem('toDo', JSON.stringify(toDoEl));
// })

