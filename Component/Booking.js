import { View, Text } from 'react-native';
import tw from "tailwind-react-native-classnames";

export default function BookingScreen() {
    return(
        <View style={tw.style('w-full h-full flex justify-center items-center')}>
            <Text>Booking Screen</Text>
        </View>
    )
}