import { Point2D } from "./point2d";

abstract class Figure2D {

    protected _points: Point2D[];
    protected _n: number;

    constructor (n:number){

        if (n<3) throw new Error("A figure2D must be three or more points")
        
        this._n = n;
        this._points = Array(n);
    }

    get n() { return this._n}
    get points() {return this._points}
    
    setPoint(i:number,p:Point2D){
        if (i<this.n) this._points[i] = p;
    }

    print(i:number):string{

        if (i<this.n){
            if (this._points[i])
                return "("+this._points[i].x+","+this._points[i].y+")";
            else
                return "(null,null)";
        }

        return "";
            
    }

    abstract area():number;
}

export {Figure2D}