import styled from "styled-components/native";
import { StyledText } from "../../../styles";
import { defaultTheme } from "../../constants/theme";

export const Card = styled.View`
  margin: 4% 0 0;
  padding: 4% 4% 6%;

  border-radius: ${defaultTheme.card.borderRadius};
  box-shadow: ${defaultTheme.card.boxShadow};
  background-color: ${defaultTheme.colors.white};
`;

export const Header = styled.View`
  margin-bottom: 4%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IdNumber = styled.Text`
  font-family: Inter_300Light;
  color: ${defaultTheme.colors.mediumGray3};
`;

export const ProductName = styled.Text`
  margin-bottom: 2%;

  font-size: 18px;
  font-family: Inter_600SemiBold;
`;

export const ProductInfo = styled(StyledText)`
  margin-bottom: 2.5%;
  font-size: 16px;
`;

export const QuantitySpinnerContainer = styled.View`
  margin-top: 3%;
  align-items: center;
`;

export const QuantityLabel = styled.Text`
  margin-bottom: 3%;

  text-align: center;
  font-size: 16px;
  font-family: Inter_600SemiBold;
`;
