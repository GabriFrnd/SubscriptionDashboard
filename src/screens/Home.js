import React, { useEffect, useState, useContext } from "react";
import { View, Button, StyleSheet } from 'react-native';

import ProximasRenovacoes from '../components/ProximasRenovacoes';
import ResumoGastos from "../components/ResumoGastos";
import BotaoAdicionar from '../components/BotaoAdicionar';

import { AuthContext } from '../contexts/auth-contexto';
import { observarAssinaturas, calcularResumoPorAssinatura, filtrarProximasRenovacoes } from '../services/assinaturaService';
import BotaoListaCompleta from "../components/BotaoListaCompleta";


const Home = ({ navigation }) => {
  const { uid } = useContext(AuthContext);
  const [assinaturas, setAssinaturas] = useState([]);

  useEffect(() => {
    const unsubscribe = observarAssinaturas(uid, setAssinaturas);
    return () => unsubscribe();
  }, [uid]);

  const resumo = calcularResumoPorAssinatura(assinaturas);
  const renovacoesFiltradas = filtrarProximasRenovacoes(assinaturas);

  return (
    <View style={styles.container}>
      <ResumoGastos resumo={resumo} />
      {resumo && resumo.length > 0 && (<BotaoListaCompleta/>)}
      <ProximasRenovacoes assinaturas={renovacoesFiltradas}/>
      <BotaoAdicionar onPress={() => navigation.navigate('Adicionar')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  }
});

export default Home;