import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,ScrollView  } from 'react-native';
import { HeaderGram } from './components/HeadGram-component';
import { useState } from 'react';
import { IUserData } from './core/user';

export default function App() {
  const [uris,setUris]=useState([
    {
      name:"Roger",
      urlImage:"https://placehold.co/100x100.jpg"
    } as IUserData
  ])
  for(let i =0;i<10;i++){
    uris.push({
      name:"Roger",
      urlImage:"https://placehold.co/100x100.jpg"
    } as IUserData)
  }
  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.text}>IFPIGRAM</Text>

      <HeaderGram
      label='ifpigram'
      userData={uris}
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
    top:10,
    fontFamily:"monospace",
    fontSize:20,
    },
});
