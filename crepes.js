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
   $("#add_step_here").html("<!--<h4 id=numberpersons>Number of persons:</h4><input type=number value=number_of_persons id=number_of_persons><input type=button name=Get list emailed id=getemail value=Email>!--><h3 class=material>- <div class=num>3</div> Eggs</h3><h3 class=material>- <div class=num>4 teaspoons of</div> Sugar</h3><h3 class=material>- <div class=num>1 teaspoon of</div> Salt</h3><h3 class=material>- <div class=num>Around 30cl of</div> Milk</h3><h3 class=material>- <div class=num> 300g of </div> Flour</h3><h3 class=material>- <div class=num> 1 glass of</div> Sparkling water (optional, it is used to aerate the dough)</h3>");   
});
     });
$(document).ready(function () {
    $("#steps").click(function () {
   $("#add_step_here").html("<button class=step1 onclick=setCurTime(1)>Step 1</button><p class= guide_step>Break the eggs in a bowl.</p><button class=step1 onclick=setCurTime(8)>Step 2</button><p class= guide_step>Add three teaspoons of sugar.</p><button class=step1 onclick=setCurTime(23)>Step 3</button><p class= guide_step>Add one teaspoon of salt.</p><button class=step1 onclick=setCurTime(42)>Step 4</button><p class= guide_step>Mix this substance.</p><button class=step1 onclick=setCurTime(65)>Step 5</button><p class= guide_step>Add the milk to the substance.</p><button class=step1 onclick=setCurTime(82)>Step 6</button><p class= guide_step>Mix substance and add flour gradually.</p><button class=step1 onclick=setCurTime(105)>Step 7</button><p class= guide_step>Add the remaining milk.</p><button class=step1 onclick=setCurTime(137)>Step 8</button><p class= guide_step> Add the sparkling water.</p><button class=step1 onclick=setCurTime(142)>Step 9</button><p class= guide_step>Add one tablespoon of olive oil.</p><button class=step1 onclick=setCurTime(160)>Step 10</button><p class= guide_step>Mix the substance.</p><button class=step1 onclick=setCurTime(193)>Step 11 (optional)</button><p class= guide_step>Heat and oil the pan. Spill one ladleful of dough on the pan. Spread the dough all over the pan. When one side is cooked, turn the crepe over.</p>");
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