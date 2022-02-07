import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import Login from "./screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import {
  useFonts,
  Inter_900Black,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import AddExpense from "./screens/AddExpense";
import { RootStackParamList } from "./App.interface";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="AddExpense"
            component={AddExpense}
            options={{
              headerLeft: () => null,
            }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
