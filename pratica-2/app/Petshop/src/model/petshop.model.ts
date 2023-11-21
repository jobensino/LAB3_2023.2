interface PetshopCadastro {
    id : number;
    nome: string;
    idade: string;
    cor: string;
    raca: string;
}

class Petshop implements PetshopCadastro {

    protected _id: number;
    protected _nome: string;
    protected _idade:  string;
    protected _cor:  string;
    protected _raca: string;

    constructor (nome:string,idade:string,cor:string,raca:string){
        this._nome = nome;
        this._idade = idade;
        this._cor = cor;
        this._raca= raca;
    }

    get id() {return this.id}
    set id(id:number) { this.id = id}

    get idade() {return this._idade}
    set idade(i:string) { this._idade = i}
    
    get nome() {return this._nome}
    set nome(n:string) {this._nome = n}

    get cor() {return this._cor}
    set cor(c:string) {this._cor = c}
    
    get raca() {return this._raca}
    set raca(r:string) {this._raca = r}
}

export { Petshop };
export type { PetshopCadastro };
