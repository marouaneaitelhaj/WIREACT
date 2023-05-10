import { StatusBar } from "expo-status-bar";
import tw from "tailwind-react-native-classnames";
import { StyleSheet, Text, View, Button } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons/faBookmark";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons/faClockRotateLeft";
import { faP } from "@fortawesome/free-solid-svg-icons/faP";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import component
import BookingScreen from "./Component/Booking";
import SearchParking from "./Component/SearchParking";
import HistoryScreen from "./Component/History";
import ProfileScreen from "./Component/Profile";
import Maps from "./Component/maps";
export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createMaterialBottomTabNavigator();
  return (
    <View style={tw.style("w-full h-full flex ")}>
      <NavigationContainer>
        <Tab.Navigator style={tw.style("")}>
          <Tab.Screen
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesomeIcon
                  style={tw.style("text-gray-500")}
                  icon={faPaperPlane}
                />
              ),
            }}
            name="Nearby"
            component={Maps}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesomeIcon
                  style={tw.style("text-gray-500")}
                  icon={faBookmark}
                />
              ),
            }}
            name="Booking"
            component={BookingScreen}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesomeIcon
                  style={tw.style("text-gray-500")}
                  icon={faP}
                />
              ),
            }}
            name="Search Parking"
            component={SearchParking}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesomeIcon
                  style={tw.style("text-gray-500")}
                  icon={faClockRotateLeft}
                />
              ),
            }}
            name="History"
            component={HistoryScreen}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesomeIcon
                  style={tw.style("text-gray-500")}
                  icon={faUser}
                />
              ),
            }}
            name="Profile"
            component={ProfileScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
