import { select_tabela } from "mvc/database/banco_de_dados";
import { Pressable, SafeAreaView, View, Text, FlatList, ActivityIndicator } from "react-native";
import { styles } from "./select.styled";
import { useState } from "react";

interface Registro {
    id: number;
    email: string;
    senha: string;
}

const Buscar_Registros = () => {
    const [registros, setRegistros] = useState<Registro[]>([]);
    const [loading, setLoading] = useState(false);

    const handleBuscarPress = async () => {
        try {
            setLoading(true);
            const resultados = await select_tabela();
            setRegistros(resultados as Registro[]);
        } catch (error) {
            console.error('Erro ao buscar registros:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView>
            <View style={styles.centralizar}>
                <Pressable onPress={handleBuscarPress}>
                    <Text style={styles.button1}>Buscar</Text>
                </Pressable>
                {loading && <ActivityIndicator size="large" color="#0000ff" />}
                <Text style={styles.texto}>Registros:</Text>
                <FlatList
                    data={registros}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <><Text style={styles.texto}>{`Email: ${item.email}`}</Text>
                        <Text style={styles.texto}>{`Senha: ${item.senha}`}</Text></>
                    )}
                />
            </View>
        </SafeAreaView>
    );
};

export default Buscar_Registros;
