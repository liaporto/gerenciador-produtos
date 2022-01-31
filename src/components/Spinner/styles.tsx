import styled from "styled-components/native";
import { defaultTheme } from "../../constants/theme";

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SpinnerButton = styled.TouchableOpacity`
  padding: 12px;
  border-radius: 100;
  background-color: ${defaultTheme.colors.primary};
`;

export const SpinnerValueInput = styled.TextInput`
  height: 100%;
  width: 15%;
  margin: 0 2%;

  text-align: center;
  font-size: 18px;
  font-family: Inter_500Medium;
`;
