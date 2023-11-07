import { TPessoa } from "./pessoa.type";

class Pessoa implements TPessoa {
    private _id:number
    private _nome:string
    constructor (id: number,nome: string){
        this._id = id;
        this._nome = nome;
    }
    get id() {return this._id}
    set id(v:number) {this._id=v}
    get nome() {return this._nome}
    set nome(v:string) {this._nome=v}
}

export {Pessoa}