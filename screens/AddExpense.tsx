import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  View,
} from "react-native";
import { RootStackParamList } from "../App.interface";

type Props = NativeStackScreenProps<RootStackParamList, "AddExpense">;

export default function AddExpense({ navigation }: Props) {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");

  const logout = () => {
    navigation.replace("Login");
  };

  const addExpense = () => {
    setAmount("");
    setExpenseName("");
    alert("Expense Added");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>Expense Tracker!</Text>
        <Text>Hello Jorav</Text>
        <Button title="Logout" onPress={logout} />
      </View>
      <View>
        <TextInput
          keyboardType="ascii-capable"
          placeholder="Enter the expense"
          value={expenseName}
          onChangeText={setExpenseName}
        />
        <TextInput
          keyboardType="decimal-pad"
          placeholder="Enter the amount"
          value={amount}
          onChangeText={setAmount}
        />
        <Button title="Add" onPress={addExpense} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
