import styled from "styled-components/native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { defaultTheme } from "./src/constants/theme";

export const AppView = styled.SafeAreaView`
  flex: 1;
  background: ${defaultTheme.background};
`;

export const MainContainer = styled.View`
  padding-top: ${hp("5%")};
  padding-bottom: ${hp("5%")};
  padding-left: ${wp("6%")};
  padding-right: ${wp("6%")};
`;

export const StyledFlatList = styled.FlatList`
  overflow: visible;
  margin-bottom: ${hp("5%")};
  margin-top: ${hp("5%")};
  padding-left: ${wp("6%")};
  padding-right: ${wp("6%")};
`;

export const Separator = styled.View`
  align-self: center;

  height: 1;
  width: 90%;
  margin: 5% 0;

  border-top-width: 0.5;
  border-top-color: ${defaultTheme.colors.mediumGray3};
`;

export const StyledText = styled.Text`
  font-family: Inter_400Regular;
`;

export const StyledSubtitle = styled.Text`
  font-size: 20px;
  font-family: Inter_600SemiBold;
`;
