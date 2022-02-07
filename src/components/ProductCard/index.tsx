import React, { useCallback, useEffect, useState } from "react";
import { Alert, Platform, TouchableOpacity, View } from "react-native";

import Icon from "react-native-vector-icons/AntDesign";
import { defaultTheme } from "../../constants/theme";
import {
  Card,
  Header,
  IdNumber,
  ProductInfo,
  ProductName,
  QuantityLabel,
  QuantitySpinnerContainer,
} from "./styles";
import Spinner from "../Spinner";
import { formatCurrency, formatId } from "../../utils/utils";

interface ProductCardProps {
  product: Product;
  removeProduct: (productId: number) => Promise<void>;
  updateProduct: (alteredProduct: Product, productId: number) => any;
}

const ProductCard = ({
  product,
  updateProduct,
  removeProduct,
}: ProductCardProps) => {
  const [id, setId] = useState(product.id);
  const [name, setName] = useState(product.name);
  const [unitPrice, setUnitPrice] = useState(product.unitPrice);
  const [quantity, setQuantity] = useState(product.quantity);
  const [totalValue, setTotalValue] = useState(product.totalValue);

  const handleAddOne = () => {
    setQuantity(quantity + 1);
  };

  const handleSubtractOne = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      handleDelete();
    }
  };

  const handleChangeValue = (newValue: number) => {
    setQuantity(newValue);
  };

  const handleDelete = () => {
    if (Platform.OS === "web") {
      // const confirmDelete;
      window.confirm("Tem certeza de que deseja apagar esse produto?") &&
        removeProduct(id);
    } else {
      Alert.alert(
        "Apagar produto",
        "Tem certeza de que deseja apagar esse produto?",
        [
          {
            text: "Cancelar",
            onPress: () => {
              console.log("Ação cancelada");
            },
            style: "cancel",
          },
          {
            text: "Apagar",
            onPress: () => {
              removeProduct(id);
            },
            style: "default",
          },
        ],
        {
          cancelable: true,
        }
      );
    }
  };

  const handleUpdate = () => {
    if (quantity === 0) {
      handleDelete();
    }

    setTotalValue(quantity * product.unitPrice);

    const alteredProduct = {
      ...product,
      quantity: quantity,
      totalValue: totalValue,
    };

    updateProduct(alteredProduct, product.id);
  };

  useEffect(() => {
    handleUpdate();
  }, [quantity]);

  return (
    <Card>
      <Header>
        <IdNumber>N°{formatId(id)}</IdNumber>
        <TouchableOpacity onPress={handleDelete}>
          <Icon name="delete" size={18} color={defaultTheme.colors.red} />
        </TouchableOpacity>
      </Header>
      <View>
        <ProductName>{name}</ProductName>
        <ProductInfo>
          Valor unitário: R$ {formatCurrency(unitPrice)}
        </ProductInfo>
        <ProductInfo>Valor total: R$ {formatCurrency(totalValue)}</ProductInfo>
        <QuantitySpinnerContainer>
          <QuantityLabel>Quantidade em estoque</QuantityLabel>
          <Spinner
            handleSubtract={handleSubtractOne}
            handleAdd={handleAddOne}
            handleChangeValue={handleChangeValue}
            value={quantity}
          />
        </QuantitySpinnerContainer>
      </View>
    </Card>
  );
};

function arePropsEqual(
  prevProps: ProductCardProps,
  nextProps: ProductCardProps
) {
  return prevProps.product === nextProps.product;
}

export default React.memo(ProductCard, arePropsEqual);
