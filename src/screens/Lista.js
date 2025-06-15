import { useEffect, useState, useContext } from "react";
import { FlatList, View, StyleSheet, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ItemAssinatura from "../components/ItemAssinatura";
import { observarAssinaturas, buscarTodasAssinaturas, deletarAssinatura } from "../services/assinaturaService";
import { AuthContext } from '../contexts/auth-contexto';

const Lista = () => {
  const navigation = useNavigation();
  const [assinaturas, setAssinaturas] = useState([]);

  const { uid } = useContext(AuthContext);

  useEffect(() => {
    if (uid) {
      const unsubscribe = observarAssinaturas(uid, (assinaturasRecebidas) => {
        setAssinaturas(assinaturasRecebidas);
      });
      return () => unsubscribe();
    }  
  }, [uid]);

  const aoExcluir = (id) => {
    Alert.alert(
      "Excluir",
      "Deseja realmente excluir esta assinatura?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          onPress: async () => {
            await deletarAssinatura(uid, id);
          },
          style: "destructive",
        },
      ],
      { cancelable: true }
    );
  };

  const aoEditar = (assinatura) => {
    navigation.navigate("Editar", {
      assinatura
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
    </View>
  ); 

};
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

