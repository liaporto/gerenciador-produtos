import React, { useEffect, useState } from "react";
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
} from "react-native";
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
  onBlur,
  onChangeText,
  value,
  isSearch,
}: CustomTextInputProps) => {
  const [isActive, setIsActive] = useState<boolean>();

  return (
    <InputWrapper isActive={isActive} isSearch={isSearch}>
      <WrapperView>
        <StyledTextInput
          value={value}
          onChange={onChange}
          onChangeText={onChangeText}
          onFocus={() => setIsActive(true)}
          onBlur={(e: NativeSyntheticEvent<TextInputFocusEventData>) => {
            setIsActive(false);
            e.persist();
            if (onBlur) {
              onBlur(e);
            }
          }}
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
