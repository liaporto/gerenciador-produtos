import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

interface ProductContextProps {
  products: Product[];
  getAllProducts: () => any;
  saveProduct: (product: FormRegisteredProduct) => any;
  removeProduct: (productId: number) => any;
}

const STORAGE_KEY = "@products";

export const ProductContext = createContext<ProductContextProps>(
  {} as ProductContextProps
);

export const useProduct = () => useContext(ProductContext);

const ProductProvider = (props: any) => {
  const [products, setProducts] = useState<Product[]>([]);

  const getAllProducts = async () => {
    try {
      const response = await AsyncStorage.getItem(STORAGE_KEY);
      return response;
    } catch (err) {
      console.log(err);
    }
  };

  const saveProduct = async (product: FormRegisteredProduct) => {
    try {
      const productsString = await getAllProducts();

      if (productsString) {
        const products = JSON.parse(productsString);

        let usableId = products.length + 1;

        for (let i = 1; i <= products.length; i++) {
          if (i !== products[i - 1].id) {
            usableId = i;
            break;
          }
        }

        const sanitizedProduct = {
          ...product,
          id: usableId,
        };

        const newProducts = [...products, sanitizedProduct];

        setProducts(newProducts);
      } else {
        throw new Error("Não foi possível resgatar produtos");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeProduct = async (productId: number) => {
    try {
      const productsString = await getAllProducts();

      if (productsString) {
        const products = JSON.parse(productsString);
        const newProducts = products.filter(
          (item: Product) => item.id !== productId
        );

        setProducts(newProducts);
      } else {
        throw new Error("Não foi possível resgatar produtos");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeAllData = async () => {
    try {
      AsyncStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      throw new Error();
    }
  };

  const saveData = async () => {
    try {
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    } catch (err) {
      throw new Error();
    }
  };

  const readData = async () => {
    getAllProducts()
      .then((data) => {
        if (data) {
          setProducts(JSON.parse(data));
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    readData();
  }, []);

  useEffect(() => {
    saveData()
      .then(() => {
        console.log("Salvo!");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [products]);

  return (
    <ProductContext.Provider
      value={{
        products,
        getAllProducts,
        saveProduct,
        removeProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
