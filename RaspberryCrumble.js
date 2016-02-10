$(document).ready(function() {
$(".step1").mouseenter(function() {
    $(this).css("background-color","#daedff");
    });
$(".step1").mouseleave(function() {
    $(this).css("background-color","white");
    });
    });


$(document).ready(function () {
    $("#materials").click(function () {
   $("#add_step_here").html("<!--<h4 id=numberpersons>Number of persons:</h4><input type=number id=number_of_persons><input type=button name=Get list emailed id=getemail value=Email>!--><h3 class=material>- <div class=num>125g</div> Almonds</h3><h3 class=material>- <div class=num>125g</div> Sugar</h3><h3 class=material>-<div class=num>125g</div> Butter</h3><h3 class=material>- <div class=num>3</div> Flour</h3><h3 class=material>- <div class=num>6 Spoons</div> Frozen Rasperries</h3><h3 class=material>- <div class=num>8</div> Almond powder</h3>");   
});
     });
$(document).ready(function () {
    $("#steps").click(function () {
   $("#add_step_here").html("<button class=step1 onclick=setCurTime(1)>Step 1</button><p class= guide_step>Set the oven to 200C. Cut the almonds into small pieces.</p><button class=step1 onclick=setCurTime(8)>Step 2</button><p class= guide_step>Put the flour, sugar, almond powder and butter in container mix knead to crumbly dough.</p><button class=step1 onclick=setCurTime(23)>Step 3</button><p class= guide_step>Put the frozen raspberries in a dish</p><button class=step1 onclick=setCurTime(42)>Step 4</button><p class= guide_step>Add the dough and the cut almonds to the frozen raspberries.</p><button class=step1 onclick=setCurTime(65)>Step 5</button><p class= guide_step>Put the dish dish in the oven at 200C for 20 minutes.</p><button class=step1 onclick=setCurTime(82)>Step 6</button><p class= guide_step>The crumble is ready to be served and is best served with vanilla ice cream.</p>");
});
    });
$(document).ready(function () {
    $("#transcript").click(function () {
    $("#add_step_here").html("<h3>No transcript for this tutorial.</h3>");
});
    });
$(document).ready(function () {
    $("#faq").click(function () {
   $("#add_step_here").html("<h3 class=user>User<br><h5 class=comment>Comment</h5><h3 class=user>User<br><h5 class=comment>Comment</h5></h5><textarea value=Comment id=leavecomment></textarea><input type=submit value=submit id=submit></input><div id=add_comment></div>");
});
    });

//$(document).ready(function() {
//$("#materials, #steps, #transcript, #faq").mouseenter(function() {
   // $(this).css("color","white");
    //$(this).css("background-color","#867f7f");
    //});
//$("#materials, #steps, #transcript, #faq").mouseleave(function() {
  //  $(this).css("color","#606060");
    //$(this).css("background-color","white")
    //});
    //});

$(document).ready(function() {
$("#materials").click(function() {
    $("#materials").css("color","white");
    $("#materials").css("background-color","#867f7f");
    $("#steps, #transcript, #faq").css("color","#606060");
     $("#steps, #transcript, #faq").css("background-color","white");
    });
    });

$(document).ready(function() {
$("#steps").click(function() {
    $("#steps").css("color","white");
    $("#steps").css("background-color","#867f7f");
    $("#materials, #transcript, #faq").css("color","#606060");
     $("#materials, #transcript, #faq").css("background-color","white");
    });
    });

$(document).ready(function() {
$("#transcript").click(function() {
    $("#transcript").css("color","white");
    $("#transcript").css("background-color","#867f7f");
    $("#materials, #steps, #faq").css("color","#606060");
     $("#materials, #steps, #faq").css("background-color","white");
    });
    });
$(document).ready(function() {
$("#faq").click(function() {
    $("#faq").css("color","white");
    $("#faq").css("background-color","#867f7f");
    $("#materials, #steps, #transcript").css("color","#606060");
     $("#materials, #steps, #transcript").css("background-color","white");
    });
    });

//function number_of_persons() {
  //     var number_of_persons = [ document.getElementById('number_of_persons').value];
    //$("#num").html(number_of_persons);
   // };)
    













































    
    




