import styled from "styled-components/native";
import { defaultTheme } from "../../constants/theme";

interface InputWrapperProps {
  isActive: boolean;
  isSearch?: boolean;
}

export const InputWrapper = styled.View<InputWrapperProps>`
  height: ${defaultTheme.input.height};
  padding: ${defaultTheme.input.padding};

  border-radius: ${defaultTheme.input.borderRadius};
  border-width: 0.8;
  border-color: ${(props: InputWrapperProps) => {
    if (props.isActive) {
      return defaultTheme.colors.primary;
    } else if (props.isSearch) {
      return "transparent";
    } else {
      return defaultTheme.colors.mediumGray3;
    }
  }};
  background-color: ${(props: InputWrapperProps) =>
    props.isSearch
      ? defaultTheme.colors.mediumGray1
      : defaultTheme.colors.white};
`;

export const WrapperView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const StyledTextInput = styled.TextInput`
  flex: 1;
  height: 100%;
`;
