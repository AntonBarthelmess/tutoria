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
   $("#add_step_here").html("<!--<h4 id=numberpersons>Number of persons:</h4><input type=number value=number_of_persons id=number_of_persons><input type=button name=Get list emailed id=getemail value=Email>!--><h3 class=material>- <div class=num>400g</div> Minced beef</h3><h3 class=material>- <div class=num>2</div> Onions</h3><h3 class=material>- <div class=num>3</div> Garlic cloves</h3><h3 class=material>- <div class=num>2</div> Carrots</h3><h3 class=material>- <div class=num> 1/2 </div> Chorizo</h3><h3 class=material>- <div class=num> 2 tea spoons</div> Paprika powder (optional)</h3><h3 class=material>- <div class=num> 2 tablespoons</div> Creme fraiche</h3><h3 class=material>- <div class=num> 200g</div> Crushed tomatoes</h3><h3 class=material>- <div class=num> 2 tea spoons</div> Tomatoe concentrate</h3><h3 class=material>- <div class=num> 250ml</div> Red wine</h3><h3 class=material>- <div class=num> 200ml</div> Meat broth</h3><h3 class=material>- <div class=num> </div> Olive oil, sugar, salt and pepper</h3>");   
});
     });
$(document).ready(function () {
    $("#steps").click(function () {
   $("#add_step_here").html("<button class=step1 onclick=setCurTime(1)>Step 1</button><p class= guide_step>Peal the onions, the garlic and the carrots.</p><button class=step1 onclick=setCurTime(8)>Step 2</button><p class= guide_step>Cut onions and garlic into small pieces.</p><button class=step1 onclick=setCurTime(23)>Step 3</button><p class= guide_step>Cut chorizo in thin slices.</p><button class=step1 onclick=setCurTime(42)>Step 4</button><p class= guide_step>Grate the carrots.</p><button class=step1 onclick=setCurTime(65)>Step 5</button><p class= guide_step>Oil the pan. Let the pan heat.</p><button class=step1 onclick=setCurTime(82)>Step 6</button><p class= guide_step>Put the onions in the pan.</p><button class=step1 onclick=setCurTime(105)>Step 7</button><p class= guide_step>Add the garlic in the pan.</p><button class=step1 onclick=setCurTime(137)>Step 8</button><p class= guide_step>: Add the chorizo in the pan.</p><button class=step1 onclick=setCurTime(142)>Step 9</button><p class= guide_step>Add the meat in the pan. Mix everything, let the meat cook for a moment.</p><button class=step1 onclick=setCurTime(160)>Step 10</button><p class= guide_step>Add a handful of salt and pepper to the mixture.</p><button class=step1 onclick=setCurTime(193)>Step 11 (optional)</button><p class= guide_step>Add a bit of spicy paprika to the mixture. Quantity depends on tastes.</p><button class=step1 onclick=setCurTime(225)>Step 12</button><p class= guide_step>Add the grated carrots to the mixture. Mix everything.</p><button class=step1 onclick=setCurTime(1)>Step 13</button><p class= guide_step>Add approximately half a glass of red wine.</p><button class=step1 onclick=setCurTime(8)>Step 14</button><p class= guide_step>Prepare the meat broth.</p><button class=step1 onclick=setCurTime(23)>Step 15</button><p class= guide_step>Add the meat broth to the mixture. Mix everything.</p><button class=step1 onclick=setCurTime(42)>Step 16</button><p class= guide_step>Add 2 teaspoons of sugar to the mixture.</p><button class=step1 onclick=setCurTime(65)>Step 17</button><p class= guide_step>Add the crushed tomatoes to the mixture.</p><button class=step1 onclick=setCurTime(1)>Step 18</button><p class= guide_step>Add the tomatoes concentrate to the mixture. Mix everything.</p><button class=step1 onclick=setCurTime(8)>Step 19</button><p class= guide_step>Let the mixture simmer over low heat for half an hour.</p><button class=step1 onclick=setCurTime(23)>Step 20</button><p class= guide_step>Add 2 tablespoons of fresh cream to the mixture. Mix everything.</p>");
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
    













































    
    




