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

        console.log('item Controller ', item)
        console.log('!item.id Controller ', !item.id)

        if(!item.id) {
            console.log('Entrou Create Controller')
            result = await this._service.create(item)
        } else {
            console.log('Entrou Update Controller')
            result = await this._service.update(item);
        }
        console.log('Dentro do save Controller')
        console.log('result Controller ', result)

        if(result != null) {
            this._dispach({type: ActionsType.SUCESS, payload: {message: 'Registro salvo com sucesso!'}});

            this.findAll();
        }

        this._dispach({type: ActionsType.ERROR, payload: {message: 'Ocorreu um erro ao deletar o registro!'}});

    }

    async delete(id: number) {
        const result = await this._service.delete(id);

        if(result != null) {
            this._dispach({type: ActionsType.SUCESS, payload: {message: 'Registro deletado com sucesso!'}});

            this.findAll();
        }

        this._dispach({type: ActionsType.ERROR, payload: {message: 'Ocorreu um erro ao deletar o registro!'}});
    }

    async details(id: number) {

        const result = await this._service.findById(id);

        if(result != null) {
            this._dispach({type: ActionsType.DETAILS, payload: {item: result!}});
        }

        this._dispach({type: ActionsType.ERROR, payload: {message: 'Ocorreu um erro ao deletar o registro!'}});

    }

    async findById(id: number) {
        await this._service.findById(id);
    }

    async findAll() {
        console.log('Dentro do FindAll Controller')
        const result = await this._service.findAll();
        console.log('result Controller ', result)
        this._dispach({type: ActionsType.LIST_ALL, payload: {items: result}})
    }
}