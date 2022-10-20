import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";
import NavigationBar from "./app/components/NavigationBar";
import { Themes } from "./assets/Themes";

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require("./assets/Fonts/Sydney-Serial-Regular.ttf"),
    SydneyBold: require("./assets/Fonts/Sydney-Serial-Bold.ttf"),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <SafeAreaView style={styles.container}>
      <NavigationBar />
      <Text
        style={{
          fontFamily: "Sydney", // test to see if the font is loaded, feel free to remove this
        }}
      >
        Open up App.js to start working on your app!
      </Text>
      <Text
        style={{
          fontFamily: "Sydney-Bold", // test to see if the font is loaded, feel free to remove this
        }}
      >
        ~Good luck~
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
