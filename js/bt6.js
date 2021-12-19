function taoThe() {
    var content = "p-3  bg-danger text-white";
    var content1 = "p-3  bg-primary text-white";
    for (i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            document.getElementById("txtDiv" + i).innerHTML = "<div class='" + content + "'></div>";
        } else {
            document.getElementById("txtDiv" + i).innerHTML = "<div class='" + content1 + "'></div>";
        }
    }
}
document.getElementById("btnTaoThe").onclick = taoThe;