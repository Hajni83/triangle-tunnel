$(function(){
    canvas=document.getElementById('MyCanvas');
    context=canvas.getContext('2d');
    var x=100;
    var y=50;
    for (i=0;i<30;i++){
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x+50,y+100);
        context.lineTo(x-50,y+100);
        context.lineTo(x,y);
        context.stroke();
        x+=5;
        y+=5;
    }
});