import * as SQLite from 'expo-sqlite';
//
export const Conexao_Sqlite = {
    getConnection: () => SQLite.openDatabase("database.db"),
};