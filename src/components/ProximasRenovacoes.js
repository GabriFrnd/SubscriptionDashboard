import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AssinaturaCard from './AssinaturaCard';

const ProximasRenovacoes = ({ assinaturas }) => {
  const proximas = [...assinaturas]
    .sort((a, b) => new Date(a.data) - new Date(b.data))
    .slice(0, 5);

  return (
    <View>
      <Text style={styles.title}>Próximas Renovações</Text>
      <FlatList
        data={proximas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AssinaturaCard nome={item.nome} valor={item.valor} data={item.data} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
});

export default ProximasRenovacoes;

