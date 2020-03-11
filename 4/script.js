var d = new Date();
var sat= d.getHours();


if(sat < 12){
    document.write("dobro jutro radni narode");
}else if(sat > 11 && sat <18){
    document.write("dobar dan");
}else{
    document.write("dobro vece");
}