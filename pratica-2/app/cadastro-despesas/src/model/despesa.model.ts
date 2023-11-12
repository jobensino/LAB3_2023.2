interface DespesaAttr {
    id : number;
    descricao: string;
    valor: number;
    data_cadastro: Date;
}

class Despesa implements DespesaAttr {
    
    protected _id : number;
    protected _descricao: string;
    protected _valor: number;
    protected _data_cadastro: Date;

    constructor (descricao: string, valor: number){
        this._descricao = descricao;
        this._valor = valor;
    }

    get id() {return this.id}
    set id(id:number) { this.id = id}
    
    get descricao() {return this._descricao}
    set descricao(value:string) {this._descricao = value}

    get valor() {return this._valor}
    set valor(value: number) { this._valor = value}

    get data_cadastro() {return this._data_cadastro}
}

export { Despesa };
export type { DespesaAttr };
