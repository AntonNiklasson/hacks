import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Router } from "./src/components/Router";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Router />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
