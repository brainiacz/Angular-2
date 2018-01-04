
/*
    Author : Ajinkya
    Topic : Access Modifier
*/

class Point {

    private x:number;
    private y:number;

    constructor(x?:number, y?:number){
        this.x = x;
        this.y = y;
    }

    public draw(){
        console.log('X : '+ this.x + ' Y : ' + this.y)
    }
    
}


let point = new Point(1, 2);

// point.x;  x and y are private variables 

point.draw()