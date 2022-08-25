$(document).ready(function(){
    var arr=[];//Máº£ng chá»©a cĂ¡c item bá»‹ xĂ³a Ä‘á»ƒ cĂ³ thá»ƒ phá»¥c há»“i
    //click lĂªn pháº§n tá»­ nĂ o
    $("ol>li").click(function(){
        $("p#view").text($(this).text());
    });
    //click lĂªn radio id="no"
    $("#no").click(function(){
        $("#view").removeClass("shadow");
    });
    //click lĂªn radio id="yes"
    $("#yes").click(function(){
        $("#view").addClass("shadow");
    });
    //thay Ä‘á»•i mĂ u chá»¯
    $("#textcolor").change(function(){
        $("#view").css("color",$(this).val());
    });
    //click button xĂ³a pháº§n tá»­ cuá»‘i
    $("#btDel").click(function(){
            var text = $("ol li:last").text();
            if(text == "")
                return;
            arr.unshift(text);//thĂªm chuá»—i bá»‹ xĂ³a vĂ o danh sĂ¡ch arr
            $("ol li:last").remove(); //xĂ³a <li> cuá»‘i
    });
    //xá»­ lĂ½ button phá»¥c há»“i
    $("#btUndo").click(function(){
        if(arr.length == 0)return;// danh sĂ¡ch rá»—ng khĂ´ng xá»­ lĂ½
        var item = "<li>" + arr.shift() + "</li>"; //táº¡o pháº§n tá»­ <li> vá»›i chuá»—i láº¥y á»Ÿ Ä‘áº§u danh sĂ¡ch
        $("ol").append(item);//thĂªm vĂ o cuá»‘i <ol>   
        $("ol").on("click", "li", function(){
                $("p#view").text($(this).text());
        })
    });
})