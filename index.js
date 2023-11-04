$(document).ready(function(){

$(".trial").click(function(){
    $(".drpdwn-cont").fadeToggle();

    $(".blurrable").fadeToggle();
    
    // $(".blurrable").blur("fadeIn");
    let body=$("body").css("overflow-y");
    if(body=="auto"){
        $("body").css("overflow-y","hidden");}

        else{
            $("body").css("overflow-y","auto");}

});

$(".drpdwn-cont").click(function(){
    $(".drpdwn-cont, .blurrable").hide();
    $("body").css({"overflow-y":"auto"});
});



});