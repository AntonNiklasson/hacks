import { FC } from "react";
import { Pressable } from "react-native";
import styled from "styled-components/native";

type ButtonProps = {
  label: string;
  onPress: () => void | Promise<void>;
  variant?: "primary" | "destructive";
};

export const Button: FC<ButtonProps> = ({
  label,
  onPress,
  variant = "primary",
}) => {
  return (
    <StyledPressable variant={variant} onPress={onPress}>
      <Label variant={variant}>{label}</Label>
    </StyledPressable>
  );
};

const StyledPressable = styled(Pressable)<{ variant: ButtonProps["variant"] }>`
  flex-grow: 0;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  background: ${(p) => (p.variant === "destructive" ? "red" : "black")};
  border: 2px solid black;
  border-color: ${(p) => (p.variant === "destructive" ? "red" : "black")};
  border-radius: 8px;
`;
const Label = styled.Text<{ variant: ButtonProps["variant"] }>`
  font-weight: 600;
  font-size: 24px;
  color: white;
`;
