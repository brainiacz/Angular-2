import { error } from "util";

/*
    Author : Ajinkya
    Topic : Properties
*/


class Point{
    constructor(private _x?:number, private _y?:number){

    }

    draw(){
        console.log('X : ' + this._x + ' Y : '+ this._y)
    }

    set X(value){
        if(value < 0){
            throw new error('The value should be greater than 0')
        }else{
            this._x = value;
        }
    }

    get X(){
        return this._x;
    }
}

let point = new Point(1, 2);

point.X = 12

point.draw();