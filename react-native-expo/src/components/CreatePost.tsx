import { View } from "react-native";
import { Button } from "./Button";
import styled from "styled-components/native";
import { Input } from "./Input";
import { FC, useState } from "react";

type Props = {
	onSubmit: () => void | Promise<void>;
	onCancel: () => void | Promise<void>;
};

export const CreatePost: FC<Props> = ({ onCancel, onSubmit }) => {
	const [title, setTitle] = useState("");

	return (
		<Container>
			<Input
				value={title}
				onChangeText={(text) => setTitle(text)}
				autoFocus
				placeholder="What's up?"
			/>

			<Buttons>
				<Button label="Save" onPress={onSubmit} />
				<Button variant="destructive" label="Cancel" onPress={onCancel} />
			</Buttons>
		</Container>
	);
};

const Container = styled.View`
  padding: 20px;
  gap: 12px;
`;
const Buttons = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  gap: 12px;
`;
