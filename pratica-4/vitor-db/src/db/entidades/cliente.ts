import {PrimaryGeneratedColumn, Column, Entity } from "typeorm"

@Entity({ name: 'cliente', schema: 'public' })
export class cliente {
    @PrimaryGeneratedColumn('increment')
    id: number;

     @Column('text')
     name: string

     @Column('text')
     cpf: string

     @Column('text')
     endereco: string
  
  
}