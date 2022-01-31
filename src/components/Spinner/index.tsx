import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  TextInput as RNTextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { StyledText } from "../../../styles";
import { defaultTheme } from "../../constants/theme";
import TextInput from "../TextInput";
import { Container, SpinnerButton, SpinnerValueInput } from "./styles";

interface SpinnerProps {
  handleSubtract: () => any;
  handleAdd: () => any;
  handleChangeValue: (newValue: number) => any;
  value: number;
}

const Spinner = ({
  handleSubtract,
  handleAdd,
  handleChangeValue,
  value,
}: SpinnerProps) => {
  const handleChange = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    handleChangeValue(+event.nativeEvent.text || 1);
  };

  return (
    <Container>
      <SpinnerButton onPress={handleSubtract}>
        <Icon name="minus" size={15} color={defaultTheme.colors.white} />
      </SpinnerButton>
      <SpinnerValueInput
        keyboardType="numeric"
        value={value + ""}
        onChange={handleChange}
      />
      <SpinnerButton onPress={handleAdd}>
        <Icon name="plus" size={15} color={defaultTheme.colors.white} />
      </SpinnerButton>
    </Container>
  );
};

export default Spinner;
