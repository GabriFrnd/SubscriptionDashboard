import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

import ProximasRenovacoes from '../components/ProximasRenovacoes';
import TotalGastos from '../components/TotalGastos';
import BotaoAdicionar from '../components/BotaoAdicionar';

const Home = ({ navigation }) => {
  const assinaturas = [
    { id: '1', nome: 'Netflix', valor: 39.9, data: '2025-06-20' },
    { id: '2', nome: 'Spotify', valor: 19.9, data: '2025-06-14' },
    { id: '3', nome: 'Disney+', valor: 27.9, data: '2025-06-25' },
    { id: '4', nome: 'Amazon Prime', valor: 14.9, data: '2025-06-30' },
    { id: '5', nome: 'HBO Max', valor: 34.9, data: '2025-07-01' }
  ];

  const total = assinaturas.reduce((acc, curr) => acc + curr.valor, 0);

  return (
    <View style={styles.container}>
      <TotalGastos total={total} />
      <ProximasRenovacoes assinaturas={assinaturas} />
      <Button title="Ver Lista Completa de Assinaturas" onPress={() => navigation.navigate('Lista')} />
      <BotaoAdicionar onPress={() => navigation.navigate('Adicionar')}  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
});

export default Home;
