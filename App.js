import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Header from "./components/Header";
import Recents from "./components/Recents";
import Audiobooks from "./components/Audiobooks";
import MusicContext from "./MusicContext";

const App = () => {
  const [recents] = useState([
    { 
      id: "r1", 
      title: "Pop mix", 
      type: "Playlist", 
      user: "User 1",
      image: "https://picsum.photos/150/150?random=1"
    },
    { 
      id: "r2", 
      title: "Hot Hits", 
      type: "Playlist", 
      user: "User 1",
      image: "https://picsum.photos/150/150?random=2"
    },
    { 
      id: "r3", 
      title: "Upload Mix", 
      type: "Playlist", 
      user: "User 1",
      image: "https://picsum.photos/150/150?random=3"
    },
  ]);

  const [audiobooks] = useState([
    { 
      id: "a1", 
      title: "China Harayeko", 
      author: "Unknown Author",
      image: "https://picsum.photos/150/150?random=7"
    },
    { 
      id: "a2", 
      title: "World War Z", 
      author: "Max Brooks",
      image: "https://picsum.photos/150/150?random=8"
    },
    { 
      id: "a3", 
      title: "Running of the Memory", 
      author: "Mark Carroll",
      image: "https://picsum.photos/150/150?random=9"
    },
  ]);

  return (
    <View style={styles.container}>
      <MusicContext.Provider value={{ recents, audiobooks }}>
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <Header />
          <Recents />
          <Audiobooks />
        </ScrollView>
      </MusicContext.Provider>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#121212" // Dark background like music apps
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 24,
  },
});