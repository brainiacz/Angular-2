/*
    Author : Ajinkya
    Description : Types in typescript.

*/
// Variables of different types.
var a = 10;
var b = true;
var c = 'Ajinkya';
var d = 'Tom';
var e = [1, 2, 3];
var f = [1, true, 'a', false];
// Constants 
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Purple"] = 2] = "Purple";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
// Using enum 
var backgroundColor = Color.Red;
