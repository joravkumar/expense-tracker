import { NativeStackScreenProps } from "@react-navigation/native-stack";
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
import { RootStackParamList } from "../App.interface";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function Login({ navigation }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    navigation.replace("AddExpense", {
      userId: "1",
    });
  };
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
        autoCompleteType="off"
      />
      <TextInput
        style={styles.text}
        secureTextEntry
        placeholder="Enter Password"
        onSubmitEditing={login}
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity style={styles.loginbtn} onPress={login}>
        <Text style={styles.loginbtnText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
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
    padding: 6,
    borderRadius: 10,
    marginTop: 10,
  },
  loginbtnText: {
    fontFamily: "Inter_400Regular",
    fontSize: 25,
    color: "#fff",
    textAlign: "center",
  },
});
