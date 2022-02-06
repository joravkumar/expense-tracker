import {
    StyleSheet,
    Text,
    SafeAreaView,
    TextInput,
    Button,
    View,
  } from "react-native";
  
  export default function AddExpense() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text>Expense Tracker!</Text>
          <Text>Hello Jorav</Text>
        </View>
        <View>
          <TextInput
            keyboardType="ascii-capable"
            placeholder="Enter the expense"
          />
          <TextInput keyboardType="decimal-pad" placeholder="Enter the amount" />
          <Button title="Add" onPress={() => alert("Button pressed")} />
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
      flexDirection: "row"
    }
  });
  