import { CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
class EntityBase implements IEntityBase {
    
    @PrimaryGeneratedColumn()
    id!: number

    @CreateDateColumn()
    createdAt!: Date

    @UpdateDateColumn()
    updatedAt!: Date
}

export {
    EntityBase
}