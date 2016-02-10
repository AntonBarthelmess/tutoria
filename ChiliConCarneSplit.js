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
   $("#add_step_here").html("<input type=button name=Get list emailed id=getemail value=Email><h3 class=material>- <div class=num>125g</div> Black Chocolate</h3><h3 class=material>- <div class=num>125g</div> Sugar</h3><h3 class=material>-<div class=num>125g</div> Butter</h3><h3 class=material>- <div class=num>3</div> Eggs</h3><h3 class=material>- <div class=num>6 Spoons</div> tbsp chilli sauce, plus extra to serve</h3><h3 class=material>- <div class=num>8</div> pitta breads</h3><h3 class=material>- <div class=num>4</div> tomatoes, halved and sliced</h3>");
});
     });
$(document).ready(function () {
    $("#steps").click(function () {
   $("#add_step_here").html("<button class=step1 onclick=setCurTime(1)>Step 1</button><p class= guide_step>Peal the garlic. Then cut in small pieces.</p><button class=step1 onclick=setCurTime(9)>Step 2</button><p class= guide_step>Peal the onions. Then cut them in small pieces.</p><button class=step1 onclick=setCurTime(74)>Step 3</button><p class= guide_step>Peel the carrots. Then cut them in thin slices.</p><button class=step1 onclick=setCurTime(111)>Step 4</button><p class= guide_step>Drain the peppers. Then cut them in small pieces.</p><button class=step1 onclick=setCurTime(160)>Step 5</button><p class= guide_step>Put the pelled tomatoes in bowl. Then crush them.</p><button class=step1 onclick=setCurTime(185)>Step 6</button><p class= guide_step>Oil the pan with olive oil over middle strong fire.</p><button class=step1 onclick=setCurTime(196)>Step 7</button><p class= guide_step>Put the meat in the pan. Let meat cook for a few minutes.</p><button class=step1 onclick=setCurTime(221)>Step 8</button><p class= guide_step>Add the cut garlic and onions to the meat.Let cook for a few minutes.</p><button class=step1 onclick=setCurTime(238)>Step 9</button><p class= guide_step>Add the carrots slices to the meat</p><button class=step1 onclick=setCurTime(244)>Step 10</button><p class= guide_step>Add the cut peppers to the meat. Let cook and mix for a few minutes.</p><button class=step1 onclick=setCurTime(257)>Step 11</button><p class= guide_step>Add the crushed tomatoes to the meat. Let cook and mix mixuture. </p><button class=step1 onclick=setCurTime(276)>Step 12</button><p class= guide_step>Prepare the 0,5L of meat broth.</p><button class=step1 onclick=setCurTime(285)>Step 13</button><p class= guide_step>Step by step add the meat broth to the mixture.</p><button class=step1 onclick=setCurTime(300)>Step 14</button><p class= guide_step>Add the thyme, salt and pepper to the mixture</p><button class=step1 onclick=setCurTime(311)>Step 15</button><p class= guide_step>Add the chili sauce.</p><button class=step1 onclick=setCurTime(321)>Step 16</button><p class= guide_step>Add beans and let simmer over low heat for one hour.</p>");
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












































    
    




