import { View, Text } from "react-native";

type Props = {
    title: string
}

export default function Header ({ title }: Props) {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    )
}
