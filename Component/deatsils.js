import { View, Text } from 'react-native';
import Footer from './footer';
export default function DetailsScreen() {
    return(
        <View>
            <Text>Details Screen</Text>
            <Footer navigation={navigation} />
        </View>
    )
}