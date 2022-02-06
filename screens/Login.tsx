import { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  View,
  TouchableOpacity,
} from "react-native";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {};
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}> Login Screen </Text>
      <TextInput
        style={styles.text}
        keyboardType="ascii-capable"
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
        focusable
      />
      <TextInput
        style={styles.text}
        secureTextEntry
        placeholder="Enter Password"
        onSubmitEditing={() => alert("Tada...")}
        onChangeText={setUsername}
      />
      <TouchableOpacity
        style={styles.loginbtn}
        onPress={() => alert("Tada...")}
      >
        <Text style={styles.loginbtnText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  headerText: {
    textAlign: "center",
    fontSize: 25,
    marginBottom: 30,
    fontFamily: "Inter_400Regular",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: "Inter_400Regular",
  },
  loginbtn: {
    backgroundColor: "#022B3A",
    padding: 5,
    borderRadius: 6
  },

  loginbtnText: {
    fontFamily: "Inter_400Regular",
    fontSize: 25,
    color: '#fff'
  },
});
