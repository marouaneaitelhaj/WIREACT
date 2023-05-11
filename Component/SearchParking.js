import { View, TextInput, Text, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SearchParking() {
  return (
    <View
      style={tw.style("w-full h-full flex justify-center items-center px-4")}
    >
      <View></View>
      <TextInput
        style={tw.style("w-full h-10 border-2 border-gray-300 rounded-md px-2")}
        placeholder="Search Parking"
      />
      <LinearGradient
        colors={["#24aaa1", "#ffffff"]}
        style={tw.style(
          "w-full  flex flex-row justify-start items-center px-4"
        )}
      >
        <Image
          source={{
            uri: "https://www.wawanesa.com/resources/img/usa/blog-images/bigstock-The-Only-Vacant-Parking-Space--262193803-min.jpg",
          }}
          style={{
            width: 150,
            height: 150,
            borderRadius: 10,
            margin: 10,
          }}
        />
        <View>
          <Text style={tw.style("text-lg font-bold text-black")}>
            Parking Name
          </Text>
          <Text style={tw.style("text-base font-normal text-gray-700")}>
            Parking Address
          </Text>
          <Text style={tw.style("text-base font-light text-gray-700")}>
            Address
          </Text>
          <View style={tw.style("w-full flex ")}>
            <Ionicons name="ios-bookmarks-sharp" size={26} />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
