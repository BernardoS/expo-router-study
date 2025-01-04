import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {Redirect, router,useLocalSearchParams} from "expo-router";

//Este é o entrypoint de nossa aplicação
export default function Home() {

    const {id} = useLocalSearchParams();

    if(!id){
        return <Redirect href="/" />
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title} >Home: {id}</Text>

            <TouchableOpacity onPress={() => router.back()}>
                <Text>Voltar</Text>
            </TouchableOpacity>

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