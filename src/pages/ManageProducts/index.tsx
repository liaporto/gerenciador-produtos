import React, { useEffect, useState } from "react";
import { Separator, StyledFlatList, StyledSubtitle } from "../../../styles";
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
} from "./styles";
import { useProduct } from "../../contexts/product";

const ManageProducts = () => {
  const { products, getAllProducts, saveProduct, removeProduct } = useProduct();

  const [productList, setProductList] = useState<Product[]>(products);
  const [activeSort, setActiveSort] = useState("id");

  const renderItem = ({ item }: any) => {
    return <ProductCard product={item} />;
  };

  const handleRegisterItem = () => {
    saveProduct({
      id: 0,
      name: "Produto 24",
      quantity: 2,
      unitPrice: 5,
      totalValue: 5 * 2,
    })
      .then(() => console.log("Produto registrado"))
      .catch((err: any) => console.log(err));
  };

  const handleSort = (id: string) => {
    setActiveSort(id);
  };

  useEffect(() => {
    setProductList(products);
  }, [products]);

  const renderTopPortionOfPage = () => {
    return (
      <>
        <SearchInputContainer>
          <TextInput
            placeholder="Pesquise por um produto cadastrado"
            isSearch
          />
        </SearchInputContainer>
        <AddProductForm>
          <StyledSubtitle>Adicione um novo produto</StyledSubtitle>
          <InputsContainer>
            <InputControl>
              <TextInput placeholder="Nome" />
            </InputControl>
            <InputControl>
              <TextInput
                keyboardType="numeric"
                placeholder="Quantidade em estoque"
              />
            </InputControl>
            <InputControl>
              <TextInput keyboardType="numeric" placeholder="Valor unitário" />
            </InputControl>
          </InputsContainer>
          <Button
            label="Cadastrar produto"
            onPress={() => handleRegisterItem()}
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
      </>
    );
  };

  return (
    <StyledFlatList
      ListHeaderComponent={renderTopPortionOfPage}
      data={productList}
      renderItem={renderItem}
      keyExtractor={(item: Product) => item.id.toString()}
    />
  );
};

export default ManageProducts;
