import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Button from "../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import WeatherIcon from "../components/WeatherIcon";
import WeatherType from "../types/WeatherType";

const NUM_KEYBOARD = Platform.OS === 'android' ? 'decimal-pad' : 'numbers-and-punctuation';

export default function AddLocationScreen() {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={10}
        >
          <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
            <View>
              <Text style={styles.label}>Location name</Text>
              <TextInput style={[styles.inputBox, styles.input]} />
              <Text style={styles.label}>Condition</Text>
              <View style={[styles.inputBox, styles.conditionInput]}>
                <ScrollView horizontal>
                  <View style={styles.conditionIcons}>
                    <TouchableOpacity style={styles.conditionIcon}>
                      <WeatherIcon type={WeatherType.SUNNY} size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.conditionIcon,
                        styles.conditionIconSelected,
                      ]}
                    >
                      <WeatherIcon type={WeatherType.PARTLY_SUNNY} size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.conditionIcon}>
                      <WeatherIcon type={WeatherType.CLOUDY} size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.conditionIcon}>
                      <WeatherIcon type={WeatherType.RAINY} size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.conditionIcon}>
                      <WeatherIcon type={WeatherType.THUNDERSTORM} size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.conditionIcon}>
                      <WeatherIcon type={WeatherType.SNOW} size={25} />
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </View>
              <Text style={styles.label}>Temperature (°C)</Text>
              <TextInput keyboardType={NUM_KEYBOARD} style={[styles.inputBox, styles.input]} />
              <Text style={styles.label}>Latitude</Text>
              <TextInput keyboardType={NUM_KEYBOARD} style={[styles.inputBox, styles.input]} />
              <Text style={styles.label}>Longitude</Text>
              <TextInput keyboardType={NUM_KEYBOARD} style={[styles.inputBox, styles.input]} />
            </View>
            <Button
              label="Verify & Submit"
              palette="dark"
              style={styles.button}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: "#eee",
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollViewContentContainer: {
    flexGrow: 1,
    paddingHorizontal: 30,
    justifyContent: "space-between",
  },
  inputBox: {
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "lightgray",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "stretch",
  },
  input: {
    paddingVertical: 13,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  conditionInput: {
    paddingVertical: 13,
    paddingHorizontal: 10,
  },
  numberInput: {
    borderLeftWidth: 1,
    borderColor: "lightgray",
    flex: 1,
  },
  label: {
    color: "black",
    fontSize: 13,
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
  conditionIcons: {
    flexDirection: "row",
  },
  conditionIcon: {
    alignItems: "center",
    justifyContent: "center",
    width: 56,
    height: 56,
  },
  conditionIconSelected: {
    backgroundColor: "#eee",
    borderRadius: 28,
  },
  button: {
    marginTop: 30,
  },
});