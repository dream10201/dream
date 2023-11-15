document.addEventListener('touchstart', function(event) {
    	document.getElementById("music").play();
}, false);
function f(x, y, z) {
    var a = x * x + 9.0 / 4.0 * y * y + z * z - 1;
    return a * a * a - x * x * z * z * z - 9.0 / 80.0 * y * y * z * z * z;
}

function h(x, z) {
    for (var y = 1.0; y >= 0.0; y -= 0.001){
        if (f(x, y, z) <= 0.0){
            return y;
        }
    }
    return 0.0;
}
var temp="%c";
for (var z = 1.5; z > -1.5; z -= 0.05) {
    for (var x = -1.5; x < 1.5; x += 0.025) {
        var v = f(x, 0.0, z);
        if (v <= 0.0) {
            var y0 = h(x, z);
            var ny = 0.01;
            var nx = h(x + ny, z) - y0;
            var nz = h(x, z + ny) - y0;
            var nd = 1.0 / Math.sqrt(nx * nx + ny * ny + nz * nz);
            var d = (nx + ny - nz) * nd * 0.5 + 0.5;
            temp+=".:-=+*#%@"[parseInt(d * 5.0)];
        }
        else{
            temp+=" ";
        }
    }
    temp+="\n";
}
console.log(temp,"background:#000000;color:red");
