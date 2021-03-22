(function($){
    //첫번째 유형
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(200);
    });
    
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(200);
    });
    
    //이미지 슬라이드
    //이미지를 top으로 이미지의 height값 만큼 설정
    //현재 이미지 = 0    -> top:  0;
    //두번째 이미지 = 1   -> top: -378px; 
    //세번째 이미지 = 2   -> top: -756px;
    
    var currentIndex = 0;       //현재 이미지를 변수에 저장
    
    setInterval(function(){
        if(currentIndex < 2){
            currentIndex++
        } else {
            currentIndex = 0;
        }
        var slidePosition = currentIndex * (-378)+"px";
    
        //console.log(slidePosition);
        $(".slideList").animate({ top:slidePosition},400);
    },3000);
    
    
    //탭메뉴
    var tabMenu = $(".notice");
    tabMenu.find("ul > li > ul").hide();
tabMenu.find("ul > li.active > ul").show();

function tabList(e){
    e.preventDefault();
    var target = $(this);
    target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
};

tabMenu.find("ul > li > a").click(tabList).focus(tabList);

//팝업
$(".ad").click(function(){
    $(".layer_bg").css("display","block");
});
$(".layer .close").click(function(){
    $(".layer_bg").css("display","none");
});
    
})(jQuery);
