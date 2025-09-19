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
      title: "Pop Culture", 
      type: "Playlist", 
      image: "https://picsum.photos/150/150?random=1"
    },
    { 
      id: "r2", 
      title: "Top Hits", 
      type: "Playlist", 
      image: "https://picsum.photos/150/150?random=2"
    },
    { 
      id: "r3", 
      title: "Chill Vibes", 
      type: "Playlist", 
      image: "https://picsum.photos/150/150?random=3"
    },
  ]);

  const [audiobooks] = useState([
    { 
      id: "a1", 
      title: "Muna Madan", 
      author: "Laxmi Prasad Devkota",
      image: "https://picsum.photos/150/150?random=7"
    },
    { 
      id: "a2", 
      title: "Summer Love", 
      author: "Saigrace",
      image: "https://picsum.photos/150/150?random=8"
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