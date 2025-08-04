import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      }}
    >
      <Text className="text-4xl font-bold text-blue-600 mb-8 text-center">WELCOME</Text>
      <Link href="../../sign-in">
        <Text>SIGN IN</Text>
      </Link>
      <Link href="./explore">
        <Text>EXPLORE</Text>
      </Link>
      <Link href="./profile">
        <Text>PROFILE</Text>
      </Link>
    </View>
  );
}
 