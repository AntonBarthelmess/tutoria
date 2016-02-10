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
   $("#add_step_here").html("<input type=button name= Get list emailed id=getemail value= Email><h3 class=material>- <div class=num></div> No materials needed for this tutorial</h3>");
});
     });
$(document).ready(function () {
    $("#steps").click(function () {
   $("#add_step_here").html("<h3 class=step1>Step 1</h3><p class= guide_step>Tip the mince into a large bowl (use a clean washing-up bowl if you don't have anything big enough) with all the other burger ingredients and a good pinch of salt. Roll up your sleeves, get your hands into the mix and squelch everything together through your fingers until completely mixed.</p><h3 class=step1>Step 2</h3><p class= guide_step>Pat the mix into 16 small burgers. These may now be frozen for up to 1 month or chilled up to a day ahead.</p><h3 class=step1>Step 3</h3><p class= guide_step>To cook, heat grill to its highest setting and lay the burgers in a single layer on a baking tray (you may need to do this in batches, depending on how big your tray is). Grill on the highest shelf for 5-6 mins on each side until browned and cooked through.</p><h3 class=step1>Step 4</h3><p class= guide_step>Pile burgers onto a platter and serve with all the accompaniments, so everyone can construct their own sandwich.</p>");
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

    







































    
    




