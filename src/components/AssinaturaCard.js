import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AssinaturaCard = ({ nome, valor, data }) => (
  <View style={styles.card}>
    <Text style={styles.nome}>{nome}</Text>
    <Text>Valor: R$ {valor.toFixed(2)}</Text>
    <Text>Vencimento: {new Date(data).toLocaleDateString()}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  nome: { fontWeight: 'bold', fontSize: 16 },
});

export default AssinaturaCard;