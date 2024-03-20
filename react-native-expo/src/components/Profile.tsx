import { StyleSheet, View, ScrollView, Text, TextInput } from "react-native";
import { useState } from "react";
import { Button } from "./Button";
import { CreatePost } from "./CreatePost";

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

export const Profile = () => {
  const [creating, setCreating] = useState(false);

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>
      <ScrollView
        style={styles.postContainer}
        contentContainerStyle={styles.postContainerInner}
      >
        {!creating ? (
          <Button label="Create post" onPress={() => setCreating(true)} />
        ) : (
          <CreatePost />
        )}
      </ScrollView>
    </View>
  );
};
