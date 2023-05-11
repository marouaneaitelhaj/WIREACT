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
import Ionicons from "react-native-vector-icons/Ionicons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// import component
import BookingScreen from "./Component/Booking";
import SearchParking from "./Component/SearchParking";
import HistoryScreen from "./Component/History";
import ProfileScreen from "./Component/Profile";
import Maps from "./Component/maps";
import { useTheme } from "react-native-paper";
// import { createDrawerNavigator } from '@react-navigation/drawer';

export default function App() {
  const theme = useTheme();
  // theme.colors.secondaryContainer = "transparent";
  const Stack = createNativeStackNavigator();
  const Tab = createMaterialBottomTabNavigator();
  const Top = createMaterialTopTabNavigator();
  // const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer
    
      theme={{
        colors: {
          secondaryContainer: "transparent",
        },
      }}
    >
      {/* <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator> */}
      <Tab.Navigator
        initialRouteName="Nearby"
        barStyle={{ backgroundColor: "#ffffff" }}
        activeColor="#24aaa1"
        inactiveColor="gray"
        shifting={true}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              // <FontAwesomeIcon color={color} icon={faPaperPlane} />
              <Ionicons name="home" color={color} size={26} />
            ),
          }}
          name="Nearby"
          component={Maps}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              // <FontAwesomeIcon color={color} icon={faBookmark} />
              <Ionicons name="bookmark" color={color} size={26} />
            ),
          }}
          name="Booking"
          component={BookingScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              // <FontAwesomeIcon color={color} icon={faP} />
              <Ionicons name="search" color={color} size={26} />
            ),
          }}
          name="Search Parking"
          component={SearchParking}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon
                color={color}
                size={26}
                icon={faClockRotateLeft}
              />
              // <Ionicons name="history" color={color} size={26} />
            ),
          }}
          name="History"
          component={HistoryScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              // <FontAwesomeIcon color={color} icon={faUser} />
              <Ionicons name="person" color={color} size={26} />
            ),
          }}
          name="Profile"
          component={ProfileScreen}
        />
      </Tab.Navigator>
      {/* <Top.Navigator>
        <Top.Screen name="Nearby" component={BookingScreen} />
        <Top.Screen name="Settings" component={Maps} />
      </Top.Navigator> */}
    </NavigationContainer>
  );
}
