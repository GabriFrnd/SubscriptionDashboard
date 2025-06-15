import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BotaoListaCompleta = () => {
  const navigation = useNavigation();

  const irParaLista = () => {
    navigation.navigate("AssinaturasList", { screen: "Lista" });
  };

  return (
  <View style={styles.buttonContainer}>
    <Button title="Ver Lista Completa de Assinaturas" onPress={irParaLista} />
  </View>
  );
};

const styles = StyleSheet.create({
    buttonContainer: {
      marginTop: 10,
      marginBottom: 10,  
    }
});

export default BotaoListaCompleta;
