function PTB2(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);
    if(a == "" || b == "" || c == "" || isNaN(a) || isNaN(b) || isNaN(c))
    {
        alert("Nhập chưa đúng");
        return false;
    }
    var kq, x1, x2;
    if(a == 0)
    {
        if(b == 0)
            if(c == 0)
                kq = "Phương trình vô số nghiệm";
            else
                kq = "Phương trình vô nghiệm";
        else //b != 0
        {
            x1 = -c/b;
            kq = "Phương trình có nghiệm là " + x1.toFixed(2);
        }
    }
    else //a != 0
    {
        var delta = b*b - 4*a*c;
        if(delta == 0)
        {
            x1 = (-b) / (2*a);
            kq = "Phương trình có nghiệm kép là " + x1.toFixed(2);
        }
        else if(delta < 0)
            kq = "Phương trình vô số nghiệm";
            else //delta >0
            {
                x1 = (-b + Math.sqrt(delta))/(2*a);
                x2 = (-b - Math.sqrt(delta))/(2*a);
                kq = "Phương trình có hai nghiệm: <br>" + 
                    x1.toFixed(2) + " và " + x2.toFixed(2);
            }
    }
    document.getElementById("ketqua").innerHTML = kq;
}

function Xoa(){
    document.getElementById("a").value="";
    document.getElementById("b").value="";
    document.getElementById("c").value="";
    document.getElementById("ketqua").innerHTML="";
}
