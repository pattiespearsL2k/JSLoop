function Factorial() {
    var Fac=1;
    var n = Number(document.getElementById("n1").value);
    console.log(n);
    for(var i=1;i<=n;i++){
        Fac*=i;
    }

    document.getElementById("txtFac").innerHTML = "Giai thừa: " + Fac;
}
document.getElementById("btnFac").onclick = Factorial;