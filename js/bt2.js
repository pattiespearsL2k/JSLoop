function Count3For() {
    var count = 0;
    for (var i = 0; i < 1000; i++) {
        if (i % 3 == 0)
            count++;

    }

    document.getElementById("txtCount3For").innerHTML = "Số chia hết cho 3 nhỏ hơn 1000: " + count + " số";
}
document.getElementById("btnCount3For").onclick = Count3For;

function Count3While() {
    var count = 0;
    var i = 0;
    while (i < 1000) {
        if (i % 3 == 0) {
            count++;
        }
        i++;
    }
    document.getElementById("txtCount3While").innerHTML = "Số chia hết cho 3 nhỏ hơn 1000: " + count + " số";
}
document.getElementById("btnCount3While").onclick = Count3While;
