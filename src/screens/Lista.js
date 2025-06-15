import React from 'react';
import { useEffect, useState } from "react";
import { FlatList, View, StyleSheet, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ItemAssinatura from "../components/ItemAssinatura";
import { buscarTodasAssinaturas, excluirAssinatura } from "../services/assinaturaService";

const Lista = () => {
  const navigation = useNavigation();
  const [assinaturas, setAssinaturas] = useState([]);

  useEffect(() => {
    carregarDados();
  }, []);

  const carregarDados = async () => {
    const dados = await buscarTodasAssinaturas();
    setAssinaturas(dados);
  };

  const aoExcluir = (id) => {
    Alert.alert(
      "Excluir",
      "Deseja realmente excluir esta assinatura?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          onPress: async () => {
            await excluirAssinatura(id);
            carregarDados();
          },
          style: "destructive",
        },
      ],
      { cancelable: true }
    );
  };

  const aoEditar = (assinatura) => {
    navigation.navigate("Editar", {
      assinatura,
      salvarEdicao: () => carregarDados(),
    });
  };

  return (
    <View style={estilos.container}>
      <FlatList
        data={assinaturas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemAssinatura
            assinatura={item}
            aoEditar={() => aoEditar(item)}
            aoExcluir={() => aoExcluir(item.id)}
          />
        )}
        ListEmptyComponent={
          <Text style={estilos.vazio}>Nenhuma assinatura cadastrada.</Text>
        }
      />


const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  vazio: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 16,
    color: "#999",
  },
});

export default Lista;

