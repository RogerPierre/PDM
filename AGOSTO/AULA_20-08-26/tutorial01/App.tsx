import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,ScrollView  } from 'react-native';
import { HeaderGram } from './components/HeadGram-component';
import { useState } from 'react';

export default function App() {
  const [uris,setUris]=useState(
    ["https://placehold.co/100x100.jpg",
      "https://placehold.co/100x100.jpg",
      "https://placehold.co/100x100.jpg",
      "https://placehold.co/100x100.jpg",
      "https://placehold.co/100x100.jpg",
      "https://placehold.co/100x100.jpg",
      "https://placehold.co/100x100.jpg",
      "https://placehold.co/100x100.jpg",
      "https://placehold.co/100x100.jpg",
      "https://placehold.co/100x100.jpg",
      "https://placehold.co/100x100.jpg",
      "https://placehold.co/100x100.jpg",
      "https://placehold.co/100x100.jpg",
      "https://placehold.co/100x100.jpg",
      "https://placehold.co/100x100.jpg"
    ]
  )
  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.text}>IFPIGRAM</Text>

      <HeaderGram
      label='ifpigram'
      urisStatus={uris}
      />
      <StatusBar/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:0,
    flex: 1,
    backgroundColor: '#fff',
  },
  text:{
    left:20,
    top:20,
    fontFamily:"monospace",
    fontSize:20,
    },
});
