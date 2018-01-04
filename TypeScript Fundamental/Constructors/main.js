/*
    Author : Ajinkya
*/
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X : ' + this.x + ' Y : ' + this.y);
    };
    return Point;
}());
var point = new Point(1, 2);
var point1 = new Point(10);
console.log('Point reference draw method : ');
point.draw();
console.log('Point1 reference draw method : ');
point1.draw();
