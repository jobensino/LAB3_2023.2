import * as SQLite from 'expo-sqlite';

export const Conexao_banco = {
    getConnection: () => SQLite.openDatabase("banco_de_dados.db")
}