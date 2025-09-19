import React, { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import MusicContext from "../MusicContext";

const Recents = () => {
  const { recents } = useContext(MusicContext);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Recently Played</Text>
      <View style={styles.list}>
        {recents.map((item) => (
          <View key={item.id} style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.itemText}>{item.title}</Text>
              <Text style={styles.itemSubtext}>{item.type} • {item.user}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Recents;

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
    gap: 12,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
    borderRadius: 8,
    padding: 8,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 4,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  itemText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
    marginBottom: 4,
  },
  itemSubtext: {
    fontSize: 14,
    color: "#b3b3b3",
  },
});