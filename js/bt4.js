function CalSum(){
    var x=Number(document.getElementById("x").value) ;
    var n=Number(document.getElementById("n").value) ;
    var sum=0;

    for(var i=1;i<=n;i++){
        sum+=Math.pow(x,i);
    }

    document.getElementById("txtSum").innerHTML = "Tổng: "+ sum;
}
document.getElementById("btnSum").onclick = CalSum;