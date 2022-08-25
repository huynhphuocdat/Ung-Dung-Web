$(document).ready(function(){
    $("#btMoveLeft").click(function(){
        $("div").animate({
            left:'0'
        }, 1000)
    });
    $("#btMoveRight").click(function(){
        var left = window.innerWidth - $("div").width();
        $("div").animate({
            left:left
        }, 1000)
    });
    $("#btMoveUp").click(function(){
        $("div").animate({
            top:"0"
        }, 1000)
    });
    $("#btMoveDown").click(function(){
        var top = window.innerHeight - $("div").height();
        $("div").animate({
            top:top
        })
    });
})