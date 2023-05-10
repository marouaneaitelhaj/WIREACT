import { View, Text } from 'react-native';
import tw from "tailwind-react-native-classnames";

export default function HistoryScreen() {
    return(
        <View style={tw.style('w-full h-full flex justify-center items-center')}>
            <Text>History Screen</Text>
        </View>
    )
}