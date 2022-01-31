import React from "react";
import { BadgeContainer, BadgeText } from "./styles";

interface SortBadgeProps {
  id: string;
  label: string;
  isActive: boolean;
  onPress: (event: any) => any;
}

const SortBadge = ({ id, label, isActive, onPress }: SortBadgeProps) => {
  return (
    <BadgeContainer id={id} isActive={isActive} onPress={() => onPress(id)}>
      <BadgeText isActive={isActive}>{label}</BadgeText>
    </BadgeContainer>
  );
};

export default SortBadge;
