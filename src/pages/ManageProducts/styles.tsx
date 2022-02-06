import styled from "styled-components/native";

import { defaultTheme } from "../../constants/theme";

import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export const AddProductForm = styled.View`
  margin-top: ${hp("10%")};
  margin-bottom: ${hp("2%")};
`;

export const InputsContainer = styled.View`
  margin-bottom: ${hp("3%")};
`;

export const InputControl = styled.View`
  margin-top: ${hp("2%")};
`;

export const BadgesContainer = styled.View`
  height: ${hp("12%")};
  margin-bottom: ${hp("1%")};

  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: center;
`;

export const SearchQueryContainer = styled.View`
  margin-top: ${hp("2%")};
  margin-bottom: ${hp("2%")};

  align-self: center;
  align-items: center;
`;

export const SearchQueryText = styled.Text`
  font-family: Inter_300Light;
  font-size: 16px;
  color: ${defaultTheme.colors.darkGray};
`;

export const ProductListContainer = styled.View`
  margin-top: ${hp("2%")};
`;
