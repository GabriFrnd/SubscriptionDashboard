import React, { useEffect, useState, useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';

import ProximasRenovacoes from '../components/ProximasRenovacoes';
import TotalGastos from '../components/TotalGastos';
import BotaoAdicionar from '../components/BotaoAdicionar';

import { AuthContext } from '../contexts/auth-contexto';
import { observarAssinaturas } from '../services/assinaturaService';

const Home = ({ navigation }) => {
  const { uid } = useContext(AuthContext);
  const [assinaturas, setAssinaturas] = useState([]);

  useEffect(() => {
    const unsubscribe = observarAssinaturas(uid, setAssinaturas);

    return () => unsubscribe();  // Cancela o listener quando sair da tela
  }, [uid]);

  const total = assinaturas.reduce((acc, curr) => acc + Number(curr.valor), 0);

  return (
    <View style={styles.container}>
      <TotalGastos total={total} />
      <ProximasRenovacoes assinaturas={assinaturas} />
      <Button title="Ver Lista Completa de Assinaturas" onPress={() => navigation.navigate('Lista')} />
      <BotaoAdicionar onPress={() => navigation.navigate('Adicionar')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
});

export default Home;
