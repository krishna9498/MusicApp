import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Header = () => {
  const playButton = "▶"; 

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>MusicApp</Text>

      <View style={styles.menu}>
        <Text style={[styles.menuItem, styles.activeMenuItem]}>Music</Text>
        <Text style={styles.menuItem}>Podcasts</Text>
        <Text style={styles.menuItem}>Audiobooks</Text>
      </View>

      <View style={styles.categories}>
        <Text style={styles.categoryTitle}>Most Played</Text>
        <View style={styles.categoryList}>
          <View style={styles.categoryRow}>
            <Text style={styles.categoryItem}>Rap songs</Text>
            <TouchableOpacity style={styles.playButton}>
              <Text style={styles.playButtonText}>{playButton}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.categoryRow}>
            <Text style={styles.categoryItem}>Melody</Text>
            <TouchableOpacity style={styles.playButton}>
              <Text style={styles.playButtonText}>{playButton}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.categoryRow}>
            <Text style={styles.categoryItem}>Party Songs</Text>
            <TouchableOpacity style={styles.playButton}>
              <Text style={styles.playButtonText}>{playButton}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.categoryRow}>
            <Text style={styles.categoryItem}>Nepali chill Songs</Text>
            <TouchableOpacity style={styles.playButton}>
              <Text style={styles.playButtonText}>{playButton}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.categoryRow}>
            <Text style={styles.categoryItem}>Hindi Songs</Text>
            <TouchableOpacity style={styles.playButton}>
              <Text style={styles.playButtonText}>{playButton}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 0,
    backgroundColor: "#121212",
  },
  appTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1DB954", // Spotify green color
    marginBottom: 16,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    paddingBottom: 12,
  },
  menuItem: {
    fontSize: 16,
    fontWeight: "600",
    color: "#b3b3b3",
    paddingBottom: 4,
  },
  activeMenuItem: {
    color: "#fff",
    borderBottomWidth: 2,
    borderBottomColor: "#1DB954",
  },
  categories: {
    marginBottom: 16,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 12,
  },
  categoryList: {
    gap: 12,
  },
  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  categoryItem: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
    flex: 1,
  },
  playButton: {
    padding: 8,
    backgroundColor: "#1DB954",
    borderRadius: 20,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  playButtonText: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 2,
  },
});