import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function FlatList() {
  const [people, setPeople] = useState([
    { name: "shawn", id: 1 },
    { name: "steve", id: 2 },
    { name: "khris", id: 3 },
    { name: "diya", id: 4 },
    { name: "makayla", id: 5 },
    { name: "amandla", id: 6 },
    { name: "shawn", id: 7 },
  ]);

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prev) => {
      return prev.filter((person) => person.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        numColumns={2}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item?.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  boldText: {
    fontWeight: "bold",
    color: "gray",
  },
  item: {
    width: 150,
    borderColor: "#777",
    backgroundColor: "blue",
    color: "#fff",
    padding: 50,
    paddingHorizontal: 10,
    margin: 10,
    fontSize: 18,
  },
});
