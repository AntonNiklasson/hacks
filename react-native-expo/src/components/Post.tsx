import { StyleSheet, View, Text, Image } from "react-native";

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 200,
		borderWidth: 2,
		borderColor: "#333",
		borderRadius: 2,
	},
});

export const Post = ({ cover, body }) => {
	return (
		<View>
			<Image
				style={styles.image}
				source={{
					uri: cover,
					//uri: "https://reactnative.dev/img/tiny_logo.png",
				}}
			/>
			<Text>{body}</Text>
		</View>
	);
};
