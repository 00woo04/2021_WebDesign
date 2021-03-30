$(".ul > li").mouseover(function(){
    $(this).find(".submenu").stop().slideDowm(200);
});
$(".ul > li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp(200);
});

var currentIndex = 0;
setInterval(function(){
    if(currentIndex < 2){
        currentIndex++;
    }else{
        currentIndex = 0;
    }
    var slidePosition = currentIndex*(-360)+"px";

    $(".slideList").animate({top:slidePosition},400);
},3000);
