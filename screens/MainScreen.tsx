import { ImageBackground, StyleSheet, Text, View } from "react-native";
import {
  SelectorModal,
  SelectorModalOption,
} from "../components/SelectorModal";

import Button from "../components/Button";
import Fontisto from "@expo/vector-icons/Fontisto";
import Location from "../types/Location";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import UnitToggle from "../components/UnitToggle";
import WeatherInfo from "../components/WeatherInfo";
import WeatherType from "../types/WeatherType";

export default function MainScreen() {
  const location: Location = {
    name: "Calgary, AB",
    temperatureInCelsius: 11,
    weatherType: WeatherType.PARTLY_SUNNY,
    latitude: 51.0469212,
    longitude: -114.0559973,
  };

  return (
    <>
      <ImageBackground
        source={require("../assets/background.jpg")}
        resizeMode="cover"
        style={styles.wrapper}
      >
        <StatusBar style="light" />
        <SafeAreaView style={styles.container}>
          <Button label={location.name} palette="light" style={styles.button} />
          <WeatherInfo location={location} style={styles.weatherInfo} />
          <UnitToggle value="C" />
          <View style={styles.footer}>
            <Text style={styles.footerTitle}>Captured at</Text>
            <Text style={styles.footerText}>
              {`(${location.latitude}, ${location.longitude})`}
            </Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
      <SelectorModal header="Locations" visible={true}>
        <SelectorModalOption>
          <Text>Add new</Text>
          <Fontisto name="plus-a" size={15} />
        </SelectorModalOption>
        <SelectorModalOption>
          <Text>Calgary, AB</Text>
        </SelectorModalOption>
      </SelectorModal>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    alignSelf: "stretch",
  },
  weatherInfo: {
    marginBottom: 160,
  },
  footer: {
    alignItems: "center",
  },
  footerTitle: {
    color: "white",
    fontSize: 10,
    textTransform: "uppercase",
    marginBottom: 3,
  },
  footerText: {
    color: "white",
    fontSize: 12,
  },
});