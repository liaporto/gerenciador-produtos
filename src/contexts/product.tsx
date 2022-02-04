import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

interface ProductContextProps {
  products: Product[];
  getAllProducts: () => any;
  findProduct: (productId: number) => Promise<Product>;
  createProduct: (product: FormRegisteredProduct) => Promise<void>;
  removeProduct: (productId: number) => Promise<void>;
  updateProduct: (alteredProduct: Product, productId: number) => Promise<void>;
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

  const findProduct = async (productId: number) => {
    try {
      const products = await getAllProducts();
      if (products) {
        return JSON.parse(products).find(
          (item: Product) => item.id === productId
        );
      } else {
        throw new Error("Não foi possível resgatar produtos");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const createProduct = async (product: FormRegisteredProduct) => {
    try {
      const productArray = products.sort((a, b) => a.id - b.id);

      let usableId = productArray.length + 1;

      for (let i = 1; i <= productArray.length; i++) {
        if (i !== productArray[i - 1].id) {
          usableId = i;
          break;
        }
      }

      const sanitizedProduct = {
        ...product,
        id: usableId,
      };

      setProducts([...products, sanitizedProduct]);
    } catch (err) {
      console.log(err);
    }
  };

  const updateProduct = async (alteredProduct: Product, productId: number) => {
    try {
      const productsString = await getAllProducts();

      if (productsString) {
        const products = JSON.parse(productsString);

        const newProducts = products.map((item: Product) => {
          if (productId === item.id) {
            return alteredProduct;
          } else {
            return item;
          }
        });

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
      console.log(err);
    }
  };

  const saveData = async () => {
    try {
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    } catch (err) {
      console.log(err);
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
        findProduct,
        createProduct,
        removeProduct,
        updateProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
