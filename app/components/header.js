import { Image, Platform, StyleSheet, Text, View } from "react-native";
import menuLightIcon from "../../assets/Icons/menu_light.png";
import sunIcon from "../../assets/Icons/sun.png";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={menuLightIcon} style={styles.button} />
      <Text style={styles.title}>ensom</Text>
      <Image source={sunIcon} style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    height: Platform.OS === "android" ? 54 : 41,
    paddingHorizontal: 16,
  },
  button: {
    height: Platform.OS === "android" ? 48 : 32,
    width: Platform.OS === "android" ? 48 : 32,
  },
  title: {
    flexGrow: 1,
    fontSize: 32,
    textAlign: "center",
    fontFamily: "SydneyBold",
  },
});
