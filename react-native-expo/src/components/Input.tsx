import { FC } from "react";
import { TextInputProps } from "react-native";
import styled from "styled-components/native";

type Props = {} & TextInputProps;

export const Input: FC<Props> = (props) => {
  return <StyledInput {...props} />;
};

const StyledInput = styled.TextInput`
  font-size: 24px;
  background: white;
  border: 1px solid black;
  border-radius: 8px;
  padding: 12px;
`;
