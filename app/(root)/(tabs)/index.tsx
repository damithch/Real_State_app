import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-4xl font-black text-blue-600 mb-8 text-center">
        WELCOME
      </Text>
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
 