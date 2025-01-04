import { Link } from "expo-router";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";


//Este é o entrypoint de nossa aplicação
export default function Index() {

    return (
        <View style={styles.container}>
            <Text style={styles.title} >Entrar</Text>
            <Link href="/signup" asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={{color:'#FFF'}}>
                        Criar Conta
                    </Text>
                </TouchableOpacity>
            </Link>
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
    button:{
        backgroundColor:'#000',
        paddingHorizontal:32,
        paddingVertical:10,
        borderRadius:10,
        
    }
});