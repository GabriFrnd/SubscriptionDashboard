import { TextInput, StyleSheet } from 'react-native';

export function InputField({ type, placeholder }) {
    return (
        <TextInput inputMode={type} placeholder={placeholder} style={styles.input} />
    );
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'gray',
        borderRadius: 5,
        borderWidth: 1,
        margin: 10,
        padding: 10,
        width: 350,
    }
});