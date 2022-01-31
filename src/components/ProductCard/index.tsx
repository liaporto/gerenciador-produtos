import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Product } from "../../../interfaces";

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
import { formatCurrency, formatId } from "../../utils/utils";
import Spinner from "../Spinner";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const [totalValue, setTotalValue] = useState(product.totalValue);

  const handleAddOne = () => {
    setQuantity(quantity + 1);
  };

  const handleSubtractOne = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      //TODO: Lógica para deletar o produto
    }
  };

  const handleChangeValue = (newValue: number) => {
    setQuantity(newValue);
  };

  const handleDelete = () => {
    //TODO: Lógica para deletar o produto
  };

  useEffect(() => {
    if (quantity === 0) {
      handleDelete();
    }

    setTotalValue(quantity * product.unitPrice);
  }, [quantity]);

  return (
    <Card>
      <Header>
        <IdNumber>N°{formatId(product.id)}</IdNumber>
        <TouchableOpacity onPress={handleDelete}>
          <Icon name="delete" size={18} color={defaultTheme.colors.red} />
        </TouchableOpacity>
      </Header>
      <View>
        <ProductName>{product.name}</ProductName>
        <ProductInfo>
          Valor unitário: R$ {formatCurrency(product.unitPrice)}
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

export default ProductCard;
