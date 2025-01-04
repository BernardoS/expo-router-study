import { router } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";


//Este é o entrypoint de nossa aplicação
export default function SignUp() {

    function back() {

        if(router.canGoBack()){
            return Alert.alert("Não é possível voltar a página")
        }

        router.back();
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Criar Conta</Text>
            <TouchableOpacity onPress={back}>
                <Text style={styles.back}>
                    Voltar
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    back: {
        fontSize: 16,
    }
});