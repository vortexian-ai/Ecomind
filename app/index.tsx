import { View, Text } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#060e08"
      }}
    >
      <Text style={{ color: "white", fontSize: 22 }}>
        EcoMind 🌍
      </Text>
    </View>
  );
}
