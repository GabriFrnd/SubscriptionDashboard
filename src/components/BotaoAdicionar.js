import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BotaoAdicionar = ({ onPress }) => (
  <TouchableOpacity style={styles.botao} onPress={onPress}>
    <Text style={styles.texto}>+</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  botao: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#4CAF50',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default BotaoAdicionar;
