import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,ScrollView  } from 'react-native';
import { HeaderGram } from './components/HeadGram-component';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>IFPIGRAM</Text>

      <HeaderGram
      label='ifpigram'
      />
      <StatusBar/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
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
