import { Livro } from "../../entities/Livro";
import { EntityRepository } from "../repository/base";
import { ILivro } from "entities/Livro/type";

export class LivroService {

    private _repository: EntityRepository<Livro>;

    constructor() {
        this._repository = new EntityRepository(Livro);
    }

    async create(item: ILivro) {
        const livro = new Livro();
        livro.titulo = item.titulo;
        livro.autor = item.autor;
        livro.genero = item.genero;

        const result = await this._repository.create(livro);
        
        if(result == null) {
            return null;
        }

        return result;
    }

    async update(item: ILivro) {
        const livro = await this._repository.findById(item.id!);
        
        if(livro == null) {
            return null;
        }

        livro.titulo = item.titulo;
        livro.autor = item.autor;
        livro.genero = item.genero;

        const result = this._repository.update(livro);

        return result;
    }

    async delete(id: number) {
        const livro = await this.findById(id);
        
        if(livro == null) {
            return null;
        }

        return this._repository.delete(livro);
    }

    async findById(id: number) {
        const livro = await await this._repository.findById(id);
        
        if(livro == null) {
            return null;
        }

        return livro;
    }

    async findAll() {
        const livros = await this._repository.findAll();
        
        return livros;
    }
}