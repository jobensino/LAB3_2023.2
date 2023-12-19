import { LivroService } from "csr/services/LivroService";
import { Livro } from "entities/Livro";
import { ILivro } from "entities/Livro/type";
import { ActionsType, TActions } from "hooks/createReducerContext/actions";

export class LivroController {
    private _dispach : React.Dispatch<TActions<Livro>>;
    private _service: LivroService;

    constructor(dispach: React.Dispatch<TActions<Livro>>) {
        this._dispach = dispach
        this._service = new LivroService();
    }    

    async save(item: ILivro) {

        let result = null;

        if(!item.id) {
            result = await this._service.create(item)
        } else {
            result = await this._service.update(item);
        }

        if(result != null) {
            this._dispach({type: ActionsType.SUCESS, payload: {message: 'Registro salvo com sucesso!'}});

            this.findAll();
        } else {
            this._dispach({type: ActionsType.ERROR, payload: {message: 'Ocorreu um erro ao deletar o registro!'}});
        }

    }

    async delete(id: number) {
        const result = await this._service.delete(id);

        if(result != null) {
            this._dispach({type: ActionsType.SUCESS, payload: {message: 'Registro deletado com sucesso!'}});

            this.findAll();
        } else {
            this._dispach({type: ActionsType.ERROR, payload: {message: 'Ocorreu um erro ao deletar o registro!'}});
        }

    }

    async details(id: number) {

        const result = await this._service.findById(id);

        if(result != null) {
            this._dispach({type: ActionsType.DETAILS, payload: {item: result!}});
        } else {
            this._dispach({type: ActionsType.ERROR, payload: {message: `Registro de não encontrado para o id:${id}`}});
        }
    }

    async findById(id: number) {

        const result = await this._service.findById(id);

        if(result != null) {
            this._dispach({type: ActionsType.DETAILS, payload: {item: result!}});
        } else {
            this._dispach({type: ActionsType.ERROR, payload: {message: `Registro de não encontrado para o id:${id}`}});
        }
    }

    async findAll() {
        const result = await this._service.findAll();
        this._dispach({type: ActionsType.LIST_ALL, payload: {items: result}})
    }
}