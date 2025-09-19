import React, { useContext } from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { MusicContext } from "../MusicContext";

const DailyMixes = () => {
  const { dailyMixes } = useContext(MusicContext);

  return (
    <View>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.row}
      >
        {dailyMixes.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image 
              source={{ uri: item.image }} 
              style={styles.image}
              onError={(e) => console.log('Failed to load image:', e.nativeEvent.error)}
              resizeMode="cover"
            />
            <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default DailyMixes;

const styles = StyleSheet.create({
  row: { 
    gap: 12 
  },
  card: { 
    width: 120,
    marginRight: 12
  },
  image: { 
    width: "100%", 
    height: 120, 
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: "#f0f0f0" // Fallback background
  },
  title: { 
    fontSize: 14, 
    fontWeight: "bold",
    color: "#000",
    textAlign: "center"
  },
});