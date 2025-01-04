import { Link } from "expo-router";
import {View, Text, StyleSheet} from "react-native";


//Este é o entrypoint de nossa aplicação
export default function SignUp(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Criar Conta</Text>
            <Link href="/" style={styles.back}>
                Voltar
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:22,
        fontWeight:'bold'
    },
    back:{
        fontSize:16,
    }
});