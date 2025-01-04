import { Slot } from "expo-router";
import { View } from "react-native";


export default function Layout(){
    return (
        <View style={{flex:1}}>
            <View style={{width:'100%', height:40, backgroundColor:'#000'}} />
            <Slot/>
            <View style={{width:'100%', height:40, backgroundColor:'#c3c3c3'}} />
        </View>
    )
}