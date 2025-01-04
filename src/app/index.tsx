import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {router,Link} from "expo-router";

//Este é o entrypoint de nossa aplicação
export default function Index() {

    function signUp(){
        router.navigate("/signup");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title} >Entrar</Text>

            <TouchableOpacity style={styles.button} onPress={signUp}>
                <Text style={{ color: '#FFF' }}>
                    Criar Conta
                </Text>
            </TouchableOpacity>

            <Link href={{
                pathname:"/signup",
                params:{
                    name:'Bernardo'
                }
            }}>
                Enviar Parâmetro
            </Link>

            <Link href="/product/12">
                Abrir Produto
            </Link>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap:32
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