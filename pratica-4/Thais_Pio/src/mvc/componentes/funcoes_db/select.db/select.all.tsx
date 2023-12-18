import { styles } from "../../styled/styled";
import { Conexao_Sqlite } from "../../../database/conexao_Sqlite";
import React from "react";
import { useEffect, useState } from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
//
const db = Conexao_Sqlite.getConnection();
//
const BuscarTdUsuarios = () => {
    const [dadosUsuarios, setDadosUsuarios] = useState<Array<any>>([]);
    //
    useEffect(() => {
        db.transaction((teste) => {
            teste.executeSql(
                'SELECT * FROM cadastro_usuario',
                [],
                (teste, results) => {
                    const aux: Array<any> = [];
                    for (let index = 0; index < results.rows.length; index++) {
                        aux.push(results.rows.item(index));
                        setDadosUsuarios(aux);
                    }
                }
            )
        })
    });
//
    const listarBusca = (item: any) => {
        return (
            <View key={item.user_id}>
                <Text style={[styles.texto1, {fontSize: 18}]}>Id</Text>
                <Text style={styles.texto2}>{item.user_id}</Text>

                <Text style={[styles.texto1, {fontSize: 18}]}>Nome</Text>
                <Text style={styles.texto2}>{item.nome}</Text>

                <Text style={[styles.texto1, {fontSize: 18}]}>Contato</Text>
                <Text style={styles.texto2}>{item.telefone}</Text>

                <Text style={[styles.texto1, {fontSize: 18}]}>Endereço</Text>
                <Text style={styles.texto2}>{item.endereco}</Text>

                <Text style={[styles.texto1, {fontSize: 18}]}>Cep</Text>
                <Text style={styles.texto2}>{item.cep}</Text>
            </View>
        );
    }
//
    return(
        <SafeAreaView>
            <View>
                <FlatList data={dadosUsuarios} keyExtractor={(item, aux) => aux.toString()}
                renderItem={({item}) => listarBusca(item)}/>
            </View>
        </SafeAreaView>
    );
}
//
export default BuscarTdUsuarios;