function Prime() {
    text="";
    var n = Number(document.getElementById("number").value);
    for (num = 1; num <= n; num++) {
        count = 0;
        for (i = 2; i <= num / 2; i++) {
            if (num % i == 0) {
                count++;
                break;
            }
        }
        if (count == 0 && num != 1)
       text+=" "+num;
    }
    document.getElementById("txtPrime").innerHTML = "Các số nguyên tố: " + text;


    


}
document.getElementById("btnPrime").onclick = Prime;