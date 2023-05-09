import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons/faMugSaucer";
import Footer from "./Component/footer";
import { NavigationContainer } from "@react-navigation/native";
import Maps from "./Component/maps";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "./Component/deatsils";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.bigOne}>
      <NavigationContainer>
        <Stack.Navigator  initialRouteName="Home">
          <Stack.Screen name="Home" component={Maps} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  bigOne: {
    width: "100%",
    height: "100%",
  },
});
