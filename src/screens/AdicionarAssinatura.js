import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const AdicionarAssinatura = () => {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState('');
  const [categoria, setCategoria] = useState('');

  const handleSave = () => {
    const currentDate = new Date();
    const inputDate = new Date(Number(ano), Number(mes) - 1, Number(dia));

    // Validações
    if (!nome.trim()) {
      Alert.alert('Erro', 'Digite o nome da assinatura');
      return;
    }

    if (!valor) {
      Alert.alert('Erro', 'Digite o valor da assinatura');
      return;
    }

    if (isNaN(Number(valor.replace(',', '.')))) {
      Alert.alert('Erro', 'Valor inválido (use números e vírgula)');
      return;
    }

    if (!dia || !mes || !ano) {
      Alert.alert('Erro', 'Preencha a data completa');
      return;
    }

    if (Number(dia) < 1 || Number(dia) > 31) {
      Alert.alert('Erro', 'O dia deve estar entre 1 e 31');
      return;
    }

    if (Number(mes) < 1 || Number(mes) > 12) {
      Alert.alert('Erro', 'O mês deve estar entre 1 e 12');
      return;
    }

    if (Number(ano) < 2025) {
      Alert.alert('Erro', 'O ano deve ser igual ou superior a 2025');
      return;
    }

    if (inputDate < currentDate) {
      Alert.alert('Erro', 'A data de renovação não pode ser no passado');
      return;
    }

    if (!categoria) {
      Alert.alert('Erro', 'Selecione uma categoria');
      return;
    }

    Alert.alert('Sucesso', 'Assinatura cadastrada com sucesso!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Nova Assinatura</Text>

      {/* Nome */}
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Netflix"
        value={nome}
        onChangeText={setNome}
      />

      {/* Valor */}
      <Text style={styles.label}>Valor Mensal</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 49,90"
        keyboardType="numeric"
        value={valor}
        onChangeText={text => setValor(text.replace(/[^0-9,]/g, ''))}
      />

      {/* Data */}
      <Text style={styles.label}>Data de Renovação</Text>
      <View style={styles.dateRow}>
        <TextInput
          style={styles.dateInput}
          placeholder="DD"
          maxLength={2}
          value={dia}
          onChangeText={text => setDia(text.replace(/[^0-9]/g, ''))}
        />
        <Text style={styles.dateSeparator}>/</Text>
        <TextInput
          style={styles.dateInput}
          placeholder="MM"
          maxLength={2}
          value={mes}
          onChangeText={text => setMes(text.replace(/[^0-9]/g, ''))}
        />
        <Text style={styles.dateSeparator}>/</Text>
        <TextInput
          style={styles.dateInput}
          placeholder="AAAA"
          maxLength={4}
          value={ano}
          onChangeText={text => setAno(text.replace(/[^0-9]/g, ''))}
        />
      </View>

      {/* Categoria */}
      <Text style={styles.label}>Categoria</Text>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          onValueChange={setCategoria}
          items={[
            { label: 'Streaming', value: 'streaming' },
            { label: 'Educação', value: 'educacao' },
            { label: 'Fitness', value: 'fitness' }
          ]}
          placeholder={{ label: 'Selecione...', value: null }}
          style={pickerSelectStyles}
        />
      </View>

      {/* Botão */}
      <TouchableOpacity 
        style={[styles.button, !categoria && { backgroundColor: '#87CEEB' }]} 
        onPress={handleSave}
        disabled={!categoria}
      >
        <Text style={styles.buttonText}>Salvar Assinatura</Text>
      </TouchableOpacity>    
    </ScrollView>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  dateInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 12,
    textAlign: 'center',
  },
  dateSeparator: {
    marginHorizontal: 5,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1E88E5',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

const pickerSelectStyles = {
  inputIOS: {
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  inputAndroid: {
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
};

export default AdicionarAssinatura;
