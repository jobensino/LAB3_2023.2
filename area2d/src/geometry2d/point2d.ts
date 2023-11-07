class Point2D {

    protected _x:number
    protected _y:number

    constructor(x:number,y:number);
    constructor(x?:number,y?:number)
    {
        this._x = x ? x : 0;
        this._y = y ? y : 0;
    }

    get x():number {return this._x}
    set x(v:number) { this._x = v}

    get y():number {return this._y}
    set y(v:number) { this._y = v}
}

export {Point2D}