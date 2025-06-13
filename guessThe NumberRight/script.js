
var num=document.getElementById("num")

var n=10;
function guess(){
    var val=Number(num.value)
    var s=document.getElementById("score")
    var win=document.getElementById("status")
    var comp=Math.floor(Math.random()*10 )+1
    if(val==comp){
        win.textContent="You are Correct !"
    }else if(n==0){
        score.textContent="Score :"+ n+"  Game Over";
        n=10;
        score.textContent="Score :"+ n;
    }else{
        n=n-1;
        win.textContent="You are Wrong !"
        score.textContent="Score :"+ n;
    }

}