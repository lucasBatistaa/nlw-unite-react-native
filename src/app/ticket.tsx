import Header from "@/components/header";
import { StatusBar } from "react-native";
import { View } from "react-native-reanimated/lib/typescript/Animated";

export default function Ticket() {
    return (
        <View className='flex-1 bg-green-500'>
            <StatusBar barStyle="light-content"/>

            <Header title='Minha Credencial'/>
        </View>
    ) 
}
