jQuery(document).ready(function(){

    $('.navi').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(500);
        $('#menuwrap').stop().animate({
            'height':'220px'
        });
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
        $('#menuwrap').stop().animate({
            'height':'100px'
        });
    }); 
    
    $('.imgslide a:gt(0)').hide();
    setInterval(function(){
        $('.imgslide a:first-chid').fadeOut()
        .next('a')
        .fadeIn()
        .end()
        .appendTo('.imgslide');
    },3000);
});