import { DataSource, DataSourceOptions } from 'typeorm';
import * as SQLite from 'expo-sqlite';
import { Livro } from 'entities/Livro';

const configDataSource : DataSourceOptions = {    
    database: 'pratica4lamc.db',
    type: 'expo',
    driver: SQLite,
    entities: [Livro],
    // logging: true,
    synchronize: true,
}

const AppDataSource = new DataSource(configDataSource)

export {
    AppDataSource
}