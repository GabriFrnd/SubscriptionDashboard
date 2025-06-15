import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { formatarMoeda } from '../utils/formatadores';

const ResumoGastos = ({ resumo }) => {

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.valor}>{formatarMoeda(item.valorTotal)}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gastos Totais por Assinatura</Text>
            {resumo && resumo.length > 0 ? (
                <FlatList
                    data={resumo}
                    keyExtractor={(item) => item.nome}
                    renderItem={renderItem}
                />
            ) : (
                <Text style={styles.emptyText}>Nenhuma assinatura para exibir.</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        maxHeight: '33%',
        marginBottom: 20
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },

    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },

    nome: {
        fontSize: 16
    },

    valor: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4CAF50'
    },

    emptyText: {
        textAlign: 'center',
        color: '#999',
        marginTop: 10
    }
});

export default ResumoGastos;