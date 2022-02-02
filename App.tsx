import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

import ManageProducts from "./src/pages/ManageProducts";

import ProductProvider from "./src/contexts/product";

import { AppView } from "./styles";

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
    <ProductProvider>
      <AppView>
        <ManageProducts />
      </AppView>
    </ProductProvider>
  );
}
