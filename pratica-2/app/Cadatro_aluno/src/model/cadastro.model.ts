interface CadastroAluno {
    id : number;
    nome: string;
    matricula: string;
    curso: string;
}

class Cadastro implements CadastroAluno {

    protected _id: number;
    protected _nome: string;
    protected _matricula: string;
    protected _curso: string;

    constructor (nome:string,matricula:string, curso:string){
        this._nome = nome;
        this._matricula = matricula;
        this._curso = curso;
    }

    get id() {return this.id}
    set id(id:number) { this.id = id}

    get matricula() {return this._matricula}
    set matricula(m:string) { this._matricula = m}
    
    get nome() {return this._nome}
    set nome(n:string) {this._nome = n}

    get curso() {return this._curso}
    set curso(c:string) {this._curso = c}
}

export { Cadastro };
export type { CadastroAluno };
