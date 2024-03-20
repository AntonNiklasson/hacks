import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Post } from "./Post";

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
	header: {
		paddingTop: 60,
		paddingBottom: 10,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
	},
	postContainer: {
		flexDirection: "column",
	},
	postContainerInner: {
		gap: 10,
	},
});

const posts = [
	{
		id: 1,
		cover: "https://loremflickr.com/800/600",
		body: "Nostrud et tempor voluptate in eiusmod excepteur ad ullamco cillum veniam in dolor",
	},
	{
		id: 2,
		cover: "https://loremflickr.com/320/240",
		body: "Nostrud et tempor voluptate in eiusmod excepteur ad ullamco cillum veniam in dolor",
	},
	{
		id: 3,
		cover: "https://loremflickr.com/321/240",
		body: "Nostrud et tempor voluptate in eiusmod excepteur ad ullamco cillum veniam in dolor",
	},
	{
		id: 4,
		cover: "https://loremflickr.com/400/240",
		body: "Nostrud et tempor voluptate in eiusmod excepteur ad ullamco cillum veniam in dolor",
	},
];

export const Feed = () => {
	return (
		<View style={styles.wrapper}>
			<View style={styles.header}>
				<Text style={styles.title}>Feed</Text>
			</View>
			<ScrollView
				style={styles.postContainer}
				contentContainerStyle={styles.postContainerInner}
			>
				{posts.map((post) => {
					return <Post key={post.id} {...post} />;
				})}
			</ScrollView>
		</View>
	);
};
