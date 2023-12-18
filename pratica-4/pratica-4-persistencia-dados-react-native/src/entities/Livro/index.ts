import { EntityBase } from "entities/base";
import { Entity, Column } from "typeorm"
import { Genero, ILivro } from "./type";

@Entity()
export class Livro extends EntityBase implements ILivro {
    @Column("text")
    titulo!: string

    @Column("text")
    autor!: string

    @Column("text")
    genero!: Genero;
}