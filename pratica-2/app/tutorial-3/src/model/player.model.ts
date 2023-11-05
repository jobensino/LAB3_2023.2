interface PlayerScoreAttr {
    id : number;
    name: string;
    score: string;
}

class PlayerScore implements PlayerScoreAttr {

    protected _id: number;
    protected _name: string;
    protected _score: string;

    constructor (name:string,score:string){
        this._name = name;
        this._score = score;
    }

    get id() {return this.id}
    set id(id:number) { this.id = id}

    get score() {return this._score}
    set score(s:string) { this._score = s}
    
    get name() {return this._name}
    set name(n:string) {this._name = n}
}

export { PlayerScore };
export type { PlayerScoreAttr };
