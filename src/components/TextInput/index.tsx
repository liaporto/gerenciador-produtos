import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { defaultTheme } from "../../constants/theme";

import { InputWrapper, StyledTextInput, WrapperView } from "./styles";
import Icon from "react-native-vector-icons/AntDesign";

interface CustomTextInputProps extends TextInputProps {
  isSearch?: boolean;
}

const TextInput = ({
  keyboardType,
  placeholder,
  onChange,
  isSearch,
}: CustomTextInputProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <InputWrapper isActive={isActive} isSearch={isSearch}>
      <WrapperView>
        <StyledTextInput
          onChange={onChange}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          placeholder={placeholder}
          keyboardType={keyboardType}
        />
        {isSearch && (
          <Icon name="search1" size={25} color={defaultTheme.colors.darkGray} />
        )}
      </WrapperView>
    </InputWrapper>
  );
};

export default TextInput;
