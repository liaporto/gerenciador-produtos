import { View } from "react-native";

import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import ManageProducts from "./src/pages/ManageProducts";

import ProductProvider from "./src/contexts/product";

import { StatusBar } from "expo-status-bar";
import { defaultTheme } from "./src/constants/theme";
import { AppView } from "./styles";

const StatusBarView = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        height: insets.top,
        backgroundColor: defaultTheme.background,
        zIndex: 1,
      }}
    >
      <StatusBar backgroundColor={defaultTheme.background} />
    </View>
  );
};

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
    <SafeAreaProvider>
      <ProductProvider>
        <StatusBarView />
        <AppView>
          <ManageProducts />
        </AppView>
      </ProductProvider>
    </SafeAreaProvider>
  );
}
