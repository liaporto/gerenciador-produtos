import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonText, StyledButton } from "./styles";

interface CustomButtonProps extends TouchableOpacityProps {
  label: string;
}

const Button = ({ onPress, label }: CustomButtonProps) => {
  return (
    <StyledButton onPress={onPress}>
      <ButtonText>{label}</ButtonText>
    </StyledButton>
  );
};

export default Button;
