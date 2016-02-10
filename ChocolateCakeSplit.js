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
   $("#add_step_here").html("<!--<h4 id=numberpersons>Number of persons:</h4><input type=number id=number_of_persons><input type=button name=Get list emailed id=getemail value=Email>!--><h3 class=material>- <div class=num>125g</div> Black Chocolate</h3><h3 class=material>- <div class=num>125g</div> Sugar</h3><h3 class=material>-<div class=num>125g</div> Butter</h3><h3 class=material>- <div class=num>3</div> Eggs</h3><h3 class=material>- <div class=num>6 Spoons</div> tbsp chilli sauce, plus extra to serve</h3><h3 class=material>- <div class=num>8</div> pitta breads</h3><h3 class=material>- <div class=num>4</div> tomatoes, halved and sliced</h3>");   
});
     });
$(document).ready(function () {
    $("#steps").click(function () {
   $("#add_step_here").html("<button class=step1 onclick=playerSeekTo(ytplayer, 30)>Step 1</button><p class= guide_step>Put the chocolate in the pan. Let the chocolate melt in the pan on low heat.</p><button class=step1 onclick=setCurTime(1))>Step 2</button><p class= guide,_step>Add the milk to the chocolate. Mix the substance until it becomes homogenous.</p><button class=step1 onclick=setCurTime(23)>Step 3</button><p class= guide_step>Add the butter to the substance, mix substance until it becomes homogenous.</p><button class=step1 onclick=setCurTime(42)>Step 4</button><p class= guide_step>Seperate egg whites from yolks</p><button class=step1 onclick=setCurTime(65)>Step 5</button><p class= guide_step>Add the sugar to the substance. Mix until dough becomes homogenous</p><button class=step1 onclick=setCurTime(82)>Step 6</button><p class= guide_step>Add the egg yolks to the substance. Mix until dough becomes homogenous</p><button class=step1 onclick=setCurTime(105)>Step 7</button><p class= guide_step>Add the flour to the substance. Mix until dough becomes homogenous</p><button class=step1 onclick=setCurTime(137)>Step 8</button><p class= guide_step>Set the oven to 175C.</p><button class=step1 onclick=setCurTime(142)>Step 9</button><p class= guide_step>Add a bit of salt to egg whites, then beat them.</p><button class=step1 onclick=setCurTime(160)>Step 10</button><p class= guide_step>Add egg whites to the substance. Mix until dough becomes homogenous.</p><button class=step1 onclick=setCurTime(193)>Step 11</button><p class= guide_step>Butter the mold.</p><button class=step1 onclick=setCurTime(225)>Step 13</button><p class= guide_step>Put the dough in the mold. Put the mold in the oven for 30 minutes.</p>");
});
    });
$(document).ready(function () {
    $("#transcript").click(function () {
    $("#add_step_here").html("<h3>No transcript for this tutorial.</h3>");
});
    });
$(document).ready(function () {
    $("#faq").click(function () {
   $("#add_step_here").html("<h3 class=user>John S.<br><h5 class=comment>Hi, <br>I baked this cake last week, it tasted wonderful. I am looking forward to do it again, but I was wondering whether I use milk chocolate instead of black chocolate?<br>Cheers!</h5><h3 class=user>Anton B.<br><h5 class=comment>Hi John,<br>Thank you for your message. The cake can also be made with milk chocolate. It is however generally more recommended do to it with black chocolate. If you have any other questions do not hesitate to ask!</h5><textarea value=Comment id=leavecomment></textarea><input type=submit value=submit id=submit></input><div id=add_comment></div>");
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
    













































    
    




