import { Text, View } from "react-native";
import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

export default function App() {
  const [loaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if (!loaded) {
    return null;
  }

  return (
    <View>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}
