import styled from "styled-components/native";

import { defaultTheme } from "./constants/theme";

export const AppView = styled.SafeAreaView`
  flex: 1;
  background: ${defaultTheme.background};
`;

export const StyledText = styled.Text`
  font-family: Inter_400Regular;
`;
