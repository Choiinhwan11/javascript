//빈 객체로 생성을 한다. 
var calc={};


//멤버변수 = 자바의 필드
calc.x=0;
calc.y=0;

calc.plus= function(){
return this.x+this.y;
}
calc.minus = function(){
return this.x-this.y;
}

//멤버 함수 생성 
calc.setValue = function(x,y){
    this.x=x;
    this.y=y;
}


calc.result=function(){
    var sum = this.plus();
    var minus= this.minus();
    document.write("<p>덧셈=" + sum + "</p>")
    document.write("<p>덧셈=" + minus + "</p>")
}