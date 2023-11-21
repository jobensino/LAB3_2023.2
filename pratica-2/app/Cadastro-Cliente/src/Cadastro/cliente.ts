interface DadosClientesAtr {
    id : number;
    nome: string;
    cpf: string;
    telefone: string;
}

class DadosClientes implements DadosClientesAtr {

    protected _id: number;
    protected _nome: string;
    protected _cpf: string;
    protected _telefone: string;

    constructor (nome:string,cpf:string,telefone:string){
        this._nome = nome;
        this._cpf = cpf;
        this._telefone = telefone;
    }

    get id() {return this.id}
    set id(id:number) { this.id = id}

    get nome() {return this._nome}
    set nome(n:string) {this._nome = n}

    get cpf() {return this._cpf}
    set cpf(s:string) { this._cpf = s}

    get telefone() {return this._telefone}
    set telefone(d:string) {this._telefone = d}
    
 
}

export {DadosClientes};

export type {DadosClientesAtr};

