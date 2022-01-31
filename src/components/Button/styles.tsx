import styled from "styled-components/native";
import { defaultTheme } from "../../constants/theme";

export const StyledButton = styled.TouchableOpacity`
  height: ${defaultTheme.input.height};
  padding: ${defaultTheme.input.padding};

  align-items: center;
  justify-content: center;

  background-color: ${defaultTheme.colors.primary};
  border-radius: ${defaultTheme.input.borderRadius};
  box-shadow: ${defaultTheme.input.boxShadow};
`;

export const ButtonText = styled.Text`
  color: ${defaultTheme.colors.white};
  font-family: Inter_500Medium;
  font-size: 16px;
`;
