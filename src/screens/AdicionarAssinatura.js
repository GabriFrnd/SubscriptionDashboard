import { View, Text, StyleSheet  } from 'react-native';
import { InputField } from '../components/InputField';
import { Button } from '../components/Button';

export function AdicionarAssinatura() {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome da Assinatura</Text>
            <InputField type='text' placeholder='Ex: Netflix, Spotify, Adobe ...' />

            <Text style={styles.label}>Valor Mensal (R$)</Text>
            <InputField type='numeric' placeholder='R$ 00.00' />

            <Text style={styles.label}>Data de Renovação</Text>
            <InputField />

            <Text style={styles.label}>Categoria</Text>
            <InputField />

            <Button />
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});