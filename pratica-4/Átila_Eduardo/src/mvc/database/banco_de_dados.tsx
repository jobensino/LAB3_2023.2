import { Conexao_banco } from "./conexao_db";

const db = Conexao_banco.getConnection();

const createTable = async () => {
    return new Promise<void>((resolve, reject) => {
        db.transaction(
            async (tx) => {
                try {
                    tx.executeSql(
                        'CREATE TABLE IF NOT EXISTS cadastro_email (id INTEGER PRIMARY KEY AUTOINCREMENT, email VARCHAR(25) NOT NULL, senha VARCHAR NOT NULL)',
                        []
                    );
                    console.log('Tabela de cadastro_email criada com sucesso!');
                    resolve();
                } catch (error) {
                    console.error('Erro ao criar tabela de cadastro_email:', error);
                    reject(error);
                }
            }
        );
    });
};

const inserte_tabela = async (email: string, senha: string) => {
    return new Promise<void>((resolve, reject) => {
        db.transaction(
            async (tx) => {
                try {
                    tx.executeSql(
                        'INSERT INTO cadastro_email (email, senha) VALUES (?, ?)',
                        [email, senha]
                    );
                    alert('E-mail adicionado com sucesso!');
                    resolve();
                } catch (error) {
                    alert('Erro na operação: Insert');
                    reject(error);
                }
            }
        );
    });
};

const select_tabela = () => {
    return new Promise((resolve, reject) => {
        db.transaction(
            async (tx) => {
                 tx.executeSql(
                    'SELECT * FROM cadastro_email',
                    [],
                    async (_, result) => {
                        const registros = result.rows._array;
                        console.log('Registros:', registros);
                        resolve(registros);
                    },
                    (error) => {
                        alert('Erro ao recuperar registros:');
                        reject(error);
                        return true;
                    }
                );
            }
        );
    });
};

const update_tabela = (senha: string, id: string) => {
    return new Promise<void>((resolve, reject) => {
        db.transaction(
            async (tx) => {
                try {
                     tx.executeSql(
                        'UPDATE cadastro_email SET senha = ? WHERE id = ?',
                        [senha, id],
                        async (_, result) => {
                            alert('Senha atualizada com sucesso!');
                            resolve();
                        },
                        (error) => {
                            alert('Erro ao atualizar senha:');
                            reject(error);
                            return true;
                        }
                    );
                } catch (error) {
                    alert('Erro na operação: Update');
                    reject(error);
                }
            }
        );
    });
};

const delete_tabela = (id: string) => {
    return new Promise<void>((resolve, reject) => {
        db.transaction(
            async (tx) => {
                try {
                    tx.executeSql(
                        'DELETE FROM cadastro_email WHERE id = ?',
                        [id],
                        async (_, result) => {
                            alert('Registro excluído com sucesso!');
                            resolve();
                        },
                        (error) => {
                           alert('Erro ao excluir tarefa:');
                            reject(error);
                            return true;
                        }
                    );
                } catch (error) {
                    alert('Erro na operação : Delete');
                    reject(error);
                }
            });
    });
};

export { createTable, inserte_tabela, select_tabela, update_tabela, delete_tabela }
