import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { formatarData } from "../utils/formatadores";

const AssinaturaCard = ({ nome, valor, dataRenovacao }) => (
  <View style ={styles.card}>
    <Text style={styles.nome}>{nome}</Text>
    <Text>Valor: R$ {valor.toFixed(2)}</Text>
    <Text>Vencimento: {formatarData(dataRenovacao)}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRaduis: 8,
    marginBottom: 10,
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default AssinaturaCard;