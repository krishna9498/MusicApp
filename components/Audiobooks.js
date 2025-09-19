import React, { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import MusicContext from "../MusicContext";

const Audiobooks = () => {
  const { audiobooks } = useContext(MusicContext);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Audiobooks for you</Text>
      <View style={styles.list}>
        {audiobooks.map((item) => (
          <View key={item.id} style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>{item.title}</Text>
              <Text style={styles.author}>{item.author}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Audiobooks;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#121212",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
  },
  list: {
    gap: 16,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  itemText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
    marginBottom: 4,
  },
  author: {
    fontSize: 14,
    color: "#b3b3b3",
  },
});