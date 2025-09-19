import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Header from "./components/Header";
import Recents from "./components/Recents";
import DailyMixes from "./components/DailyMixes";
import Audiobooks from "./components/Audiobooks";
import { MusicContext } from "./MusicContext";

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

  const [dailyMixes] = useState([
    { 
      id: "d1", 
      title: "Daily Well...",
      image: "https://picsum.photos/150/150?random=4"
    },
    { 
      id: "d2", 
      title: "Nt/o-Hop C...",
      image: "https://picsum.photos/150/150?random=5"
    },
    { 
      id: "d3", 
      title: "80s Hard...",
      image: "https://picsum.photos/150/150?random=6"
    },
  ]);

  const [audiobooks] = useState([
    { 
      id: "a1", 
      title: "Mastering Conversation...", 
      author: "Helen Stone", 
      premium: true,
      image: "https://picsum.photos/150/150?random=7"
    },
    { 
      id: "a2", 
      title: "Control your mind and...", 
      author: "Eric Robertson", 
      premium: true,
      image: "https://picsum.photos/150/150?random=8"
    },
  ]);

  return (
    <View style={styles.container}>
      <MusicContext.Provider value={{ recents, dailyMixes, audiobooks }}>
        <ScrollView contentContainerStyle={styles.content}>
          <Header />
          <Recents />
          <DailyMixes />
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
    backgroundColor: "#fff" 
  },
  content: { 
    padding: 16, 
    gap: 24 
  },
});