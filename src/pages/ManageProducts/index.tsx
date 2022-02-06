import React, { useEffect, useState } from "react";
import {
  Error,
  MainContainer,
  Separator,
  StyledFlatList,
  StyledSubtitle,
  StyledText,
} from "../../../styles";
import Button from "../../components/Button";
import ProductCard from "../../components/ProductCard";
import TextInput from "../../components/TextInput";
import SortBadge from "../../components/SortBadge";
import {
  AddProductForm,
  BadgesContainer,
  InputControl,
  InputsContainer,
  ProductListContainer,
  SearchInputContainer,
  SearchQueryContainer,
  SearchQueryText,
} from "./styles";
import { useProduct } from "../../contexts/product";

import { TextInputMask } from "react-native-masked-text";
import { useForm, Controller } from "react-hook-form";
import { getRawCurrency } from "../../utils/utils";
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  View,
} from "react-native";
import FixedTopBanner from "../../components/FixedTopBanner";

interface RegisterData {
  name: string;
  quantity: string;
  unitPrice: string;
}

const ManageProducts = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const { products, createProduct, removeProduct, updateProduct } =
    useProduct();

  const [productList, setProductList] = useState<Product[]>(products);
  const [activeSort, setActiveSort] = useState<string>("id");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const renderItem = ({ item }: any) => {
    return (
      <ProductCard
        product={item}
        updateProduct={updateProduct}
        removeProduct={removeProduct}
      />
    );
  };

  const onSubmit = (data: any) => {
    const convertedPrice = getRawCurrency(data.unitPrice);
    const convertedQuantity = parseInt(data.quantity);

    const product = {
      ...data,
      quantity: convertedQuantity,
      unitPrice: convertedPrice,
      totalValue: convertedQuantity * convertedPrice,
    };

    createProduct(product)
      .then(() => console.log("Produto registrado"))
      .catch((err: any) => console.log(err));
  };

  const onError = (err: any) => {
    console.log("Algo deu errado");
    console.log(err);
  };

  const onSearch = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const searchQuery = e.nativeEvent.text;
    setSearchQuery(searchQuery);
  };

  const handleSort = (id: string) => {
    setActiveSort(id);
  };

  const keyExtractor = (item: Product) => item.id.toString();

  const sortByActiveProperty = (a: Product, b: Product) => {
    if (activeSort === "id") {
      return a.id - b.id;
    }

    if (typeof a[activeSort] === "string") {
      return a.name.localeCompare(b.name);
    }

    return (b[activeSort] as number) - (a[activeSort] as number);
  };

  const nameSearchFilter = (item: Product) => {
    return item.name.toLowerCase().includes(searchQuery.toLowerCase());
  };

  useEffect(() => {
    setProductList(products);
  }, [products]);

  const renderTopPortionOfPage = () => {
    return (
      <View>
        <AddProductForm>
          <StyledSubtitle>Adicione um novo produto</StyledSubtitle>
          <InputsContainer>
            <InputControl>
              <Controller
                control={control}
                name="name"
                defaultValue=""
                render={({ field: { onBlur, onChange, value } }) => (
                  <TextInput
                    placeholder="Nome"
                    value={value}
                    onBlur={onBlur}
                    onChangeText={(value: any) => onChange(value)}
                  />
                )}
                rules={{
                  required: "O nome do produto é obrigatório.",
                }}
              />
              {errors.name && <Error>{errors.name.message}</Error>}
            </InputControl>
            <InputControl>
              <Controller
                control={control}
                name="quantity"
                defaultValue=""
                render={({ field: { onBlur, onChange, value } }) => (
                  <TextInput
                    keyboardType="numeric"
                    placeholder="Quantidade em estoque"
                    value={value}
                    onBlur={onBlur}
                    onChangeText={(value: any) => onChange(value)}
                  />
                )}
                rules={{
                  required: "A quantidade em estoque é obrigatória.",
                  min: 1,
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Por favor insira apenas números.",
                  },
                }}
              />
              {errors.quantity &&
                (errors.quantity.type === "min" ? (
                  <Error>A quantidade mínima é de 1 (um) produto.</Error>
                ) : (
                  <Error>{errors.quantity.message}</Error>
                ))}
            </InputControl>
            <InputControl>
              <Controller
                control={control}
                name="unitPrice"
                defaultValue=""
                render={({ field: { onBlur, onChange, value } }) => (
                  <TextInputMask //TODO: Resolver o problema de ref
                    value={value}
                    onBlur={onBlur}
                    includeRawValueInChangeText={true}
                    onChangeText={(value: any) => {
                      onChange(value);
                    }}
                    type={"money"}
                    customTextInput={TextInput}
                    customTextInputProps={{
                      keyboardType: "numeric",
                      placeholder: "Valor unitário",
                      value: value,
                      onChangeText: onChange,
                    }}
                  />
                )}
                rules={{
                  required: "O valor unitário é obrigatório.",
                }}
              />
              {errors.unitPrice && <Error>{errors.unitPrice.message}</Error>}
            </InputControl>
          </InputsContainer>
          <Button
            label="Cadastrar produto"
            onPress={handleSubmit(onSubmit, onError)}
          />
        </AddProductForm>
        <Separator />
        <ProductListContainer>
          <BadgesContainer>
            <SortBadge
              id="id"
              onPress={handleSort}
              label="Id"
              isActive={activeSort === "id"}
            />
            <SortBadge
              id="name"
              onPress={handleSort}
              label="Nome"
              isActive={activeSort === "name"}
            />
            <SortBadge
              id="unitPrice"
              onPress={handleSort}
              label="Valor unitário"
              isActive={activeSort === "unitPrice"}
            />
            <SortBadge
              id="quantity"
              onPress={handleSort}
              label="Quantidade em estoque"
              isActive={activeSort === "quantity"}
            />
            <SortBadge
              id="totalValue"
              onPress={handleSort}
              label="Valor total"
              isActive={activeSort === "totalValue"}
            />
          </BadgesContainer>
        </ProductListContainer>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <StyledFlatList
        keyboardShouldPersistTaps={"handled"}
        keyboardDismissMode="interactive"
        ListHeaderComponent={renderTopPortionOfPage()}
        data={productList.filter(nameSearchFilter).sort(sortByActiveProperty)}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
      <FixedTopBanner>
        <TextInput
          value={searchQuery}
          onChange={onSearch}
          placeholder="Pesquise por um produto cadastrado"
          isSearch
        />
      </FixedTopBanner>
    </View>
  );
};

export default ManageProducts;
