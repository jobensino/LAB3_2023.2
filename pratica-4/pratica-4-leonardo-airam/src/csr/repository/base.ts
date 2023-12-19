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
        const result = await this._dbRepository.save(entity);

        // console.log('====================================');
        // console.log('create : ', result);
        // console.log('====================================');

        return result;
    }

    async update(entity: T) {
        const result = await this._dbRepository.save(entity);
        
        // console.log('====================================');
        // console.log('update : ', result);
        // console.log('====================================');

        return result;
    }

    async delete(entity: T) {
        const result = await this._dbRepository.remove(entity)
        
        // console.log('====================================');
        // console.log('delete : ', result);
        // console.log('====================================');

        return result;
    }

    async findById(id: number) {
        const options: IEntityBase = {
            id: id
        }

        const entity = await this._dbRepository.findOneBy(options as any)
        
        // console.log('====================================');
        // console.log('findById : ', entity);
        // console.log('====================================');

        return entity;
    }

    async findAll() {
        const items = await this._dbRepository.find();

        return items;
    }

    async findBy(options: any) {
        const entities = await this._dbRepository.findBy(options)

        return entities;
    }
}