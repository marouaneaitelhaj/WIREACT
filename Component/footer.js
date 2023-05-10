import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import { faBookmark } from "@fortawesome/free-solid-svg-icons/faBookmark";
import { faP } from "@fortawesome/free-solid-svg-icons/faP";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons/faClockRotateLeft";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { View, Text, StyleSheet, Button } from "react-native";
import tw from "tailwind-react-native-classnames";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Maps from "./maps";
import DetailsScreen from "./deatsils";
export default function Footer() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <View
      style={tw.style(
        "bg-white",
        "w-full",
        "flex",
        "flex-row",
        "absolute",
        "justify-between",
        "bottom-0",
        "py-4",
        "px-4"
      )}
    >
      <FontAwesomeIcon style={tw.style("text-gray-500")} icon={faPaperPlane} />
      <FontAwesomeIcon style={tw.style("text-gray-500")} icon={faBookmark} />
      <FontAwesomeIcon style={tw.style("text-gray-500")} icon={faP} />
      <FontAwesomeIcon style={tw.style("text-gray-500")} icon={faClockRotateLeft} />
      <FontAwesomeIcon style={tw.style("text-gray-500")} icon={faUser} />
      <Tab.Navigator style={tw.style("")}>
        <Tab.Screen name="Home" component={Maps} />
        <Tab.Screen name="Details" component={DetailsScreen} />
      </Tab.Navigator>
    </View>
  );
}
