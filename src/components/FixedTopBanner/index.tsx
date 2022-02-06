import React from "react";
import { FixedContainer } from "./styles";

interface FixedTopBannerProps {
  children?: JSX.Element | Array<JSX.Element>;
}

const FixedTopBanner = ({ children }: FixedTopBannerProps) => {
  return <FixedContainer>{children}</FixedContainer>;
};

export default FixedTopBanner;
