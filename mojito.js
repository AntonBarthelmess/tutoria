
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
   $("#add_step_here").html("<div id=add_step_here><!--<h4 id=numberpersons>Number of persons:</h4><input type=number value=number_of_persons id=number_of_persons><input type=button name=Get list emailed id=getemail value=Email>!--><h3 class=material>- <div class=num>3 spoons of</div> Brown sugar</h3><h3 class=material>- <div class=num>2 branches of</div> Mint</h3><h3 class=material>- <div class=num>2/4cl of</div> Rhum</h3><h3 class=material>- <div class=num>Glass of </div> Sparkling water</h3><h3 class=material>- <div class=num>Half a </div> Limon</h3><h3 class=material>- <div class=num>Some </div> Icecubes</h3>");   
});
     });
$(document).ready(function () {
    $("#steps").click(function () {
   $("#add_step_here").html("<button class=step1 onclick=setCurTime(6)>Step 1</button><p class= guide_step>Put 3 spoons of brown sugar in a glass.</p><button class=step1 onclick=setCurTime(6)>Step 2</button><p class= guide_step> Press the limon into the glass.</p><button class=step1 onclick=setCurTime(18)>Step 3</button><p class= guide_step>Cut the mint and add it to the drink (make sure you keep branches and not only leaves).</p><button class=step1 onclick=setCurTime(25)>Step 4</button><p class= guide_step>Crush the mint in the glass and mix it all.</p><button class=step1 onclick=setCurTime(29)>Step 5</button><p class= guide_step>Add a sip of sparkling water.</p><button class=step1 onclick=setCurTime(33)>Step 6</button><p class= guide_step>Add some icecubes in the glass.</p><button class=step1 onclick=setCurTime(37)>Step 7</button><p class= guide_step>Pour 2 to 4cl of rhum in the glass (drink responsibly).</p><button class=step1 onclick=setCurTime(42)>Step 8</button ><p class= guide_step>Fill the glass with sparkling water.</p>");
});

    });
$(document).ready(function () {
    $("#transcript").click(function () {
    $("#add_step_here").html("<h3>No transcript for this tutorial.</h3>");});
    });
$(document).ready(function () {
    $("#faq").click(function () {
   $("#add_step_here").html("<h3 class=user>User<br><h5 class=comment>Comment</h5><h3 class=user>User<br><h5 class=comment>Comment</h5></h5><textarea value=Comment id=leavecomment></textarea><input type=submit value=submit id=submit></input><div id=add_comment></div>");});
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
    
