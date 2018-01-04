/*
    Author : Ajinkya
    Topic : Access Modifiers in Constructor
*/

class Point {

    constructor(private x?:number, private y?:number){

    }

    draw(){
        console.log('X : ' + this.x + ' Y : ' + this.y)
    }
}


let point = new Point(1,2);
point.draw();