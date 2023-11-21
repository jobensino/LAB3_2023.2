interface PersonageAttr {
    id : number;
    name: string;
    power: string;
    weakPoint: string;
    image: string;
}

class Personage implements PersonageAttr {

    protected _id: number;
    protected _name: string;
    protected _power: string;
    protected _weakPoint: string;
    protected _image: string;

    constructor (name:string,power: string, weakPoint: string, image: string){
        this._name = name;
        this._power = power;
        this._weakPoint = weakPoint;
        this._image = image;
    }

    get id() {return this.id}
    set id(id:number) { this.id = id}
    
    get name() {return this._name}
    set name(n:string) {this._name = n}

    get power() {return this._power}
    set power(p:string) { this._power = p}

    get weakPoint() {return this._weakPoint}
    set weakPoint(w:string) { this._weakPoint = w}


    get image() {return this._image}
    set image(i:string) { this._image = i}
}

export { Personage };
export type { PersonageAttr };
