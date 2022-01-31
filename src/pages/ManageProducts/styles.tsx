import styled from "styled-components/native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const AddProductForm = styled.View`
  margin-bottom: ${hp("2%")};
`;

export const SearchInputContainer = styled.View`
  margin-bottom: ${hp("5%")};
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

export const ProductListContainer = styled.View`
  margin-top: ${hp("2%")};
`;
