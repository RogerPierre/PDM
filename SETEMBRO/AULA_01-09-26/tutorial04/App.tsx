import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [whoActive,setWhoActive]=useState("v")
  function handleCicleSignals(){
    switch(whoActive){
      case"v":
        setTimeout(() =>setWhoActive("g"), 15000); 
        break
        case"g":
          setTimeout(() =>setWhoActive("y"), 10000); 
          break
          case"y":
            setTimeout(() =>setWhoActive("v"), 1000); 
            break
    }
    console.log("")
  }

  
  useEffect(()=>{handleCicleSignals(),[Text]})
  return (
    <View style={{alignItems: 'center', justifyContent: 'center',flex:1,}}>
      <View style={styles.container}>
      <Text style={[{ backgroundColor: whoActive=="v"?'#ff0000':'#3b1a1a' },styles.signals]}></Text>
      <Text style={[{ backgroundColor: whoActive=="y"?'#d9ff00':'#3b1a1a' },styles.signals]}></Text>
      <Text style={[{ backgroundColor: whoActive=="g"?'#00ff37':'#3b1a1a' },styles.signals]}></Text>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#07003b',
    width:100,
    height:200,
    gap:12,
  },
  signals:{
    width:50,
    height:50,
    borderRadius:100,
  }
});
