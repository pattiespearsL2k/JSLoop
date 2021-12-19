function FindIntMin() {
    var sum = 0;
    var min = 1;
    while (sum < 10000) {
        min++;
        sum += min;

    }

    document.getElementById("txtIntMin").innerHTML = "Số nguyên dương nhỏ nhất: " + min;


}
document.getElementById("btnIntMin").onclick = FindIntMin;