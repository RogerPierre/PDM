import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';






////////interface

type counterProps={
  invert:boolean
}
const Counter=(props:counterProps)=>{
  const [count,setCount]=useState(0)
  function handleCalc(num:number){
    if(count+num>=0) setCount(count+num)
  }
  return(
    <View style={[styles.scoreCounterView,{flexDirection:props.invert?"row":"row-reverse",}]}> 
        <View>
        <TouchableOpacity
        onPress={()=>handleCalc(-1)}
          style={[styles.minusButton,{alignSelf:props.invert?"flex-end":"flex-start"}]}
        > 
          <Text style={{fontSize:40,marginBottom:12}}>-</Text>

        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>handleCalc(1)}
          style={styles.plusButton}
        >          
          <Text style={{fontSize:40,marginBottom:12}}>+</Text>
        </TouchableOpacity>
        </View>
        
       
        <Text style={{marginTop:20,marginLeft:props.invert?-100:-0,marginRight:props.invert?0:-120,fontSize:40}}>{count}</Text>
        
      </View>
  )
}
const ContainerPointCount=()=>{
  return(
    <View style={styles.pointCount}>
      <Text style={styles.text}> SCORE</Text>
      <View style={{flexDirection:"row"}}>
      <Counter
      invert={false}
      /><Counter
      invert={true}
      />
      

      </View>
    </View>
  )
}
export default function App() {
  return (
    <View style={styles.container}>
      <ContainerPointCount/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pointCount:{
    justifyContent:"flex-start",
    alignItems:"center",
    width:400,
    height:300,
    borderWidth:2,
    borderRadius:20,
  },
  text:{
    paddingLeft:110,
    fontSize:50,
    borderBottomWidth:2,
    width:400
  },
  scoreCounterView:{
    flexDirection:"row-reverse",
    alignSelf:"flex-start",
  },
  minusButton:{
    justifyContent:"center",
    alignItems:"center",
    width:60,
    height:60,
    borderWidth:3,
    marginTop:20,
    marginLeft:20,
    marginBottom:20,

  },
  plusButton:{
    marginLeft:20,
    marginTop:0,
    justifyContent:"center",
    alignItems:"center",
    width:150,
    height:100,
    borderWidth:3,

  }
});
