import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export function Button() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <View style={styles.text}> 
                    <Text>Enviar Assinatura</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

    button: {
        backgroundColor: '',
        borderColor: 'gray',
        borderRadius: 5,
        borderWidth: 0,
        margin: 10,
        padding: 10,
        width: 200,
    },

    text: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});