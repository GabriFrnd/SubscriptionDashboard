import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { editarAssinatura, adicionarAssinatura } from "../services/assinaturaService";

const EditarAssinatura = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { assinatura } = route.params || {};

  const [nome, setNome] = useState(assinatura ? assinatura.nome : "");
  const [valor, setValor] = useState(assinatura ? String(assinatura.valor) : "");
  const [dataRenovacao, setDataRenovacao] = useState(
    assinatura ? assinatura.dataRenovacao : ""
  );

  const salvar = async () => {
    if (!nome || !valor || !dataRenovacao) {
      Alert.alert("Preencha todos os campos!");
      return;
    }

    const dados = {
      nome,
      valor: parseFloat(valor),
      dataRenovacao,
    };

    try {
      if (assinatura) {
        await editarAssinatura(assinatura.id, dados);
      } else {
        await adicionarAssinatura(dados);
      }
      navigation.goBack();
    } catch (error) {
      Alert.alert("Erro ao salvar", error.message);
    }
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.label}>Nome da assinatura:</Text>
      <TextInput
        style={estilos.input}
        placeholder="Ex: Netflix"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={estilos.label}>Valor:</Text>
      <TextInput
        style={estilos.input}
        placeholder="Ex: 39.90"
        value={valor}
        onChangeText={setValor}
        keyboardType="decimal-pad"
      />

      <Text style={estilos.label}>Data de renovação (aaaa-mm-dd):</Text>
      <TextInput
        style={estilos.input}
        placeholder="Ex: 2025-06-15"
        value={dataRenovacao}
        onChangeText={setDataRenovacao}
      />

      <Button title="Salvar" onPress={salvar} />
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 10,
    backgroundColor: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8,
  },
  label: {
    fontWeight: "bold",
  },
});

export default EditarAssinatura;