
   function sum ()
    {
    var x=parseInt(document.getElementById("num1").value);
    var y=parseInt(document.getElementById("num2").value);
    var z=x+y;
    document.getElementById("d1").innerHTML=z;
    }
    function mathex()
    {
        var x=prompt("enter expression");
        var y=eval(x);
        alert("your exp is  "+x+"  the result is  "+y);
    }
    function formm (){
    var x=prompt("enter your name ");
    while(isFinite(x))
    {x=prompt("enter your name ");}
    document.getElementById("d2").innerHTML="Name :"+x;
    var y=prompt("enter your birthDate ");
    while(!isFinite(y))
    {y=prompt("enter your birhDate ");}
    while(y>2010)
    {y=prompt("enter your birthDate ");}
    document.getElementById("d3").innerHTML="birth :"+y;
    var w=2019-y;
    document.getElementById("d4").innerHTML="age :"+w;

    }
