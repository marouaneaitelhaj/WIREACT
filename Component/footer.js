import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import { faBookmark } from "@fortawesome/free-solid-svg-icons/faBookmark";
import { faP } from "@fortawesome/free-solid-svg-icons/faP";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons/faClockRotateLeft";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

export default function Footer({ navigation }) {
  return (
    <View style={styles.footer}>
      <FontAwesomeIcon   style={{color:"gray"}} icon={faPaperPlane} />
      <FontAwesomeIcon style={{color:"gray"}} icon={faBookmark} />
      <FontAwesomeIcon style={{color:"gray"}} icon={faP} />
      <FontAwesomeIcon style={{color:"gray"}} icon={faClockRotateLeft} />
      <FontAwesomeIcon style={{color:"gray"}} icon={faUser} />
    </View>
    
  );
}
const styles = StyleSheet.create({
  footer: {
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    paddingTop: 20,
    paddingBottom: 20,
    
  },
});
