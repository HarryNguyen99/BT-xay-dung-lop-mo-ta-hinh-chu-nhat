class Rectangle {
    constructor(width, height) {
        this.height = height;
        this.width = width;

        this.getwidth = function () {
            return this.width;
        }
        this.getheight = function () {
            return this.height;
        }
        this.getacreage = function () {
            return this.height * this.width;
        }
        this.getperimeter = function () {
            return (this.height + this.width) * 2;
        }
    }
}

function drawcanvas() {
    var x = document.getElementById("GFG");
    var contex = x.getContext("2d");
    contex.fillStyle = "green";
    let width = +prompt("Chieu rong: ");
    let height = +prompt("Chieu dai: ");
    contex.fillRect(50, 50, width, height);
    contex.stroke();
    let rectangle = new Rectangle(width, height);
    let area = rectangle.getacreage();
    let pri = rectangle.getperimeter();
    document.getElementById('acreage').innerHTML = "Dien tich: " + area;
    document.getElementById('perimeter').innerHTML = "Chu vi:  " + pri;
}



