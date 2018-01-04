/*
    Author : Ajinkya
    Description : Types in typescript.

*/


// Variables of different types.

let a:number = 10;
let b:boolean = true;
let c:string= 'Ajinkya';
let d:any= 'Tom';
let e:number[] = [1,2,3]
let f:any[] = [1, true, 'a', false]

// Constants 

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;


// Enum

enum Color {
    Red = 0,
    Green = 1,
    Purple = 2,
    Blue = 3
};


// Using enum 
let backgroundColor = Color.Red;

// Note see its javascript equivalent file.
