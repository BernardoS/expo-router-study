import { Stack } from "expo-router";
import { View } from "react-native";


export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false
            }} >

            <Stack.Screen name="index" options={{ title: 'Entrar' }} />
            <Stack.Screen name="signup" options={{ title: 'Criar Conta' }} />
        </Stack>
    )
}

//Existe a possibilidade de configurar a navegação somente repassando 
//o tipo de navegador desejado

//export default Stack