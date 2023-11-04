$(document).ready(function(){

    $(".trial").click(function(){
        $(".drpdwn-cont").fadeToggle();
        $(".trial-drpdwn").fadeToggle();
        $(".trial-drpdwn").css("display","flex");

        $(".blurrable").fadeToggle();
        
        // $(".blurrable").blur("fadeIn");
        // let body=$("body").css("overflow-y");
        // if(body=="auto"){
        //     $("body").css("overflow-y","hidden");}

        // else{
        //     $("body").css("overflow-y","auto");
        // }

    });

    $(".blurrable").click(function(){
        $(".trial-drpdwn").css("display","none");
        $(".blurrable").hide();
        $("body").css({"overflow-y":"auto"});

    });

});