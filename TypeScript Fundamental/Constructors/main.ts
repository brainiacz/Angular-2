/*
    Author : Ajinkya
*/

class Point {
    // declaration of variables
    x:number;
    y:number;

    constructor(x?:number, y?:number){ // ? is used for optional
        this.x = x;
        this.y = y;
    }

    draw(){
        console.log('X : ' + this.x + ' Y : ' + this.y)
    }
}



let  point = new Point(1, 2);
let point1 = new Point(10);

console.log('Point reference draw method : ')
point.draw();



console.log('Point1 reference draw method : ')
point1.draw();


