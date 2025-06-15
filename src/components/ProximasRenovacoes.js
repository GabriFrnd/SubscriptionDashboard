import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import AssinaturaCard from "./AssinaturaCard";

const ProximasRenovacoes = ({ assinaturas }) => {
  const proximas = [...assinaturas]
    .sort((a, b) => new Date(a.dataRenovacao) - new Date(b.dataRenovacao))
    .slice(0, 5);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Próximas Renovações</Text>
      <FlatList
        data={proximas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AssinaturaCard
            nome={item.nome}
            valor={item.valor}
            dataRenovacao={item.dataRenovacao}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Não há renovações próximas.</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  emptyText: {
    textAlign: "center",
    color: "#999",
  },
});

export default ProximasRenovacoes;