"use strict";
exports.__esModule = true;
var util_1 = require("util");
/*
    Author : Ajinkya
    Topic : Properties
*/
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('X : ' + this._x + ' Y : ' + this._y);
    };
    Object.defineProperty(Point.prototype, "X", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0) {
                throw new util_1.error('The value should be greater than 0');
            }
            else {
                this._x = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var point = new Point(1, 2);
point.X = 12;
point.draw();
