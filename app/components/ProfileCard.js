import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import playerLight from "../../assets/Icons/player_light.png";
import mtl from "../../assets/Profiles/mtl.jpg";
import audioWaveform from "../../assets/Icons/audio_waveform_light.png";
import { Themes } from "../../assets/Themes";

export default function ProfileCard() {
  return (
    <View style={styles.container}>
      <ImageBackground source={mtl} resizeMode="cover" style={styles.image}>
        <Text style={styles.name}>Marc</Text>
        <Text style={styles.distance}>2 miles away</Text>
      </ImageBackground>
      <View style={styles.audioFeature}>
        <Text style={styles.audioFeatureTitle}>My Hottest Take</Text>
        <View style={styles.audioContainer}>
          <Image source={playerLight} style={styles.audioFeaturePlayButton} />
          <Image
            resizeMode="contain"
            source={audioWaveform}
            style={styles.audioFeatureWaveform}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 32,
    flex: 1,
    marginHorizontal: 16,
    paddingVertical: 16,
  },
  image: {
    borderRadius: 16,
    elevation: 4,
    height: Dimensions.get("window").width - 32,
    justifyContent: "space-between",
    overflow: "hidden",
    padding: 16,
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOffset: Themes.light.shadows.shadowOffset,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowRadius: Themes.light.shadows.shadowRadius,
    width: Dimensions.get("window").width - 32,
  },
  name: {
    color: Themes.light.textSecondary,
    fontFamily: "Sydney",
    fontSize: 24,
  },
  distance: {
    color: Themes.light.textSecondary,
    fontFamily: "Sydney",
  },
  audioFeature: {
    backgroundColor: Themes.light.bgSecondary,
    borderRadius: 32,
    elevation: 4,
    marginTop: 16,
    padding: 16,
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOffset: Themes.light.shadows.shadowOffset,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowRadius: Themes.light.shadows.shadowRadius,
  },
  audioFeatureTitle: {
    fontFamily: "Sydney",
    fontSize: 24,
  },
  audioContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  audioFeaturePlayButton: {
    height: 64,
    width: 64,
  },
  audioFeatureWaveform: {
    height: 64,
    marginLeft: 8,
    width: 275,
  },
});
