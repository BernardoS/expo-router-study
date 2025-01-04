import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router, Link, useLocalSearchParams } from "expo-router";

//Este é o entrypoint de nossa aplicação
export default function Product() {

    const { id } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <Text style={styles.title} >Id do produto: {id}</Text>
            <TouchableOpacity onPress={() => router.back()}>
                <Text style={styles.title} >Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 32
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#000',
        paddingHorizontal: 32,
        paddingVertical: 10,
        borderRadius: 10,

    }
});