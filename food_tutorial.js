$(document).ready(function() {
$(".login, .sign_up").mouseenter(function() {
    $(this).css("color","#daedff");
    });
$(".login, .sign_up").mouseleave(function() {
    $(this).css("color","white");
    });
    });

$(document).ready(function () {
    $("#materials").click(function () {
   $("#add_step_here").html("<input type=button name=Get list emailed id=getemail value=Email><h3 class=material>- <div class=num>125g</div> Black Chocolate</h3><h3 class=material>- <div class=num>125g</div> Sugar</h3><h3 class=material>-<div class=num>125g</div> Butter</h3><h3 class=material>- <div class=num>3</div> Eggs</h3><h3 class=material>- <div class=num>6 Spoons</div> tbsp chilli sauce, plus extra to serve</h3><h3 class=material>- <div class=num>8</div> pitta breads</h3><h3 class=material>- <div class=num>4</div> tomatoes, halved and sliced</h3>");
});
     });
$(document).ready(function () {
    $("#steps").click(function () {
   $("#add_step_here").html("<button class=step1 onclick=setCurTime(1)>Step 1</button><p class= guide_step>Put the chocolate in the pan. Let the chocolate melt in the pan on low heat.</p><button class=step1 onclick=setCurTime(8)>Step 2</button><p class= guide_step>Add the milk to the chocolate. Mix the substance until it becomes homogenous.</p><button class=step1 onclick=setCurTime(23)>Step 3</button><p class= guide_step>Add the butter to the substance, mix substance until it becomes homogenous.</p><button class=step1 onclick=setCurTime(42)>Step 4</button><p class= guide_step>Seperate whites from yolks</p><button class=step1 onclick=setCurTime(65)>Step 5</button><p class= guide_step>Add the sugar to the substance. Mix until dough becomes homogenous</p><button class=step1 onclick=setCurTime(82)>Step 6</button><p class= guide_step>Add the egg yolks to the substance. Mix until dough becomes homogenous</p><button class=step1 onclick=setCurTime(105)>Step 7</button><p class= guide_step>Add the flour to the substance. Mix until dough becomes homogenous</p><button class=step1 onclick=setCurTime(137)>Step 8</button><p class= guide_step>Set the oven to 175C.</p><button class=step1 onclick=setCurTime(142)>Step 9</button><p class= guide_step>Add a bit of salt to egg whites, then beat them.</p><button class=step1 onclick=setCurTime(160)>Step 10</button><p class= guide_step>Add egg whites to the substance. Mix until dough becomes homogenous.</p><button class=step1 onclick=setCurTime(193)>Step 11</button><p class= guide_step>Butter the mold.</p><button class=step1 onclick=setCurTime(225)>Step 13</button><p class= guide_step>Put the dough in the mold. Put the mold in the oven for 30 minutes.</p></div></div>");
});
    });
$(document).ready(function () {
    $("#transcript").click(function () {
    $("#add_step_here").html("<h3>Tutoria is a video tutorial sharing platform, which will be free to use. Our aim is to enable people to learn new things on the web through video tutorials. The tutorials are of high quality and will be created by users (for users) in exchange of a compensation, which will be calculated in function of the number of views that the tutorial generates. In order to be sure that the video is of high quality, we will go through each video individually to make sure it meets certain criteria such as HD, good quality sound, an accurate and clear explanation for all the steps etc.  In order to make the learning easier, quicker and more convenient the tutorials will follow the same pattern and will come with an interactive guide, which is composed of different sections such as; the materials and tools required, the instructions for each step of the tutorial, the transcript of the tutorial and a FAQ section. Users will be able to interact on a forum if their questions are not answered in the FAQ. The website will be very user friendly and will be divided into categories (cars, cooking, IT etc) and sub-categories (example for the category car: wheels, rims etc). In contrast to most of our competitors the amount of video tutorials per subject will be limited to avoid users having to search too long until they find a tutorial that suits them. In order to be sure to prevent other websites from publishing our tutorials, each user that uploads a tutorial will have to agree to our terms and conditions that give us the exclusive rights of the video and the interactive guide. We will monetise the website by collecting big data, targeted advertising and by making deals with corporation which could partially replace their after sales service with tutorials on our website.</h3>");
});
    });
$(document).ready(function () {
    $("#faq").click(function () {
    $("#add_step_here").html("ddd<br>ddd<br>ddd<br>ddd<br>ddd<br>ddd");
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

    







































    
    




