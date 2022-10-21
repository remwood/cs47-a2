import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Icons, Themes } from "../../assets/Themes";

export default function Footer() {
  return (
    <View style={bottomNavigationStyles.container}>
      <NavigationButton first source={Icons.discover.light} text={"Discover"} />
      <NavigationButton source={Icons.heart.light} text={"Matches"} />
      <NavigationButton source={Icons.messages.light} text={"DMs"} />
    </View>
  );
}

const bottomNavigationStyles = StyleSheet.create({
  container: {
    backgroundColor: Themes.light.navigation,
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 8,
    width: Dimensions.get("window").width,
  },
});

function NavigationButton(props) {
  return (
    <View
      style={[
        navigationButtonStyles.buttonContainer,
        { marginLeft: props.first ? 0 : 64 },
      ]}
    >
      <Image source={props.source} style={navigationButtonStyles.image} />
      <Text style={navigationButtonStyles.text}>{props.text}</Text>
    </View>
  );
}

const navigationButtonStyles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
  },
  image: {
    height: 36,
    width: 36,
  },
  text: {
    color: Themes.light.textSecondary,
    fontFamily: "Sydney",
  },
});
