import { useState, useContext } from "react";
import { View, TextInput, Button, StyleSheet, Text, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { atualizarAssinatura, adicionarAssinatura } from "../services/assinaturaService";
import { AuthContext  } from "../contexts/auth-contexto";
const EditarAssinatura = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { assinatura } = route.params || {};

  const { uid } = useContext(AuthContext);

  const [nome, setNome] = useState(assinatura ? assinatura.nome : "");
  const [valor, setValor] = useState(assinatura ? String(assinatura.valor) : "");
  const [dataRenovacao, setDataRenovacao] = useState(
    assinatura ? new Date(assinatura.dataRenovacao).toISOString().split('T')[0] : ""
  );

  const salvar = async () => {
    if (!nome || !valor || !dataRenovacao) {
      Alert.alert("Preencha todos os campos!");
      return;
    }

    const dados = {
      nome,
      valor: parseFloat(valor.replace(',', '.')),
      categoria: assinatura.categoria,
           dataRenovacao: new Date(Date.UTC(
          new Date(dataRenovacao + "T00:00:00").getUTCFullYear(),
          new Date(dataRenovacao + "T00:00:00").getUTCMonth(),
          new Date(dataRenovacao + "T00:00:00").getUTCDate()
      )),
    };

    try {
      if (assinatura) {
        await atualizarAssinatura(uid, assinatura.id, dados);
      } else {
        await adicionarAssinatura(uid, dados);
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