import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { formatarMoeda, formatarData } from '../utils/formatadores';

const ItemAssinatura = ({ assinatura, aoEditar, aoExcluir }) => (
  <View style={styles.containerItem}>
    <View style={styles.info}>
      <Text style={styles.nome}>{assinatura.nome}</Text>
      <Text style={styles.detalhes}>Valor: R$ {formatarMoeda(assinatura.valor)}</Text>
      <Text style={styles.detalhes}>Renova em: {formatarData(assinatura.dataRenovacao)}</Text>
    </View>
    <View style={styles.acoes}>
      <TouchableOpacity onPress={aoEditar} style={styles.botaoIcone}>
        <Ionicons name="create-outline" size={20} />
      </TouchableOpacity>
      <TouchableOpacity onPress={aoExcluir} style={styles.botaoIcone}>
        <Ionicons name="trash-outline" size={20} />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  containerItem: {
    flexDirection: 'row',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  info: {
    flex: 1
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  detalhes: {
    fontSize: 14
  },
  acoes: {
    flexDirection: 'row',
    marginLeft: 10
  },
  botaoIcone: {
    marginLeft: 8
  }
});

export default ItemAssinatura;