import { Livro } from "entities/Livro";
import { EntityBase } from "entities/base";
import { AppDataSource } from "stored/db";
import { EntityTarget, FindOptionsWhere, ObjectLiteral, Repository } from "typeorm";

export class EntityRepository<T extends ObjectLiteral> {

    private _dbRepository: Repository<T>;

    constructor(entity: EntityTarget<T>) {
        this._dbRepository = AppDataSource.getRepository(entity);
    }

    async create(entity: T) {
        console.log('Dentro do save Repository')
        const result = await this._dbRepository.save(entity);
        console.log('result Controller ', result)

        console.log('====================================');
        console.log('create : ', result);
        console.log('====================================');

        return result;
    }

    async update(entity: T) {
        const result = await this._dbRepository.save(entity);
        
        console.log('====================================');
        console.log('update : ', result);
        console.log('====================================');

        return result;
    }

    async delete(entity: T) {
        const result = await this._dbRepository.remove(entity)
        
        console.log('====================================');
        console.log('delete : ', result);
        console.log('====================================');

        return result;
    }

    async findById(id: number) {
        const options: IEntityBase = {
            id: id
        }

        const entity = await this._dbRepository.findOneBy(options as any)

        return entity;
    }

    async findAll() {
        console.log('Dentro do FindAll Repository')
        console.log('_dbRepository ', this._dbRepository)
        const items = await this._dbRepository.find();
        console.log('items Repository ', items)

        return items;
    }

    async findBy(options: any) {
        const entities = await this._dbRepository.findBy(options)

        return entities;
    }
}