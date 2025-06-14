import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Lista = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela de Lista de Assinaturas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  texto: { fontSize: 20 },
});

export default Lista;
