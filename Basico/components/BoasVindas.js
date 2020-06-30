import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

function BoasVindas(props) {

    const [mensagem, setMensagem] = useState('Seja bem-vindo(a)!');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [mostraMensagem, setMostraMensagem] = useState(false);

    const _handleSubmit = () => {
        if (!nome == '' && !sobrenome == '') {
            setMostraMensagem(true)
        } else {
            Alert.alert(
                'Preenchimento obrigatório!',
                'Informe o nome e o sobrenome',
                [
                    { text: 'OK' },
                ],
            );
        }
    }

    const _limpar = () => {
        setNome('');
        setSobrenome('');
        setMostraMensagem(false);
    }


    return (
        <View style={styles.container}>

            <Text style={styles.titulo}> Identificação </Text>

            <TextInput
                style={styles.txtbox}
                placeholder="Digite seu nome"
                onChangeText={nome => setNome(nome)}
                value={nome}
            />
            <TextInput
                style={styles.txtbox}
                placeholder="Digite seu sobrenome"
                onChangeText={item => setSobrenome(item)}
                value={sobrenome}
            />

            <View style={{ marginBottom: 6, marginTop: 8 }}>
                <Button
                    onPress={
                        _handleSubmit
                    }
                    title="Inserir"
                >
                </Button>

            {mostraMensagem && (
            <View>
                <Text style={styles.texto}>Olá {nome} {sobrenome}, {props.saudacao}</Text>
                <Text style={styles.texto}>{mensagem}</Text>
            </View>
            )}

            </View>
            <View style={{ marginBottom: 8 }}>
                <Button
                    onPress={_limpar}
                    title="Limpar"
                >
                </Button>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    titulo: {
        color: '#faedf3',
        fontSize: '20px',
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'center'
    },

    txtbox: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 5,
        marginBottom: 5
    },
    container: {
        backgroundColor: '#506465',
        width: 300,
        borderRadius: 5,
        padding: 10,
        margin: 10
    },
    texto: {
        fontSize: 14,
        color: '#faedf3',
        textAlign: "center",
    },
});
export default BoasVindas;
