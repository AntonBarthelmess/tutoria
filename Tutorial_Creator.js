$(document).ready(function () {

$("#submit_tutorial").mouseenter(function () {
    $(this).css("color", "#30BDFF");
    });
$("#submit_tutorial").mouseleave(function () {
    $(this).css("color", "#606060");
    }); 
    });
$(document).ready(function () {

$("#add_step").mouseenter(function () {
    $(this).css("color", "#30BDFF");
    });
$("#add_step").mouseleave(function () {
    $(this).css("color", "#606060");
    }); 
    });

$(document).ready(function() {
$(".login, .sign_up").mouseenter(function() {
    $(this).css("color","#daedff");
    });
$(".login, .sign_up").mouseleave(function() {
    $(this).css("color","white");
    });
    });


$(document).ready(function () {
  $("#submit_tutorial").click(function() {
      var step1 =[ document.getElementById('submit_text1').value];
$('.description').html(step1);
});
    
    });

$(document).ready(function () {
    $("#add_step").click(function () {
    $("#add_step_here").append("<h2 class= step_1>Step:</h2><h3 class= minutes>Minutes:</h3><input type=time name=time value=time class=time> <textarea id=submit_text1_1></textarea>");
});
    });




































    
    




