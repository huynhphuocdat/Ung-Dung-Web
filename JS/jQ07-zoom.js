$(document).ready(function(){
    var speed = 200;
    $('ul.panels li:last-child').addClass('last');
    //Khi con trá» chuá»™t náº±m trĂªn cĂ¡c <li>
    $('ul.panels li').hover(function(){ //<li> Ä‘Æ°á»£c nháº­n con trá» chuá»™t -->zoom to
        $(this).stop().animate({
            width: '360px',
            fontSize: '150px'
        }, speed)
        .siblings('li').stop().animate({// cĂ¡c<li> khĂ¡c --> zoom nhá»
            width: '135px',
            fontSize: '50px'
        }, speed);
    },
    function(){ //con trá» chuá»™t rá»i khá»i <li> --> trá»Ÿ láº¡i kĂ­ch thÆ°á»›c ban Ä‘áº§u
        $(this).stop().animate({
            width: '180px',
            fontSize: '100px'
        }, speed)
        .siblings('li').stop().animate({ //cĂ¡c<li> khĂ¡c trá»Ÿ láº¡i kĂ­ch thÆ°á»›c ban Ä‘áº§u
            width: '180px',
            fontSize: '100px'
        }, speed);  
    });
});