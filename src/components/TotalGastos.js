import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TotalGastos = ({ total }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Gasto Total Estimado</Text>
    <Text style={styles.valor}>R$ {total.toFixed(2)}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  title: { fontSize: 18, fontWeight: 'bold' },
  valor: { fontSize: 22, color: '#4CAF50', marginTop: 5 },
});

export default TotalGastos;