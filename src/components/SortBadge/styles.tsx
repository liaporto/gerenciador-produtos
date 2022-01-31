import styled from "styled-components/native";
import { StyledText } from "../../../styles";
import { defaultTheme } from "../../constants/theme";

interface BadgeProps {
  isActive: boolean;
}

export const BadgeContainer = styled.TouchableOpacity`
  margin: 0 2% 2%;
  padding: 8px 16px;

  align-items: center;
  justify-content: center;

  border-radius: ${defaultTheme.input.borderRadius};
  border-width: 1;
  border-color: ${(props: BadgeProps) =>
    props.isActive
      ? defaultTheme.colors.primary
      : defaultTheme.colors.darkGray};
  background-color: ${(props: BadgeProps) =>
    props.isActive ? defaultTheme.colors.primary : defaultTheme.colors.white};
`;

export const BadgeText = styled(StyledText)<BadgeProps>`
  color: ${(props: BadgeProps) =>
    props.isActive ? defaultTheme.colors.white : defaultTheme.colors.darkGray};
`;
