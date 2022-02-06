import { Platform } from "react-native";
import styled from "styled-components/native";
import { defaultTheme } from "../../constants/theme";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const FixedContainer = styled.View`
  width: 100%;
  padding-top: ${hp("3%")};
  padding-bottom: ${hp("2%")};
  padding-left: ${wp("6%")};
  padding-right: ${wp("6%")};

  align-self: center;

  background-color: ${defaultTheme.background};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.025);
  elevation: 1; /* Apply box-shadow on android devices */

  position: ${() =>
    Platform.select({
      web: "fixed",
      native: "absolute",
    })};
  top: 0;
`;
