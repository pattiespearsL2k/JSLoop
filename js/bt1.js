function FindEOFor() {
    var Even = "", Odd = "";
    for (var i = 0; i < 100; i++) {
        if (i % 2 == 0) {
            Even += " " + i;
        }
        else {
            Odd += " " + i;
        }
    }
    document.getElementById("txtFindEOFor").innerHTML = "Số chẵn: " + Even + "<br> <br> Số lẻ: " + Odd;
}

document.getElementById("btnFindEOFor").onclick = FindEOFor;

function FindEOWhile() {
    var Even = "", Odd = "";
    var i = 0;
    while (i < 100) {

        if (i % 2 == 0) {
            Even += " " + i;
        }
        else {
            Odd += " " + i;
        }
        i++;

    }
    document.getElementById("txtFindEOWhile").innerHTML = "Số chẵn: " + Even + "<br> <br> Số lẻ: " + Odd;
}


document.getElementById("btnFindEOWhile").onclick = FindEOWhile;