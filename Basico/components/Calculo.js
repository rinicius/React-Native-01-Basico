import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';

function Calculo(){

    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [result, setResult] = useState('Insira dois números');

    const _somar = () => {
        if (!n1 == '' && !n2 == ''){
             setResult(Number(n1) + Number(n2))
        }
        else{
            setResult('Preenchimento obrigatório')
        }
    }

    const _limpar = () => {
        setN1('');
        setN2('');
        setResult('Insira dois números');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Somar </Text>

            <TextInput
                style={styles.txtbox}
                placeholder="número"
                onChangeText={n1 => setN1(n1)}
                value={String(n1)}
            />
            <TextInput
                style={styles.txtbox}
                placeholder="número"
                onChangeText={n2 => setN2(n2)}
                value={String(n2)}
            />

            <Text style={styles.campo}>{result}</Text>

            <View style={{ marginBottom: 6, marginTop: 8 }}>
                <Button
                    onPress={_somar}
                    title="Inserir"
                >
                </Button>

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
    campo: {
        display: 'flex',
        fontsize: 14,
        color: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: 'white',
        marginBottom: 5,
        marginTop: 5,
        height: 35,
    }
})

export default Calculo;